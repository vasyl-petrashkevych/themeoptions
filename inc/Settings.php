<?php

namespace ThemeSettings {
	class Settings
	{
		private static bool $initiated = false;
		private static array $data = [];
		private static array $fields = [];

		private static function init()
		{
			self::generate_fields();
			self::get_settings();
		}

		public static function generate_fields()
		{
			if (empty(self::$fields)) {
				self::$fields = apply_filters('theme_options_fields', self::$fields);
			}
		}

		public static function get_setting($tab, $option)
		{
			if (!self::$initiated) {
				self::init();
				self::$initiated = true;
			}

			return self::$data[$tab][$option];
		}

		public static function get_fields(): array
		{
			self::init();
			$response = self::$fields;
			if (!empty($response)) {
				foreach ($response as $option_id => $option) {
					$slug_data = self::$data[$option['slug']];
					foreach ($option['options'] as $id => $field) {
						$response[$option_id]['options'][$id]['value'] = $slug_data ? $slug_data[$field['slug']] : '';
					}
				}
			}

			return $response;
		}

		private static function get_settings()
		{
			if (!empty(self::$fields)) {
				foreach (self::$fields as $option) {
					self::$data[$option['slug']] = [];

					$slug_data = json_decode(get_setting(Helpers::generate_option_name($option['slug'])), true);
					if ($slug_data) {
						foreach ($option['options'] as $field) {
							self::$data[$option['slug']][$field['slug']] = $slug_data[$field['slug']];
						}
					}
				}
			}
		}
	}
}
