<?php

class ThemeOptionsTemplate {
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

	public static function tab( $slug, $title, $options ): array {
		return [
			'slug'    => $slug,
			'title'   => $title,
			'options' => $options
		];
	}
}
