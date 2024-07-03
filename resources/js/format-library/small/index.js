/**
 * Creates the small RichText format type.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023-2024, Justin Tadlock
 * @license   GPL-3.0-or-later
 */

// Internal dependencies.
import { textDecreaseIcon } from '../../common/utils-icon';

// WordPress dependencies.
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { __ }                    from '@wordpress/i18n';
import { toggleFormat }          from '@wordpress/rich-text';

/**
 * Name of the format.
 * @type {string}
 */
const name = 'x3p0/small';

/**
 * RichText format type definition.
 * @type {object}
 */
export default {
	name,
	title: __('Small', 'x3p0-ideas'),
	tagName: 'small',
	className: null,
	edit: ({ isActive, onChange, value }) => (
		<RichTextToolbarButton
			icon={ textDecreaseIcon }
			title={ __('Small', 'x3p0-ideas') }
			isActive={ isActive }
			onClick={ () => onChange(
				toggleFormat(value, { type: name })
			) }
		/>
	)
};
