<?php

namespace ThemeOptions {
	class Field {
		private static function general_pattern( string $slug, string $title, string $default_value = '', string $hint = '', bool $required = false ): array {
			return [
				'slug'     => $slug,
				'title'    => $title,
				'hint'     => $hint,
				'required' => $required,
				'value'    => $default_value
			];
		}

		public static function input( string $slug, string $title, string $default_value = '', string $hint = '', bool $required = false ): array {
			return array_merge(
				self::general_pattern( $slug, $title, $default_value, $hint, $required ),
				[ 'type' => 'input' ]
			);
		}

		public static function textarea( string $slug, string $title, string $default_value = '', string $hint = '', bool $required = false ): array {
			return array_merge(
				self::general_pattern( $slug, $title, $default_value, $hint, $required ),
				[ 'type' => 'textarea' ] );
		}

		public static function image( string $slug, string $title, string $default_value = '', string $hint = '', bool $required = false ): array {
			return array_merge(
				self::general_pattern( $slug, $title, $default_value, $hint, $required ),
				[ 'type' => 'image' ]
			);
		}

		public static function checkbox( string $slug, string $title, bool $default_value = false, string $hint = '', bool $required = false ): array {
			return array_merge(
				self::general_pattern( $slug, $title, $default_value, $hint, $required ),
				[ 'type' => 'checkbox' ]
			);
		}

		public static function radio( string $slug, string $title, array $options, string $hint = '', bool $required = false ) {

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

		public static function gallery( string $slug, string $title, array $options, string $hint = '', bool $required = false ) {

			if ( gettype( $options ) !== 'array' ) {
				Errors::add_error( Helpers::TEMPLATE_ERRORS, 'Options should be array', $options );

				return false;
			}

			return array_merge(
				self::general_pattern( $slug, $title, $options[0], $hint, $required ),
				[
					'type'    => 'gallery',
					'options' => $options,
				]
			);
		}

		public static function select( string $slug, string $title, array $options, string $placeholder, string $hint = '', bool $required = false ) {
			if ( gettype( $options ) !== 'array' ) {
				Errors::add_error( Helpers::TEMPLATE_ERRORS, 'Options should be array', $options );

				return false;
			}

			return array_merge(
				self::general_pattern( $slug, $title, $options[0]['value'], $hint, $required ),
				[
					'options'     => $options,
					'type'        => 'select',
					'placeholder' => $placeholder
				]
			);
		}

		public static function select_option( string $value, string $title ): array {
			return [
				'value' => $value,
				'title' => $title,
			];
		}

		public static function tab( string $slug, string $title, array $options ): array {
			return [
				'slug'    => $slug,
				'title'   => $title,
				'options' => $options
			];
		}
	}
}