﻿CKEDITOR.stylesSet.add( 'default', [
	
	{ name: 'Italic Title',		element: 'h2', styles: { 'font-style': 'italic' } },
	{ name: 'Subtitle',			element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' } },
	{
		name: 'Special Container',
		element: 'div',
		styles: {
			padding: '5px 10px',
			background: '#eee',
			border: '1px solid #ccc'
		}
	},

	{ name: 'Marker',			element: 'span', attributes: { 'class': 'marker' } },

	{ name: 'Big',				element: 'big' },
	{ name: 'Small',			element: 'small' },
	{ name: 'Typewriter',		element: 'tt' },

	{ name: 'Computer Code',	element: 'code' },
	{ name: 'Keyboard Phrase',	element: 'kbd' },
	{ name: 'Sample Text',		element: 'samp' },
	{ name: 'Variable',			element: 'var' },

	{ name: 'Deleted Text',		element: 'del' },
	{ name: 'Inserted Text',	element: 'ins' },

	{ name: 'Cited Work',		element: 'cite' },
	{ name: 'Inline Quotation',	element: 'q' },

	{ name: 'Language: RTL',	element: 'span', attributes: { 'dir': 'rtl' } },
	{ name: 'Language: LTR',	element: 'span', attributes: { 'dir': 'ltr' } },

	/* Object styles */

	{
		name: 'Styled Image (left)',
		element: 'img',
		attributes: { 'class': 'left' }
	},

	{
		name: 'Styled Image (right)',
		element: 'img',
		attributes: { 'class': 'right' }
	},

	{
		name: 'Compact Table',
		element: 'table',
		attributes: {
			cellpadding: '5',
			cellspacing: '0',
			border: '1',
			bordercolor: '#ccc'
		},
		styles: {
			'border-collapse': 'collapse'
		}
	},

	{ name: 'Borderless Table',		element: 'table',	styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
	{ name: 'Square Bulleted List',	element: 'ul',		styles: { 'list-style-type': 'square' } },

	/* Widget styles */

	{ name: 'Clean Image', type: 'widget', widget: 'image', attributes: { 'class': 'image-clean' } },
	{ name: 'Grayscale Image', type: 'widget', widget: 'image', attributes: { 'class': 'image-grayscale' } },

	{ name: 'Featured Snippet', type: 'widget', widget: 'codeSnippet', attributes: { 'class': 'code-featured' } },

	{ name: 'Featured Formula', type: 'widget', widget: 'mathjax', attributes: { 'class': 'math-featured' } },

	{ name: '240p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-240p' }, group: 'size' },
	{ name: '360p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-360p' }, group: 'size' },
	{ name: '480p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-480p' }, group: 'size' },
	{ name: '720p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-720p' }, group: 'size' },
	{ name: '1080p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-1080p' }, group: 'size' },

	// Adding space after the style name is an intended workaround. For now, there
	// is no option to create two styles with the same name for different widget types. See http://dev.ckeditor.com/ticket/16664.
	{ name: '240p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-240p' }, group: 'size' },
	{ name: '360p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-360p' }, group: 'size' },
	{ name: '480p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-480p' }, group: 'size' },
	{ name: '720p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-720p' }, group: 'size' },
	{ name: '1080p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-1080p' }, group: 'size' }

] );

