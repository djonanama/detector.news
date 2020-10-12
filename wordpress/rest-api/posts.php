<?php


// function  markers_endpoint( $request_data ) {

//     $args = array(
//         'post_type' => 'post',
//         'posts_per_page'=>-1, 
//         'numberposts'=>-1
//     );

//     $id = (int) $request_data['id'];

//     if ($id >=1 ){
//         $args["p"] = $id;
//     }

//     $posts = get_posts($args);
    

//     if (empty($posts)){
//         return new WP_Error( 'Bad Request', 'Bad, incorrect request.', array( 'status' => 204 ) );
//     }

//     foreach ($posts as $key => $post) {
//         $posts[$key]->acf = get_fields($post->ID);
//     }
//     return  $posts;
// }
    
// add_action('rest_api_init', function() {
//     register_rest_route( 'markers/v1', '/posts/(?P<id>\d+)', array(
//         'methods' => 'GET',
//         'callback' => 'markers_endpoint'
//     ));
// });


// // Callback function to output the css URI
// function output_css_callback() {
//     return get_stylesheet_uri() ." ". wp_get_theme() ." ". get_template_directory();
// }

// // Register a new rest route
// add_action( 'rest_api_init', function() {
//     register_rest_route('alexi/v1','/output_css_uri\/',array(
//         'methods'  => 'GET',
//         'callback' => 'output_css_callback'
//     ));
// });


add_action('rest_api_init', 'register_rest_images' );

function register_rest_images(){
    register_rest_field(array('post','page'),'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        ));
}


function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }else{
        return "";
    }
}


add_action('rest_api_init', 'register_rest_acf' );

function register_rest_acf(){
    register_rest_field(array('post','page'),'acf',
        array(
            'get_callback'    => 'get_rest_acf',
            'update_callback' => null,
            'schema'          => null,
        ));
}

function get_rest_acf( $object, $field_name, $request ) {  
    if(array_key_exists("ID",$object) && $object['ID']){
        return get_fields( $object['ID']);
    }elseif(array_key_exists("id",$object) && $object['id']){
        return get_fields( $object['id']);
    }else{
        return 0;
    }
}