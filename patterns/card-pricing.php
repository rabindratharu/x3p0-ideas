<?php

/**
 * Title: Pricing Card
 * Slug: x3p0-ideas/card-pricing
 * Categories: x3p0-card
 * Keywords: card, grid
 * Viewport Width: 480
 */

declare(strict_types=1);

# Prevent direct access.
defined('ABSPATH') || exit;

use X3P0\Ideas\Tools\Language;

$icon = get_theme_file_uri('public/media/svg/earthquake.svg');

?>
<!-- wp:group {
	"metadata":{"name":"<?= esc_attr__('Card', 'x3p0-ideas') ?>"},
	"style":{
		"spacing":{
			"padding":{
				"top":"0",
				"bottom":"0",
				"left":"0",
				"right":"0"
			},
			"blockGap":"0"
		},
		"dimensions":{
			"minHeight":"0px"
		}
	},
	"className":"has-global-border is-style-section-3",
	"layout":{
		"type":"flex",
		"orientation":"vertical",
		"justifyContent":"stretch",
		"verticalAlignment":"space-between"
	},
	"fontSize":"xs"
} -->
<div class="wp-block-group has-global-border is-style-section-3 has-xs-font-size" style="min-height:0px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">

	<!-- wp:group {
		"tagName":"header",
		"style":{
			"spacing":{
				"blockGap":"var:preset|spacing|minus-3",
				"padding":{
					"top":"var:preset|spacing|plus-3",
					"bottom":"var:preset|spacing|plus-3",
					"left":"var:preset|spacing|plus-3",
					"right":"var:preset|spacing|plus-3"
				}
			}
		},
		"layout":{"type":"default"}
	} -->
	<header class="wp-block-group" style="padding-top:var(--wp--preset--spacing--plus-3);padding-right:var(--wp--preset--spacing--plus-3);padding-bottom:var(--wp--preset--spacing--plus-3);padding-left:var(--wp--preset--spacing--plus-3)">

		<!-- wp:heading {"level":3,"fontSize":"xl"} -->
		<h3 class="wp-block-heading has-xl-font-size"><?= esc_html__('Placeholder', 'x3p0-ideas') ?></h3>
		<!-- /wp:heading -->

		<!-- wp:paragraph -->
		<p><?= esc_html(Language::loremIpsum(4)) ?></p>
		<!-- /wp:paragraph -->

	</header>
	<!-- /wp:group -->

	<!-- wp:group {
		"style":{
			"spacing":{
				"padding":{
					"top":"var:preset|spacing|base",
					"bottom":"var:preset|spacing|base"
				},
				"blockGap":"var:preset|spacing|minus-3"
			}
		},
		"className": "is-style-section-2",
		"layout":{
			"type":"flex",
			"flexWrap":"nowrap"
		}
	} -->
	<div class="wp-block-group is-style-section-2" style="padding-top:var(--wp--preset--spacing--base);padding-bottom:var(--wp--preset--spacing--base)">

		<!-- wp:paragraph {
			"style":{
				"typography":{
					"fontStyle":"normal",
					"fontWeight":"900"
				}
			},
			"fontSize":"7-xl"
		} -->
		<p class="has-7-xl-font-size" style="font-style:normal;font-weight:900"><?= esc_html__('$95', 'x3p0-ideas') ?></p>
		<!-- /wp:paragraph -->

		<!-- wp:paragraph {"fontSize":"xs"} -->
		<p class="has-xs-font-size"><?= esc_html__('/ year', 'x3p0-ideas') ?></p>
		<!-- /wp:paragraph -->

	</div>
	<!-- /wp:group -->

	<!-- wp:group {
		"metadata":{
			"name":"<?= esc_attr__('Card Content', 'x3p0-ideas') ?>"
		},
		"style":{
			"spacing":{
				"padding":{
					"top":"var:preset|spacing|plus-3",
					"bottom":"var:preset|spacing|plus-3",
					"left":"var:preset|spacing|plus-3",
					"right":"var:preset|spacing|plus-3"
				}
			},
			"layout":{
				"selfStretch":"fill",
				"flexSize":null
			}
		},
		"layout":{
			"type":"flex",
			"orientation":"vertical",
			"justifyContent":"stretch",
			"verticalAlignment":"space-between"
		}
	} -->
	<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--plus-3);padding-right:var(--wp--preset--spacing--plus-3);padding-bottom:var(--wp--preset--spacing--plus-3);padding-left:var(--wp--preset--spacing--plus-3)">

		<!-- wp:list {"className":"has-marker-none"} -->
		<ul class="has-marker-none">

			<?php foreach (range(1, 5) as $item) : ?>

				<?php $style = 4 > $item ? 'is-style-check-circle' : 'is-style-cancel-circle' ?>

				<!-- wp:list-item {
					"className":"<?= esc_attr($style) ?>"
				} -->
				<li class="<?= esc_attr($style) ?>"><?= esc_html__('Placeholder text', 'x3p0-ideas') ?></li>
				<!-- /wp:list-item -->

			<?php endforeach ?>

		</ul>
		<!-- /wp:list -->

		<!-- wp:buttons -->
		<div class="wp-block-buttons">

			<!-- wp:button {
				"width":100,
				"style":{
					"spacing":{
						"padding":{
							"top":"var:preset|spacing|minus-1",
							"bottom":"var:preset|spacing|minus-1"
						}
					}
				}
			} -->
			<div class="wp-block-button has-custom-width wp-block-button__width-100">
				<a class="wp-block-button__link wp-element-button" style="padding-top:var(--wp--preset--spacing--minus-1);padding-bottom:var(--wp--preset--spacing--minus-1)"><?= esc_html__('Placeholder Text →', 'x3p0-ideas') ?></a>
			</div>
			<!-- /wp:button -->

		</div>
		<!-- /wp:buttons -->

	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:group -->
