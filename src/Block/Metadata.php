<?php

/**
 * The Metadata class handles filtering block metadata.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023-2024, Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPL-3.0-or-later
 * @link      https://github.com/x3p0-dev/x3p0-ideas
 */

declare(strict_types=1);

namespace X3P0\Ideas\Block;

use X3P0\Ideas\Contracts\Bootable;
use X3P0\Ideas\Tools\HookAnnotation;

class Metadata implements Bootable
{
	use HookAnnotation;

	/**
	 * Map of block type names to their associated settings methods.
	 *
	 * @since 1.0.0
	 * @todo  Type hint with PHP 8.3+ requirement.
	 */
	private const SETTINGS_METHODS = [
		'core/avatar'             => 'coreAvatar',
		'core/heading'            => 'coreHeading',
		'core/navigation-submenu' => 'coreNavigationSubmenu',
		'core/query'              => 'coreQuery',
		'core/query-pagination'   => 'coreQueryPagination'
	];

	/**
	 * Boots the component, running its actions/filters.
	 *
	 * @since 1.0.0
	 */
	#[\Override]
	public function boot(): void
	{
		$this->hookMethods();
	}

	/**
	 * Filters block metadata settings by returning the block-specific
	 * settings if a method exists for it.
	 *
	 * @hook  block_type_metadata_settings  last
	 * @since 1.0.0
	 */
	public function filterSettings(array $settings): array
	{
		if (isset(self::SETTINGS_METHODS[ $settings['name'] ])) {
			$method = self::SETTINGS_METHODS[ $settings['name'] ];

			return $this->$method($settings);
		}

		return $settings;
	}

	/**
	 * Filters the Avatar block args to set custom selectors via the
	 * Selectors API. Originally, Core set the border to the wrapping `<div>`
	 * for around the image. This was fixed by applying the border to the
	 * image itself. But that has the unfortunate side effect of link
	 * outlines not being sharing the same radius. So we fix this in CSS.
	 *
	 * @since 1.0.0
	 * @link  https://github.com/WordPress/gutenberg/pull/53007
	 */
	private function coreAvatar(array $settings): array
	{
		$settings['selectors']['border'] = '.wp-block-avatar';

		return $settings;
	}

	/**
	 * Adds support for background images to the Heading block so that the
	 * `clip-text` style variation can work.
	 *
	 * @since 1.0.0
	 */
	private function coreHeading(array $settings): array
	{
		$settings['supports']['background']                    ??= [];
		$settings['supports']['background']['backgroundImage'] ??= true;
		$settings['supports']['background']['backgroundSize']  ??= true;

		return $settings;
	}

	/**
	 * Filters the Navigation Submenu block args to set custom selectors via
	 * the Selectors API. We must do this so that values set in `theme.json`
	 * for `core/navigation-submenu` are applied only to the submenu
	 * container. Without this, the values are set to both the container
	 * and the parent menu item.
	 *
	 * @since 1.0.0
	 * @link  https://developer.wordpress.org/block-editor/reference-guides/block-api/block-selectors/
	 * @link  https://github.com/WordPress/gutenberg/issues/39392
	 */
	private function coreNavigationSubmenu(array $settings): array
	{
		return [ 'selectors' => [
			// Target the submenu and the responsive container.
			'root'       => '.wp-block-navigation-submenu .wp-block-navigation__submenu-container, nav.wp-block-navigation.wp-block-navigation .wp-block-navigation__responsive-container.is-menu-open',
			'color'      => 'nav.wp-block-navigation .wp-block-navigation-submenu .wp-block-navigation__submenu-container, nav.wp-block-navigation.wp-block-navigation .wp-block-navigation__responsive-container.is-menu-open',
			// Only target the submenu.
			'border'     => 'nav.wp-block-navigation .wp-block-navigation-submenu .wp-block-navigation__submenu-container',
			'spacing'    => '.wp-block-navigation-submenu .wp-block-navigation__submenu-container',
			'typography' => '.wp-block-navigation-submenu .wp-block-navigation__submenu-container'
		] ] + $settings;
	}

	/**
	 * Adds spacing support to the Post Template block.
	 *
	 * @since 1.0.0
	 */
	private function corePostTemplate(array $settings): array
	{
		$settings['supports']['spacing']            ??= [];
		$settings['supports']['spacing']['padding'] ??= true;

		return $settings;
	}

	/**
	 * Adds spacing support to the Query Loop block.
	 *
	 * @since 1.0.0
	 */
	private function coreQuery(array $settings): array
	{
		$settings['supports']['spacing']             ??= [];
		$settings['supports']['spacing']['blockGap'] ??= true;
		$settings['supports']['spacing']['padding']  ??= true;

		return $settings;
	}

	/**
	 * Adds support for Paragraphs to the Query Pagination block. This is
	 * specifically needed for binding a pagination label. Also adds spacing
	 * support.
	 *
	 * @since 1.0.0
	 */
	private function coreQueryPagination(array $settings): array
	{
		$settings['allowed_blocks'][] = 'core/paragraph';

		$settings['supports']['spacing']            ??= [];
		$settings['supports']['spacing']['margin']  ??= [ 'top', 'bottom' ];
		$settings['supports']['spacing']['padding'] ??= true;

		return $settings;
	}
}
