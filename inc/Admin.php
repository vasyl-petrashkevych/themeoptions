<?php

namespace ThemeOptions {
	class Admin {
		public static function init() {
			add_action( 'admin_menu', [ 'ThemeOptions\Admin', 'admin_menu' ] );
			add_action( 'admin_init', [ 'ThemeOptions\Admin', 'admin_init' ] );
			add_action( 'admin_enqueue_scripts', [ 'ThemeOptions\Admin', 'register_scripts' ] );
		}

		public static function admin_init() {
			load_plugin_textdomain( Helpers::TEXT_DOMAIN );
		}

		public static function admin_menu() {
			add_options_page(
				Helpers::__( 'Theme Options' ),
				Helpers::__( 'Theme Options' ),
				'manage_options',
				'theme_options',
				[ 'ThemeOptions\Admin', 'options_page_content' ],
			);
		}

		public static function register_scripts() {
			if ( THEME_OPTIONS_ENV === 'development' ) {
				wp_register_style( Helpers::TEXT_DOMAIN, THEME_OPTIONS_URI . 'assets/css/main.css', [], THEME_OPTIONS_VERSION );
				wp_register_style( Helpers::TEXT_DOMAIN . '_vendor', THEME_OPTIONS_URI . 'assets/css/vendor.css', [], THEME_OPTIONS_VERSION );
				wp_register_script( Helpers::TEXT_DOMAIN, THEME_OPTIONS_URI . 'assets/js/main.js', [], THEME_OPTIONS_VERSION, true );
				wp_register_script( Helpers::TEXT_DOMAIN . '_vendor', THEME_OPTIONS_URI . 'assets/js/vendor.js', [], THEME_OPTIONS_VERSION, true );
			} else {
				wp_register_style( Helpers::TEXT_DOMAIN, THEME_OPTIONS_URI . 'assets/css/main.min.css', [], THEME_OPTIONS_VERSION );
				wp_register_style( Helpers::TEXT_DOMAIN . '_vendor', THEME_OPTIONS_URI . 'assets/css/vendor.min.css', [], THEME_OPTIONS_VERSION );
				wp_register_script( Helpers::TEXT_DOMAIN, THEME_OPTIONS_URI . 'assets/js/main.min.js', [], THEME_OPTIONS_VERSION, true );
				wp_register_script( Helpers::TEXT_DOMAIN . '_vendor', THEME_OPTIONS_URI . 'assets/js/vendor.min.js', [], THEME_OPTIONS_VERSION, true );
			}

			wp_localize_script( Helpers::TEXT_DOMAIN,
				Helpers::TEXT_DOMAIN . 'Plugin', [
					'version' => THEME_OPTIONS_VERSION,
					'title'   => Helpers::__( 'Theme Options' ),
					'url'     => THEME_OPTIONS_URI,
				] );

			wp_localize_script( Helpers::TEXT_DOMAIN,
				Helpers::TEXT_DOMAIN . 'ApiNonce', [
					'root'  => esc_url_raw( rest_url() ),
					'nonce' => wp_create_nonce( 'wp_rest' ),
				] );
		}

		public static function options_page_content() { ?>
            <div class="wrap">
                <div id="root"></div>
            </div>
			<?php
			wp_enqueue_script( Helpers::TEXT_DOMAIN );
			wp_enqueue_script( Helpers::TEXT_DOMAIN . '_vendor' );
			wp_enqueue_style( Helpers::TEXT_DOMAIN );
			wp_enqueue_style( Helpers::TEXT_DOMAIN . '_vendor' );
		}
	}
}
