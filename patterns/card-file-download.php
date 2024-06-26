<?php

/**
 * Title: File Download Card
 * Slug: x3p0-ideas/card-file-download
 * Categories: x3p0-card
 * Keywords: card, download, file, grid, media
 * Viewport Width: 480
 */

declare(strict_types=1);

# Prevent direct access.
defined('ABSPATH') || exit;

$icon     = get_theme_file_uri('public/media/svg/earthquake.svg');
$download = get_theme_file_uri('public/media/images/mountain-road.webp');

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
		}
	},
	"className":"is-style-card",
	"layout":{
		"type":"flex",
		"orientation":"vertical",
		"justifyContent":"stretch",
		"verticalAlignment":"space-between"
	},
	"fontSize":"sm"
} -->
<div class="wp-block-group is-style-card has-sm-font-size" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">

	<!-- wp:group {
		"metadata":{"name":"<?= esc_attr__('Card Content', 'x3p0-ideas') ?>"},
		"style":{
			"spacing":{
				"blockGap":"var:preset|spacing|base",
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
	<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--plus-3);padding-right:var(--wp--preset--spacing--plus-3);padding-bottom:var(--wp--preset--spacing--plus-3);padding-left:var(--wp--preset--spacing--plus-3)">

		<!-- wp:image {
			"lightbox":{"enabled":false},
			"width":"48px",
			"height":"auto",
			"sizeSlug":"full",
			"linkDestination":"none",
			"className":"is-style-borderless"
		} -->
		<figure class="wp-block-image size-full is-resized is-style-borderless">
			<img src="<?= esc_url($icon) ?>" alt="" style="width:48px;height:auto"/>
		</figure>
		<!-- /wp:image -->

		<!-- wp:heading {"fontSize":"xl"} -->
		<h2 class="wp-block-heading has-xl-font-size"><?= esc_html__('Placeholder', 'x3p0-ideas') ?></h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph -->
		<p><?= esc_html__('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'x3p0-ideas') ?></p>
		<!-- /wp:paragraph -->

	</div>
	<!-- /wp:group -->

	<!-- wp:group {
		"tagName":"footer",
		"metadata":{
			"name":"<?= esc_attr__('Card Footer', 'x3p0-ideas') ?>"
		},
		"className":"is-style-card-offset",
		"layout":{"type":"default"}
	} -->
	<footer class="wp-block-group is-style-card-offset">
		<!-- wp:file {
			"href":"<?= esc_url($download) ?>",
			"showDownloadButton":false,
			"style":{
				"border":{
					"width":"0px",
					"style":"none"
				}
			},
			"className":"is-style-plain",
			"fontSize":"sm"
		} -->
		<div class="wp-block-file is-style-plain has-sm-font-size" style="border-style:none;border-width:0px">
			<a href="<?= esc_url($download) ?>"><?= esc_html__('Download', 'x3p0-ideas') ?></a>
		</div>
		<!-- /wp:file -->
	</footer>
	<!-- /wp:group -->

</div>
<!-- /wp:group -->
