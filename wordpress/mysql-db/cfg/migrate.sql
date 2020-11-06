UPDATE wp_options SET option_value = replace(option_value, 'http://wp.info', 'http://wp.info') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE wp_posts SET guid = replace(guid, 'http://wp.info','http://wp.info');
UPDATE wp_posts SET post_content = replace(post_content, 'http://wp.info', 'http://wp.info');
UPDATE wp_postmeta SET meta_value = replace(meta_value,'http://wp.info','http://wp.info');