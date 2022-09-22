<?php

namespace ThemeOptions {

	use \WP_REST_Response, \WP_REST_Request, \WP_REST_Server;

	class RestAPI {
		const NAME_SPACE = 'theme-options';

		public static function init() {
			register_rest_route( self::NAME_SPACE, '/fields', [
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => [ 'ThemeOptions\RestAPI', 'get_fields' ],
				'permission_callback' => function () {
					if ( THEME_OPTIONS_ENV === 'development' ) {
						return true;
					}

					return current_user_can( 'publish_posts' );
				},
			] );

			register_rest_route( self::NAME_SPACE, '/options', [
				'methods'             => 'PUT',
				'callback'            => [ 'ThemeOptions\RestAPI', 'save_fields' ],
				'permission_callback' => function () {
					if ( THEME_OPTIONS_ENV === 'development' ) {
						return true;
					}

					return current_user_can( 'publish_posts' );
				},
			] );
		}

		public static function get_fields(): WP_REST_Response {
			$errors = Errors::get_errors( true );

			if ( $errors ) {
				return new WP_REST_Response( [ 'response' => $errors ], 500 );
			}

			return new WP_REST_Response( [ 'response' => Options::get_fields() ], 200 );
		}

		public static function save_fields( WP_REST_Request $request ): WP_REST_Response {
			$data = json_decode( $request->get_body(), true );

			if ( ! get_option( Helpers::generate_option_name( $data['slug'] ) ) ) {
				$response = add_option( Helpers::generate_option_name( $data['slug'] ), json_encode( $data['values'] ) );
			} else {
				$response = update_option( Helpers::generate_option_name( $data['slug'] ), json_encode( $data['values'] ) );
			}

			return new WP_REST_Response( [ 'response' => $response ], 200 );
		}
	}
}