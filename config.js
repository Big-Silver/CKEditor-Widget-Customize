/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.removeButtons = 'Image';
	config.allowedContent = true;
	config.extraPlugins = 'lux_forms,widget,widgetselection,dialog,lineutils,scayt,tableselection,wsc,simplebox,drag,doksoft_image';
	config.imageUploadUrl = '/uploader/upload.php?type=Images';
};
