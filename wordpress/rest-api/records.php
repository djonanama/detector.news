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

require('env.php');
require('posts.php');
require('fn.php');
