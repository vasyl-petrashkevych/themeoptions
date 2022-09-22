<?php

namespace ThemeOptions {
	class Error {
		private static array $errors = [];

		public static function catch_errors() {
			self::$errors = apply_filters( Helpers::FILTER, self::$errors );
		}

		public static function add_error( $group, $message, $data = '' ): void {
			$debug = debug_backtrace();
			add_filter( Helpers::FILTER, function ( $errors ) use ( $group, $message, $data, $debug ) {
				$errors[ $group ][] = [
					'message' => $message,
					'data'    => $data,
					'debug'   => $debug,
				];

				return $errors;
			} );
		}

		public static function get_errors_for_api(): array {
			$response = [];
			foreach ( self::$errors as $errors ) {
				foreach ( $errors as $error ) {
					$response[] = $error;
				}
			}

			return $response;
		}

		public static function get_errors(): array {
			return self::$errors;
		}

		public static function get_errors_by_group( string $group ) {
			if ( self::has_group_error( $group ) ) {
				return self::$errors[ $group ];
			}

			return false;
		}

		private static function has_group_error( string $group ): bool {
			return self::has_errors() && empty( self::$errors[ $group ] );
		}

		public static function has_errors(): bool {
			return empty( self::$errors );
		}
	}
}