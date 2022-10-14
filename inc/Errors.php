<?php

namespace ThemeSettings {
	class Errors {
		private static array $errors = [];

		public static function catch_errors() {
			self::$errors = apply_filters( Helpers::FILTER, self::$errors );
		}

		public static function has_errors(): bool {
			return empty( self::$errors );
		}

		public static function has_error( string $code ): bool {
			return self::has_errors() && empty( self::$errors[ $code ] );
		}

		public static function add_error( $code, $message, $data = '' ): void {
			$debug = debug_backtrace();
			add_filter( Helpers::FILTER, function ( $errors ) use ( $code, $message, $data, $debug ) {
				$errors[ $code ][] = [
					'message' => $message,
					'data'    => $data,
					'debug'   => $debug,
				];

				return $errors;
			} );
		}

		public static function get_errors( $api_response = false ): array {
			if ( $api_response ) {
				$response = [];
				foreach ( self::$errors as $errors ) {
					foreach ( $errors as $error ) {
						$response[] = $error;
					}
				}

				return $response;
			}

			return self::$errors;
		}

		public static function get_error( $code ) {
			if ( self::has_error( $code ) ) {
				return self::$errors['code'];
			}

			return false;
		}
	}
}