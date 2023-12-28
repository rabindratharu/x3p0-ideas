<?php
/**
 * Title: Content: Home
 * Slug: x3p0-ideas/content-home
 * Description:
 * Inserter: no
 * Categories: content
 * Keywords: home, content
 */
?>
<!-- wp:group {
	"metadata":{"name":"<?= esc_attr__( 'Content', 'x3p0-ideas' ) ?>"},
	"tagName":"main",
	"style":{"spacing":{"blockGap":"0"}},
	"className":"site-content",
	"layout":{"type":"constrained"}
} -->
<main class="wp-block-group site-content">
	<!-- wp:pattern {"@unless":"is_paged","slug":"x3p0-ideas/hero-adventurer"} /-->
	<!-- wp:template-part {"slug":"loop","align":"full","className":"loop"} /-->
</main>
<!-- /wp:group -->
