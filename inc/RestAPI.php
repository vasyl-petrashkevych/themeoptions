<?php

class RestAPI {
	const NAME_SPACE = 'theme-options';

	public static function init() {
		register_rest_route( self::NAME_SPACE, '/fields', [
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => [ 'RestAPI', 'get_fields' ],
			'permission_callback' => function () {
				if ( THEME_OPTIONS_ENV === 'development' ) {
					return true;
				}

				return current_user_can( 'publish_posts' );
			},
		] );
	}

	public static function get_fields() {
		$errors = ThemeOptionsErrors::get_errors( true );

		if ( $errors ) {
			return new WP_REST_Response( [ 'response' => $errors ], 500 );
		}

		return new WP_REST_Response( [ 'response' => ThemeOptions::get_fields() ], 200 );
	}
}