//  Import CSS.
import '../common.scss';
import './scss/style.scss';
import './scss/editor.scss';
import json from './block.json';
import edit from './js/edit';
import save from './js/save';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

// Destructure the json file to get the name and settings for the block
// For more information on how this works, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const { name, title, category, keywords, attributes, supports } = json;

registerBlockType( name, {
	attributes: attributes,
	title: title, // Block title.
	category: category, // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: keywords,
    supports: supports,
	edit,
	save

} );