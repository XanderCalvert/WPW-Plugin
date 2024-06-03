
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { MediaUpload, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { useEffect } from 'react';


const ALLOWED_BLOCKS = ['core/paragraph', 'core/image'];

const Edit = ( props ) => {
	const {
		attributes: { mediaID, mediaURL },
		setAttributes,
	} = props;

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaID: media.id,
			mediaURL: media.url,
		} );
	};	

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
			</InspectorControls>

			<div className="col-12">

				<div className="row">

					<div className="col-4">

						<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes="image"
							value={ mediaID }
							render={ ( { open } ) => (
								<Button
									className={
										mediaID ? 'image-button' : 'button button-large'
									}
									onClick={ open }
								>
									{ ! mediaID ? (
										__( 'Upload Image', 'gutenberg-examples' )
									) : (
										<img
											className='background_images'
											src={ mediaURL }
											alt={ __(
												'Upload Image',
												'gutenberg-examples'
											) }
										/>
									) }
								</Button>
							) }
						/>

					</div>

					<div className="col-8">

						<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>

					</div>
		
				</div>

			</div>

		</>

	);
};
export default Edit;
