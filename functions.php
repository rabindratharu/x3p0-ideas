<?php

/**
 * Theme functions file, which is auto-loaded by WordPress. This file is used to
 * load any other necessary PHP files and bootstrap the theme.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023-2024, Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPL-3.0-or-later
 * @link      https://github.com/x3p0-dev/x3p0-ideas
 */

declare(strict_types=1);

namespace X3P0\Ideas;

# Prevent direct access.
defined('ABSPATH') || exit;

# Run the autoloader.
if (file_exists(get_parent_theme_file_path('vendor/autoload.php'))) {
	require_once get_parent_theme_file_path('vendor/autoload.php');
}

# Bootstrap the theme.
add_action('after_setup_theme', __NAMESPACE__ . '\\theme', PHP_INT_MIN);
