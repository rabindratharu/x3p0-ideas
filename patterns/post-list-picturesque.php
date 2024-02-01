<?php

/**
 * Title: Post List: Picturesque
 * Slug: x3p0-ideas/post-list-picturesque
 * Description: Displays the queried posts in a list with the title, date, and excerpt.
 * Categories: posts
 * Keywords: query, posts
 * Block Types: core/query
 * Viewport Width: 1152
 */

declare(strict_types=1);

# Prevent direct access.
defined('ABSPATH') || exit;

?>
<!-- wp:query {
	"metadata":{"name":"<?= esc_attr__('Posts Query', 'x3p0-ideas') ?>"},
	"queryId":0,
	"query":{
		"perPage":"3",
		"pages":0,
		"offset":0,
		"postType":"post",
		"order":"desc",
		"orderBy":"date",
		"author":"",
		"search":"",
		"exclude":[],
		"sticky":"",
		"inherit":true
	},
	"align":"full",
	"layout":{"type":"constrained"}
} -->
<div class="wp-block-query alignfull">

	<!-- wp:group {
		"metadata":{"name":"<?= esc_attr__('Posts Container', 'x3p0-ideas') ?>"},
		"align":"full",
		"style":{
			"spacing":{
				"padding":{
					"top":"var:preset|spacing|plus-6",
					"right":"var:preset|spacing|plus-3",
					"bottom":"var:preset|spacing|plus-3",
					"left":"var:preset|spacing|plus-3"
				}
			}
		},
		"layout":{"type":"default"}
	} -->
	<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--plus-6);padding-right:var(--wp--preset--spacing--plus-3);padding-bottom:var(--wp--preset--spacing--plus-3);padding-left:var(--wp--preset--spacing--plus-3)">

		<!-- wp:post-template {
			"align":"full",
			"style":{"spacing":{"blockGap":"var:preset|spacing|plus-6"}},
			"layout":{"type":"default"}
		} -->

			<!-- wp:group {
				"tagName":"article",
				"metadata":{"name":"<?= esc_attr__('Post', 'x3p0-ideas') ?>"},
				"layout":{"type":"constrained"}
			} -->
			<article class="wp-block-group">

				<!-- wp:post-featured-image {
					"isLink":true,
					"aspectRatio":"16/9",
					"width":"",
					"height":"",
					"align":"wide"
				} /-->

				<!-- wp:group {
					"metadata":{"name":"<?= esc_attr__('Post Container', 'x3p0-ideas') ?>"},
					"style":{"spacing":{"blockGap":"var:preset|spacing|base"}},
					"layout":{"type":"constrained"}
				} -->
				<div class="wp-block-group">

					<!-- wp:group {
						"tagName":"header",
						"metadata":{"name":"<?= esc_attr__('Post Header', 'x3p0-ideas') ?>"},
						"align":"wide",
						"style":{"spacing":{"blockGap":"var:preset|spacing|minus-3"}},
						"layout":{"type":"constrained"}
					} -->
					<header class="wp-block-group alignwide">
						<!-- wp:post-title {"isLink":true} /-->
					</header>
					<!-- /wp:group -->

					<!-- wp:post-excerpt {
						"moreText":"<?= esc_attr__('Continue reading →', 'x3p0-ideas') ?>",
						"showMoreOnNewLine":false,
						"excerptLength":35
					} /-->

					<!-- wp:group {
						"tagName":"footer",
						"metadata":{"name":"<?= esc_attr__('Post Footer', 'x3p0-ideas') ?>"},
						"style":{
							"spacing":{
								"blockGap":"var:preset|spacing|base"
							}
						},
						"layout":{"type":"flex","flexWrap":"nowrap"},
						"fontSize":"sm"
					} -->
					<footer class="wp-block-group has-sm-font-size">
						<!-- wp:post-author-name {
							"isLink":true,
							"className":"is-style-icon"
						} /-->
						<!-- wp:post-date {
							"className":"is-style-icon"
						} /-->
					</footer>
					<!-- /wp:group -->

				</div>
				<!-- /wp:group -->

			</article>
			<!-- /wp:group -->

		<!-- /wp:post-template -->

	</div>
	<!-- /wp:group -->

	<!-- wp:query-pagination {
		"paginationArrow":"arrow",
		"layout":{"type":"flex","justifyContent":"space-between"}
	} -->
		<!-- wp:query-pagination-previous /-->
		<!-- wp:query-pagination-numbers /-->
		<!-- wp:query-pagination-next /-->
	<!-- /wp:query-pagination -->

</div>
<!-- /wp:query -->
