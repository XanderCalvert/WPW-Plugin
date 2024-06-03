
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import {  
	InnerBlocks, 
} from '@wordpress/block-editor';


const ALLOWED_BLOCKS = ['wpw/card-block'];

const Edit = ( props ) => {
	const {
		attributes: {  },
		setAttributes,
	} = props;	

	return (

		<div className="row">

			<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>

		</div>

	);
};
export default Edit;
