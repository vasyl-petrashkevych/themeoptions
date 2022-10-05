# Theme Options v1.0.0

## Installation

### To manually add a plugin to your WordPress website:

1. Download archive from repository.
2. From your WordPress dashboard, choose <strong>Plugins > Add New.</strong>
3. Click <strong>Upload Plugin</strong> at the top of the page.
4. Click <strong>Choose File</strong>, locate the plugin file, then click <strong>Install Now</strong>.
5. After the installation is complete, click <strong>Activate Plugin</strong>.

## Usage

In the ``functions.php`` use ``theme_options_fields`` filter.

```php 
add_filter('theme_options_fields', function($fields) ) {
    // Maybe modify $fields in some way.
    return $fields;
}
```

### How to add fields.

1. Firs apply namespace
    ```php
    use ThemeOptions\Template;
    ```
2. Use ``Field class`` for adding news fields

```php
use ThemeOptions\Field;

add_filter( 'theme_options_fields', function ( $fields ) {
	$new_fields = [
		Field::tab( 'main', 'Main', [
				Field::input( 'slug', 'Title', '', 'Some Hint', true ),
				Field::textarea( 'slug2', 'Title2', '', 'Some Hint2', true ),
			]
		),
		Field::tab( 'main2', 'Main2', [
				Field::checkbox( 'test3', 'Test2', '', 'Some Hint', true )
			]
		)
	];

	return array_merge( $fields, $new_fields );
} );
```

Following code will generate nex option page
![This is an image](/assets/images/screenshot_1.png)
![This is an image](/assets/images/screenshot_2.png)

### How to display option value

```php
    get_theme_option( string $tub, string $slug )
```

Function will return the value.

* ```$tub```  *string*  **Required**
  <br /> The name of the tab.
* ```$slug```  *string*  **Required**
  <br /> The slug of the option.

### Template class methods

1. ```tab``` adds a new tab.
   <br />![This is an image](/assets/images/tab.jpg)
    ```php
        Field::tab( string $slug, string $title, array $options)
   ```
    * ```$slug```  *string*  **Required**
      <br /> The name of the option field.
    * ```$title```  *string*  **Required**
      <br /> The title of the option field.
    * ```$options```  *array*  **Required**
      <br /> Use to set the option fields for the current tab.
2. ```input``` adds the input field.
   <br />![This is an image](/assets/images/input.jpg)
    ```php
        Field::input( string $slug, string $title, string $default_value = '', string $hint = '', bool $required = false )
   ```
    * ```$slug```  *string*  **Required**
      <br /> The name of the option field.
    * ```$title```  *string*  **Required**
      <br /> The title of the option field.
    * ```$default_value```  *string*  **Optional**
      <br /> Used to set value by default.
      <br /> Default: `` ``.
    * ```$hint```  *string*  **Optional**
      <br /> Used to set hint for the user.
      <br /> Default: `` ``.
    * ```$required```  *bool*  **Optional**
      <br /> Used to make field required.
      <br /> Default: ``false``.
3. ```textarea``` adds the textarea field.
   <br />![This is an image](/assets/images/textarea.jpg)
    ```php
        Field::textarea( string $slug, string $title, string $default_value = '', string $hint = '', bool $required = false )
   ```
    * ```$slug```  *string*  **Required**
      <br /> The name of the option field.
    * ```$title```  *string*  **Required**
      <br /> The title of the option field.
    * ```$default_value```  *string*  **Optional**
      <br /> Used to set value by default.
      <br /> Default: `` ``.
    * ```$hint```  *string*  **Optional**
      <br /> Used to set hint for the user.
      <br /> Default: `` ``.
    * ```$required```  *bool*  **Optional**
      <br /> Used to make field required.
      <br /> Default: ``false``.
4. ```checkbox``` adds the checkbox field.
   <br />![This is an image](/assets/images/checkbox.jpg)
    ```php
        Field::checkbox( string $slug, string $title, bool $default_value = false, string $hint = '', bool $required = false )
   ```
    * ```$slug```  *string*  **Required**
      <br /> The name of the option field.
    * ```$title```  *string*  **Required**
      <br /> The title of the option field.
    * ```$default_value```  *bool*  **Optional**
      <br /> Used to set value by default.
      <br /> Default: ``false``.
    * ```$hint```  *string*  **Optional**
      <br /> Used to set hint for the user.
      <br /> Default: `` ``.
    * ```$required```  *bool*  **Optional**
      <br /> Used to make field required.
      <br /> Default: ``false``.
