/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// config.removePlugins = 'elementspath,save,image,flash,iframe,link,smiley,tabletools,find,pagebreak,templates,about,maximize,showblocks,newpage,language';	
	// config.removeButtons = 'Copy,Cut,Paste,Undo,Redo,Print,Form,TextField,Textarea,Button,SelectAll,NumberedList,BulletedList,CreateDiv,Table,PasteText,PasteFromWord,Select,HiddenField';
	config.removeButtons = 'Image';
	config.allowedContent = true;
	config.extraPlugins = 'lux_forms,widget,widgetselection,dialog,lineutils,scayt,tableselection,wsc,simplebox,drag,doksoft_image';
	config.imageUploadUrl = '/uploader/upload.php?type=Images';
};
