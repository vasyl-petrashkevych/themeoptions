<?php
/*
Plugin Name: Theme Options
Plugin URI: https://github.com/vasyl-petrashkevych/themeoptions
Description: Plugin for easier theme option management
Version: 1.0.0
Author: Vasyl Petrashkevych
Author URI: https://www.linkedin.com/in/vasyl-petrashkevych/
License: GPLv2 or later
Text Domain: themeoptions
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.

Copyright 2005-2022 Automattic, Inc.
*/
if (!function_exists('add_action')) {
    echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
    exit;
}

const THEME_OPTIONS_VERSION = '1.0.0';
define('THEME_OPTIONS_DIR', plugin_dir_path(__FILE__));
define('THEME_OPTIONS_URI', plugin_dir_url(__FILE__));
define( 'THEME_OPTIONS_ENV', $_SERVER['SERVER_NAME'] === 'localhost' ? 'development' : 'production' );

require_once(THEME_OPTIONS_DIR . 'inc/Helpers.php');
require_once(THEME_OPTIONS_DIR . 'inc/ThemeOptionsAdmin.php');
require_once(THEME_OPTIONS_DIR . 'inc/ThemeOptionsTemplate.php');
require_once(THEME_OPTIONS_DIR . 'inc/ThemeOptions.php');
require_once(THEME_OPTIONS_DIR . 'inc/RestAPI.php');

add_action('init', ['ThemeOptions', 'init']);

if (is_admin()) {
    add_action('init', ['ThemeOptionsAdmin', 'init']);
}

add_action('rest_api_init', ['RestAPI', 'init']);
