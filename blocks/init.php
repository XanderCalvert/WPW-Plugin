<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function editor_assets() {
    
	// Scripts.
	wp_enqueue_script(
		'gp-block-js', // Handle.
		plugins_url( '/blocks/build/index.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-dom-ready', 'wp-edit-post', 'wp-hooks', 'wp-data', 'wp-compose' ), // Dependencies, defined above. 'gumponents'
		filemtime( plugin_dir_path( __DIR__ ) . '/blocks/build/index.js' ) // Version: File modification time.
	);

	// Styles.
	wp_enqueue_style(
		'gp-block-editor-css', // Handle.
		plugins_url( '/blocks/build/index.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . '/blocks/build/index.css' ) // Version: File modification time.
	);


} // End function editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'editor_assets' );

add_action('wp_enqueue_scripts', 'block_rendering');

function block_rendering() {
    $blocks = [
        'hero-block'        => 'wpw_hero_block',
        'wrapper-block'     => 'wpw_wrapper_block',
        'cards-block'       => 'wpw_cards_block',
        'card-inner-block'  => 'wpw_cards_inner_block',
    ];

    foreach ($blocks as $block => $callback) {
        register_block_type(dirname(__FILE__) . "/src/{$block}/block.json", [
            'render_callback' => $callback,
            'editor_script' => dirname(__FILE__) . "/build/index.js",
        ]);
    }
}


function wpw_hero_block( $attr, $content  ){
	ob_start();
        $attr['innerblocks'] = $content;
		get_template_part( 'template-parts/blocks/block', 'hero', $attr );
    return ob_get_clean();
}

function wpw_wrapper_block( $attr, $content  ){
	ob_start();
        $attr['innerblocks'] = $content;
		get_template_part( 'template-parts/blocks/block', 'wrapper', $attr );
    return ob_get_clean();
}

function wpw_cards_block( $attr, $content  ){
	ob_start();
        $attr['innerblocks'] = $content;
		get_template_part( 'template-parts/blocks/block', 'cards', $attr );
    return ob_get_clean();
}

function wpw_cards_inner_block( $attr, $content  ){
	ob_start();
        $attr['innerblocks'] = $content;
		get_template_part( 'template-parts/blocks/block', 'cards-inner', $attr );
    return ob_get_clean();
}

