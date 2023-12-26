<?php
/**
 * Dynamic pattern for handling audio attachment media.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2023 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://github.com/x3p0-dev/x3p0-ideas
 */

$caption = wp_get_attachment_caption( get_the_ID() );
$src     = wp_get_attachment_url( get_the_ID() );
?>
<!-- wp:group {"align":"full","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull">

	<!-- wp:audio {"id":<?= absint( get_the_ID() ) ?>} -->
	<figure class="wp-block-audio">
		<audio controls src="<?= esc_url( $src ) ?>"></audio>

		<?php if ( $caption ) : ?>
			<figcaption class="wp-element-caption"><?= $caption ?></figcaption>
		<?php endif ?>
	</figure>
	<!-- /wp:audio -->

</div>
<!-- /wp:group -->