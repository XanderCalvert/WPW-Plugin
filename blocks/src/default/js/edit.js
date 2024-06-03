
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const Edit = ( props ) => {
	const {
		attributes: { mediaID, mediaURL },
		setAttributes,
	} = props;	

	return (

		<div className="container">

			<div className="row">

				<div className="col-12 col-md-6 left-half">

					<InnerBlocks />

				</div>

				<div className="col-12 col-md-6 right-half">

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

			</div>

		</div>

	);
};
export default Edit;
