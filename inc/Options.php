<?php

namespace ThemeOptions {
	class Options {
		private static bool $initiated = false;
		private static array $data = [];
		private static array $fields = [];

		public static function init() {
			self::$fields = apply_filters( 'theme_options_fields', self::$fields );
		}

		public static function get_option( $tab, $option ) {
			if ( ! self::$initiated ) {
				self::get_options();
				self::$initiated = true;
			}

			return self::$data[ $tab ][ $option ];
		}

		public static function get_fields() {
			self::get_options();
			$response = self::$fields;

			if ( ! empty( $response ) ) {
				foreach ( $response as $option_id => $option ) {
					$slug_data = get_option( $option['slug'] );
					foreach ( $option['options'] as $id => $field ) {
						$response[ $option_id ]['options'][ $id ]['value'] = $slug_data ? $slug_data[ $field['slug'] ] : '';
					}
				}
			}

			return $response;
		}

		private static function get_options() {
			if ( ! empty( self::$fields ) ) {
				foreach ( self::$fields as $option ) {
					self::$data[ $option['slug'] ] = [];
					$slug_data = get_option( $option['slug'] );

					if ( $slug_data ) {
						foreach ( $option['options'] as $field ) {
							self::$data[ $option['slug'] ][ $field['slug'] ] = $slug_data[ $field['slug'] ];
						}
					}
				}
			}
		}
	}
}