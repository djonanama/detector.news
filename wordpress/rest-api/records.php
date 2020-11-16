<?php

// require($_SERVER['DOCUMENT_ROOT'].'/rest-api/records.php');
// copy by "wordpress\html\wp-includes\functions.php"


# Закрывает все маршруты REST API от публичного доступа
add_filter( 'rest_authentication_errors', function( $result ){

	if( empty( $result ) && ! current_user_can('edit_others_posts') ){
		return new WP_Error( 'Bad Request', 'Bad, incorrect request.', array( 'status' => 400 ) );
	}

	return $result;
});

define('DETECTOR_HOST', getenv('WP_BackEnd_URL')); 
define('DETECTOR_PORT', getenv('WP_BackEnd_PORT')); 
define('DETECTOR_API_USER', getenv('WP_BackEnd_API_USER')); 
define('DETECTOR_API_PASSWORD', getenv('WP_BackEnd_API_PASSWORD')); 

require('posts.php');
require('fn.php');
