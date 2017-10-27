/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview Forms Plugin
 */

CKEDITOR.plugins.add( 'lux_forms', {
	requires: 'dialog,fakeobjects',
	lang: 'en',
	icons: 'button,checkbox,hiddenfield,radio,select,select-rtl,textarea,textarea-rtl,textfield,file,cal,ink', // %REMOVE_LINE_CORE%
	hidpi: true, // %REMOVE_LINE_CORE%
	onLoad: function() {
		CKEDITOR.addCss( 'img.cke_hidden' +
			'{' +
				'background-image: url(' + CKEDITOR.getUrl( this.path + 'images/hiddenfield.gif' ).replace('http:','https:') + ');' +
				'background-position: center center;' +
				'background-repeat: no-repeat;' +
				'border: 1px solid #a9a9a9;' +
				'width: 16px !important;' +
				'height: 16px !important;' +
			'}' );

	},

	init: function( editor ) {
		var lang = editor.lang,
			order = 0;

		// All buttons use the same code to register. So, to avoid
		// duplications, let's use this tool function.
		var addButtonCommand = function( buttonName, commandName, dialogFile, icon, title ) {
				var def = {};

				commandName == 'form' && ( def.context = 'form' );

				editor.addCommand( commandName, 
					new CKEDITOR.dialogCommand( commandName, def ) );

					var p = {
						label: title || lang.common[ buttonName.charAt( 0 ).toLowerCase() + buttonName.slice( 1 ) ],
						command: commandName,
						toolbar: 'forms,' + ( order += 10 )
						};

				if (icon) p.icon = icon;

				editor.ui.addButton && editor.ui.addButton( buttonName, p );
				CKEDITOR.dialog.add( commandName, dialogFile );
			};

		var dialogPath = this.path + 'dialogs/';
		addButtonCommand( 'Button', 'button', dialogPath + 'button.js' );
		addButtonCommand( 'HiddenField', 'hiddenfield', dialogPath + 'hiddenfield.js' );
		addButtonCommand( 'Checkbox', 'checkbox', dialogPath + 'checkbox.js' );
		addButtonCommand( 'Radio', 'radio', dialogPath + 'radio.js' );
		addButtonCommand( 'TextField', 'textfield', dialogPath + 'textfield.js' );
		addButtonCommand( 'Textarea', 'textarea', dialogPath + 'textarea.js' );
		addButtonCommand( 'Select', 'select', dialogPath + 'select.js' );

		addButtonCommand( 'FileInput', 'file', dialogPath + 'file.js', this.path + "icons/file.png", "File Upload" );
		addButtonCommand( 'InkSig', 'ink', dialogPath + 'ink.js', this.path + "icons/ink.png", "Ink Signature" );
		addButtonCommand( 'DatePicker', 'cal', dialogPath + 'cal.js', this.path + "icons/cal.png", "Date Picker" );
		addButtonCommand( 'GetGeo', 'geo', dialogPath + 'geo.js', this.path + "icons/geo.png", "Capture Geo Location" );

		// If the "menu" plugin is loaded, register the menu items.
		if ( editor.addMenuItems ) {			
			var items = {
				checkbox: {
					label: lang.lux_forms.checkboxAndRadio.checkboxTitle,
					command: 'checkbox',
					group: 'checkbox'
				},

				radio: {
					label: lang.lux_forms.checkboxAndRadio.radioTitle,
					command: 'radio',
					group: 'radio'
				},

				file: {
					label: 'File Input',
					command: 'file',
					group: 'file'
				},

				ink: {
					label: 'Ink Signature',
					command: 'ink',
					group: 'ink'
				},

				ink: {
					label: 'Date Picker',
					command: 'cal',
					group: 'cal'
				},

				textfield: {
					label: lang.lux_forms.textfield.title,
					command: 'textfield',
					group: 'textfield'
				},

				hiddenfield: {
					label: lang.lux_forms.hidden.title,
					command: 'hiddenfield',
					group: 'hiddenfield'
				},

				button: {
					label: lang.lux_forms.button.title,
					command: 'button',
					group: 'button'
				},

				select: {
					label: lang.lux_forms.select.title,
					command: 'select',
					group: 'select'
				},

				textarea: {
					label: lang.lux_forms.textarea.title,
					command: 'textarea',
					group: 'textarea'
				}
			};

			editor.addMenuItems( items );
		}

		// If the "contextmenu" plugin is loaded, register the listeners.
		if ( editor.contextMenu ) {

			editor.contextMenu.addListener( function( element ) {
				if ( element && !element.isReadOnly() ) {
					var name = element.getName();

					if ( name == 'select' )
						return { select: CKEDITOR.TRISTATE_OFF };

					if ( name == 'textarea' )
						return { textarea: CKEDITOR.TRISTATE_OFF };

					if ( name == 'img' && element.data( 'cke-real-element-type' ) == 'hiddenfield' )
						return { hiddenfield: CKEDITOR.TRISTATE_OFF };

					if ( name == 'div' && element.getAttribute( 'x-inksig' ) == '1' )
						return { ink: CKEDITOR.TRISTATE_OFF };

					if ( name == 'div' && element.getAttribute( 'x-cal' ) == '1' )
						return { cal: CKEDITOR.TRISTATE_OFF };

					if ( name == 'input' ) {
						var type = element.getAttribute( 'type' ) || 'text';
						switch ( type ) {
							case 'button':
							case 'save':
							case 'submit':
							case 'reset':
								return { button: CKEDITOR.TRISTATE_OFF };

							case 'checkbox':
								return { checkbox: CKEDITOR.TRISTATE_OFF };

							case 'file':
								return { file: CKEDITOR.TRISTATE_OFF };

							case 'radio':
								return { radio: CKEDITOR.TRISTATE_OFF };
							}

						return { textfield: CKEDITOR.TRISTATE_OFF };
					}

				}
			} );
		}


		editor.on( 'doubleclick', function( evt ) {
			var element = evt.data.element;

			if ( element.is( 'select' ) )
				evt.data.dialog = 'select';

			else if ( element.is( 'textarea' ) )
				evt.data.dialog = 'textarea';

			else if ( element.is( 'img' ) && element.data( 'cke-real-element-type' ) == 'hiddenfield' )
				evt.data.dialog = 'hiddenfield';

			else if ( element.is( 'div' ) && element.getAttribute('x-inksig' ) == '1' )
				evt.data.dialog = 'ink';

			else if ( element.is( 'div' ) && element.getAttribute('x-cal' ) == '1' )
				evt.data.dialog = 'cal';

			else if ( element.is( 'input' ) ) {
				var type = element.getAttribute( 'type' ) || 'text';
				evt.data.dialog = 'textfield';
				switch ( type ) {
					case 'button':
					case 'submit':
					case 'reset':
						evt.data.dialog = 'button';
						break;

					case 'file':
						evt.data.dialog = 'file';
						break;


					case 'checkbox':
						evt.data.dialog = 'checkbox';
						break;

					case 'radio':
						evt.data.dialog = 'radio';
						break;
					}
				}
		} );
	},

	afterInit: function( editor ) {
		var dataProcessor = editor.dataProcessor,
			htmlFilter = dataProcessor && dataProcessor.htmlFilter,
			dataFilter = dataProcessor && dataProcessor.dataFilter;

		// Cleanup certain IE form elements default values.
		// Note: Inputs are marked with contenteditable=false flags, so filters for them
		// need to be applied to non-editable content as well.
		if ( CKEDITOR.env.ie ) {
			htmlFilter && htmlFilter.addRules( {
				elements: {
					input: function( input ) {
						var attrs = input.attributes,
							type = attrs.type;
						// Old IEs don't provide type for Text inputs #5522
						if ( !type )
							attrs.type = 'text';
						if ( type == 'checkbox' || type == 'radio' )
							attrs.value == 'on' && delete attrs.value;
					}
				}
			}, { applyToAll: true } );
		}

		if ( dataFilter ) {
			dataFilter.addRules( {
				elements: {
					input: function( element ) {
						if ( element.attributes.type == 'hidden' )
							return editor.createFakeParserElement( element, 'cke_hidden', 'hiddenfield' );
					}
				}
			}, { applyToAll: true } );
		}
	}
} );

if ( CKEDITOR.env.ie ) {
	CKEDITOR.dom.element.prototype.hasAttribute = CKEDITOR.tools.override( CKEDITOR.dom.element.prototype.hasAttribute, function( original ) {
		return function( name ) {
			var $attr = this.$.attributes.getNamedItem( name );

			if ( this.getName() == 'input' ) {
				switch ( name ) {
					case 'class':
						return this.$.className.length > 0;
					case 'checked':
						return !!this.$.checked;
					case 'value':
						var type = this.getAttribute( 'type' );
						return type == 'checkbox' || type == 'radio' ? this.$.value != 'on' : this.$.value;
				}
			}

			return original.apply( this, arguments );
		};
	} );
}
