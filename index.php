<?php
/*
Plugin Name: Theme Settings
Plugin URI: https://github.com/vasyl-petrashkevych/themesettings
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
define('THEME_OPTIONS_ENV', $_SERVER['SERVER_NAME'] === 'localhost' ? 'development' : 'production');

<<<<<<< HEAD
require_once(THEME_OPTIONS_DIR . 'inc/Helpers.php');
require_once(THEME_OPTIONS_DIR . 'inc/Errors.php');
require_once(THEME_OPTIONS_DIR . 'inc/Admin.php');
require_once(THEME_OPTIONS_DIR . 'inc/Field.php');
require_once(THEME_OPTIONS_DIR . 'inc/Settings.php');
require_once(THEME_OPTIONS_DIR . 'inc/RestAPI.php');
=======
require_once( THEME_OPTIONS_DIR . 'inc/Helpers.php' );
require_once( THEME_OPTIONS_DIR . 'inc/Errors.php' );
require_once( THEME_OPTIONS_DIR . 'inc/Admin.php' );
require_once( THEME_OPTIONS_DIR . 'inc/Field.php' );
require_once( THEME_OPTIONS_DIR . 'inc/Options.php' );
require_once( THEME_OPTIONS_DIR . 'inc/RestAPI.php' );
>>>>>>> bed4570 (feat: Add Select field)

add_action('admin_bar_menu', ['ThemeSettings\Admin', 'admin_bar_menu'], 100);
add_action('init', ['ThemeSettings\Errors', 'catch_errors']);

if (is_admin()) {
	add_action('init', ['ThemeSettings\Admin', 'init']);
}

add_action('rest_api_init', ['ThemeSettings\RestAPI', 'init']);

if (!function_exists('get_theme_setting')) {
	function get_theme_setting(string $tub, string $slug)
	{
		return \ThemeSettings\Settings::get_setting($tub, $slug);
	}
}

if (!function_exists('the_theme_settins')) {
	function the_theme_settings(string $tab, string $slug)
	{
		return \ThemeSettings\Settings::get_setting($tab, $slug);
	}
}

if (!function_exists('get_theme_setting_shotcode')) {
	function get_theme_setting_shortcode($atts)
	{
		$default = [
			'tab' => '',
			'slug' => '',
		];
		$props = shortcode_atts($default, $atts);

		if ($props['tab'] !== '' && $props['slug'] !== '') {
			return \ThemeSettings\Settings::get_setting($props['tab'], $props['slug']);
		}
		return '';
	}
	add_shortcode('get_theme_setting', 'get_theme_setting_shortcode');
}
