
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Edit = ( props ) => {
    const {
        attributes: { backgroundColor, textColor },
        setAttributes,
    } = props;	

    const blockProps = useBlockProps({
        style: { backgroundColor, color: textColor }
    });

	return (

		<div className="container">

			<div className="row">

				<div className="col-12">

					<InnerBlocks />

				</div>

			</div>

		</div>

	);
};
export default Edit;
