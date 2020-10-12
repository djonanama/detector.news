<?php


// The available post statuses are:

// new – When there’s no previous status (this means these hooks are always run whenever "save_post" runs.
// publish – A published post or page.
// pending – A post pending review.
// draft – A post in draft status.
// auto-draft – A newly created post with no content.
// future – A post scheduled to publish in the future.
// private – Not visible to users who are not logged in.
// inherit – A revision or attachment (see get_children()).
// trash – Post is in the trash (added with Version 2.9).

// https://codex.wordpress.org/Post_Status_Transitions

function queryPostMEVN($ID, $status, $type){
  $result = "msg_post_servis";

  $args = array(
      'method' => 'POST',
       'headers' => array(
         'Authorization' => 'Basic '.base64_encode( DETECTOR_API_USER . ':' . DETECTOR_API_PASSWORD )
       )
    );
  $args["body"] = array('status'=>$status,'type'=>$type);

  try {
    $result = wp_remote_request( DETECTOR_HOST.":".DETECTOR_POST."/api/sync-wp/".$ID,$args);//$post->ID
  } catch (Exception $e) {
    error_log( print_r( $result, true ) );
  }
 
 
}


function msg_post_servis( $new_status, $old_status, $post )
{
    

    if( 'post' === $post->post_type )
    {
        queryPostMEVN($post->ID, $new_status, 'post');
    }

    if( 'page' === $post->post_type )
    {
        queryPostMEVN($post->ID, $new_status, 'page');
    }


    // if( 'publish' !== $new_status || 'publish' === $old_status )
    // {
    //     $args["body"] = array('status'=>$new_status,'type'=>'update');
        
    // }

    // if( 'publish' === $new_status || 'publish' !== $old_status )
    // {
    //     $args["body"] = array('status'=>$new_status,'type'=>'update');
    // }

    // $result = wp_remote_request( DETECTOR_HOST.":".DETECTOR_POST."/api\/".$rest_api."/u",$args);

    // return;
    //error_log( print_r( $result, true ) );
    // do something awesome
}

add_action( 'transition_post_status', 'msg_post_servis', 10, 3 );

function api_create_update_term( $term_id, $tt_id, $taxonomy ){
  queryPostMEVN($tt_id, 'publish', $taxonomy);
}

function api_del_term( $term_id, $tt_id, $taxonomy ){
  queryPostMEVN($tt_id, 'trash', $taxonomy);
}

add_action( 'created_term', 'api_create_update_term', 10, 3 );
add_action( 'edited_term',  'api_create_update_term', 10, 3 );
add_action( 'delete_term',  'api_del_term', 10, 5 );
