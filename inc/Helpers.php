<?php

class Helpers
{
	public const TEXT_DOMAIN = 'themeoptions';

    public static function __($test): ?string {
        return __($test, self::TEXT_DOMAIN);
    }
}
