<?php

namespace ThemeOptions {
	class Helpers {
		public const TEXT_DOMAIN     = 'themeoptions';
		public const FILTER          = 'theme_options_errors';
		public const TEMPLATE_ERRORS = 'template_errors';
		public const README_LINK     = 'https://github.com/vasyl-petrashkevych/themeoptions/blob/main/README.md';

		public static function __( $text ): string {
			return __( $text, self::TEXT_DOMAIN );
		}
	}
}