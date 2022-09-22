<?php

namespace ThemeOptions {
	class Template {
		private static function general_pattern( $slug, $title, $default_value = '', $hint = '', $required = false ): array {
			return [
				'slug'     => $slug,
				'title'    => $title,
				'hint'     => $hint,
				'required' => $required,
				'value'    => $default_value
			];
		}

		public static function input( $slug, $title, $default_value = '', $hint = '', $required = false ): array {
			return array_merge(
				self::general_pattern( $slug, $title, $default_value, $hint, $required ),
				[ 'type' => 'input' ]
			);
		}

		public static function textarea( $slug, $title, $default_value = '', $hint = '', $required = false ): array {
			return array_merge(
				self::general_pattern( $slug, $title, $default_value, $hint, $required ),
				[ 'type' => 'textarea' ] );
		}

		public static function image( $slug, $title, $default_value = '', $hint = '', $required = false ): array {
			return array_merge(
				self::general_pattern( $slug, $title, $default_value, $hint, $required ),
				[ 'type' => 'image' ]
			);
		}

		public static function checkbox( $slug, $title, $default_value = false, $hint = '', $required = false ): array {
			return array_merge(
				self::general_pattern( $slug, $title, $default_value, $hint, $required ),
				[ 'type' => 'checkbox' ]
			);
		}

		public static function radio( $slug, $title, $options, $hint = '', $required = false ) {

			if ( gettype( $options ) !== 'array' ) {
				Errors::add_error( Helpers::TEMPLATE_ERRORS, 'Options should be array', $options );

				return false;
			}

			return array_merge(
				self::general_pattern( $slug, $title, $options[0], $hint, $required ),
				[
					'type'    => 'checkbox',
					'options' => $options,
				]
			);
		}

		public static function tab( $slug, $title, $options ): array {
			return [
				'slug'    => $slug,
				'title'   => $title,
				'options' => $options
			];
		}
	}
}