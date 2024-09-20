/**
 * Webpack configuration file.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023-2024, Justin Tadlock
 * @license   GPL-3.0-or-later
 */

// WordPress webpack config.
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

// Plugins.
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CopyPlugin               = require('copy-webpack-plugin');
const RtlCssPlugin             = require('rtlcss-webpack-plugin');

// Utilities.
const path         = require('path');
const { globSync } = require('glob');

/**
 * Processes individual block stylesheets for a specific block namespace. These
 * are not imported into the primary stylesheets and are enqueued separately.
 *
 * @since  1.0.0
 * @param  {string} namespace
 * @return {Object.<string, string>}
 */
const blockStylesheets = (namespace) => {
	return globSync(`./resources/scss/blocks/${namespace}/*.scss`).reduce(
		(files, filepath) => {
			const name = path.parse(filepath).name;

			files[`css/blocks/${ namespace }/${name}`] = path.resolve(
				process.cwd(),
				`resources/scss/blocks/${namespace}`,
				`${name}.scss`
			);

			return files;
		}, {}
	)
};

/**
 * Exports the custom webpack config.
 *
 * @since 1.0.0
 */
module.exports = {
	// Includes the default webpack config from WordPress.
	...defaultConfig,
	...{
		entry: {
			...blockStylesheets('core'),
			'js/editor':  path.resolve(process.cwd(), 'resources/js',   'editor.js'),
			'css/screen': path.resolve(process.cwd(), 'resources/scss', 'screen.scss'),
			'css/editor': path.resolve(process.cwd(), 'resources/scss', 'editor.scss'),
			'css/embed':  path.resolve(process.cwd(), 'resources/scss', 'embed.scss')
		},
		plugins: [
			// Very important! Include WP's plugin config or the
			// world will cease to exist as we know it. This also
			// removes the RTL handling for the moment, but it
			// should be re-added at a later date.
			...defaultConfig.plugins.filter(
				(filter) => ! (filter instanceof RtlCssPlugin)
			),

			// Removes the empty `.js` files generated by webpack.
			// For this to work correctly, it needs to run after
			// WP has generated its the `*.asset.php` files. This is
			// what `STAGE_AFTER_PROCESS_PLUGINS` allows.
			new RemoveEmptyScriptsPlugin({
				stage: RemoveEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS
			}),

			// Copies any assets that don't need to be processed to
			// the output folder.
			new CopyPlugin({
				patterns: [
					{
						from: './resources/fonts',
						to:   './fonts'
					},
					{
						from: './resources/media',
						to:   './media'
					}
				]
			})
		]
	},
	performance: {
		maxAssetSize: 512000
	}
};
