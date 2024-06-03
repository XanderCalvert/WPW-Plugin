
/**
* WordPress dependencies
*/ 

import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
 
const Save = ( props ) => {
 
    const blockProps = useBlockProps.save();
 
    return (

        <InnerBlocks.Content />
        // <></>
                           
    );
};
export default Save;