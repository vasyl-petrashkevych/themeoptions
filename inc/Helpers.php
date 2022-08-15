<?php

class Helpers {
	public const TEXT_DOMAIN     = 'themeoptions';
	public const FILTER          = 'theme_options_errors';
	public const TEMPLATE_ERRORS = 'template_errors';

	public static function __( $test ): ?string {
		return __( $test, self::TEXT_DOMAIN );
	}
}
