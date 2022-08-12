<?php

class RestAPI {
	const NAME_SPACE = 'theme-options';

	public static function init() {
		register_rest_route( self::NAME_SPACE, '/fields', [
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => [ 'RestAPI', 'get_fields' ],
			'permission_callback' => function () {
				return current_user_can( 'publish_posts' );
			},
		] );
	}

	public static function get_fields() {
		return new WP_REST_Response( [ 'response' => ThemeOptions::get_fields() ], 200 );
	}
}