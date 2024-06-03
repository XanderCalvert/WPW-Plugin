/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { MediaUpload, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { useEffect } from 'react';
import Plyr from 'plyr';

const Edit = ( props ) => {
	const {
		attributes: { mediaID, mediaURL, vimeoURL },
		setAttributes,
	} = props;

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaID: media.id,
			mediaURL: media.url,
		} );
	};

	const onChangeVimeoURL = ( value ) => {
		setAttributes( { vimeoURL: value } );
	};

	useEffect(() => {
		if (vimeoURL) {
			const player = new Plyr('.plyr');
		}
	}, [vimeoURL]);

	const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/buttons'];

	return (

		<>
            <InspectorControls>
                <PanelBody title={ __( 'Background Image', 'gutenberg-examples' ) }>
                    <MediaUpload
                        onSelect={ onSelectImage }
                        allowedTypes={ [ 'image' ] }
                        value={ mediaID }
                        render={ ( { open } ) => (
                            <Button
                                className={ mediaID ? 'image-button' : 'button button-large' }
                                onClick={ open }
                            >
                                { ! mediaID ? (
                                    __( 'Upload Image', 'gutenberg-examples' )
                                ) : (
                                    <img
                                        className="background-image-preview"
                                        src={ mediaURL }
                                        alt={ __( 'Background Image', 'gutenberg-examples' ) }
                                    />
                                ) }
                            </Button>
                        ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Vimeo Video', 'gutenberg-examples' ) }>
                    <TextControl
                        label={ __( 'Vimeo URL', 'gutenberg-examples' ) }
                        value={ vimeoURL }
                        onChange={ onChangeVimeoURL }
                        placeholder={ __( 'Enter Vimeo URL', 'gutenberg-examples' ) }
                    />
                </PanelBody>
            </InspectorControls>

			<div
				className="block-container"
				style={ {
					backgroundImage: mediaURL ? `url(${mediaURL})` : 'none',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				} }
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>
						</div>
						<div className="col-12">
                            { vimeoURL ? (
                                <div className="plyr__video-embed">
                                    <iframe
                                        src={ `https://player.vimeo.com/video/${vimeoURL.split('/').pop()}` }
                                        allow="autoplay; fullscreen"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <>
                                    <p>{ __( 'Input Vimeo URL here', 'gutenberg-examples' ) }</p>
                                    <TextControl
                                        label={ __( 'Vimeo URL', 'gutenberg-examples' ) }
                                        value={ vimeoURL }
                                        onChange={ onChangeVimeoURL }
                                        placeholder={ __( 'Enter Vimeo URL', 'gutenberg-examples' ) }
                                    />
                                </>
                            )}
						</div>
					</div>
				</div>

				{/* { ! mediaID && (
					<div className="image-upload-placeholder">
						<Button
							className="button button-large"
							onClick={ () => {
								const mediaUpload = document.querySelector( '.block-editor-media-placeholder__button' );
								mediaUpload && mediaUpload.click();
							} }
						>
							{ __( 'Select Background Image', 'gutenberg-examples' ) }
						</Button>
					</div>
				) } */}

			</div>
		</>
	);
};

export default Edit;
 