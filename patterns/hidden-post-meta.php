<?php

/**
 * Title: Post Meta
 * Slug: x3p0-ideas/post-meta
 * Inserter: no
 */

declare(strict_types=1);

# Prevent direct access.
defined('ABSPATH') || exit;

?>
<!-- wp:group {
	"tagName":"footer",
	"metadata":{
		"name":"<?= esc_attr('Post Footer', 'x3p0-ideas') ?>"
	},
	"style":{
		"spacing":{
			"blockGap":"0"
		}
	},
	"layout":{
		"type":"constrained"
	},
	"className":"is-style-post-meta"
} -->
<footer class="wp-block-group is-style-post-meta">
	<!-- wp:post-terms {"term":"category","className":"is-style-icon"} /-->
	<!-- wp:post-terms {"term":"post_tag","className":"is-style-icon"} /-->
</footer>
<!-- /wp:group -->
