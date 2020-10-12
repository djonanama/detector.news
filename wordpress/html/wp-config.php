<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

// DEFINE ( 'WP_HOME', 'HTTP://localhost');

// DEFINE ( 'WP_SITEURL', 'HTTP://localhost');
//https://www.detector.news/
// DEFINE ( 'WP_HOME', 'HTTP://localhost/cms-admin-detector');

// DEFINE ( 'WP_SITEURL', 'HTTP://localhost/cms-admin-detector');

// DEFINE ( 'WP_HOME', 'HTTP://wordpress-cms/cms-admin-detector');

// DEFINE ( 'WP_SITEURL', 'HTTP://wordpress-cms/cms-admin-detector');

// DEFINE ( 'WP_HOME', 'HTTP://localhost123');

// DEFINE ( 'WP_SITEURL', 'HTTP://localhost123');


define( 'DB_NAME', 'wordpress');

/** MySQL database username */
define( 'DB_USER', 'mysqlwp');

/** MySQL database password */
define( 'DB_PASSWORD', 'W8xZhR5bn2');

/** MySQL hostname */
define( 'DB_HOST', 'database-wp:3306');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'b4bb38bf114553245793ced3691f2809e94c547a');
define( 'SECURE_AUTH_KEY',  'e3c72f0152594c0e6a35e30b6d3da66d893217e8');
define( 'LOGGED_IN_KEY',    '36cf46d20bcce3dc0ccc80535cd865a881a7a32d');
define( 'NONCE_KEY',        'fd0af17a4bde377a15b6667ed4b8fab5a4a1f1cd');
define( 'AUTH_SALT',        'f90a4d02d150472921051704ca01ee17834689a4');
define( 'SECURE_AUTH_SALT', 'cabd4afa4a3fa8bf629fe22b32237230e44272b8');
define( 'LOGGED_IN_SALT',   '7bc659e9f567f3ce1bca544f289a501a9d30bc89');
define( 'NONCE_SALT',       'eb17a460c87d021d5fb608bc0ecb0be5f4d4dfd4');

//Enable error logging.
@ini_set('log_errors', 'On');
@ini_set('error_log', '/var/www/html/wp-content/elm-error-logs/php-errors.log');

//Don't show errors to site visitors.
@ini_set('display_errors', 'Off');
if ( !defined('WP_DEBUG_DISPLAY') ) {
	define('WP_DEBUG_DISPLAY', false);
}

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true  );

// If we're behind a proxy server and using HTTPS, we need to alert WordPress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
