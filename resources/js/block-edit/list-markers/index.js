/**
 * Filters the `BlockEdit` to add a list marker control.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @license   GPL-2.0-or-later
 */

// Internal dependencies.
import MarkerDropdownControl from './control-marker-dropdown';
import { SUPPORTED_BLOCKS }  from './constants';

// WordPress dependencies.
import { BlockControls } from '@wordpress/block-editor';

/**
 * @description Filters and returns the `BlockEdit` component.
 */
export default ( BlockEdit ) => ( props ) => {
	return SUPPORTED_BLOCKS.includes( props.name ) ? (
		<>
			<BlockEdit { ...props } />
			<BlockControls group="other">
				<MarkerDropdownControl
					attributes={ props.attributes }
					setAttributes={ props.setAttributes }
				/>
			</BlockControls>
		</>
	) : (
		<BlockEdit { ...props } />
	);
};
