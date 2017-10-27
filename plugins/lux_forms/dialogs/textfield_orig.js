/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.dialog.add( 'textfield', function( editor ) {
	var autoAttributes = { value: 1, size: 1, maxLength: 1 };

	var acceptedTypes = { email: 1, password: 1, search: 1, tel: 1, text: 1, url: 1 };

	function autoCommit( data ) {
		var element = data.element;
		var value = this.getValue();
		if (this.id == "name") {
			element.setAttribute( "data-cke-saved-name", value );
			element.setAttribute( "name", value );
			}
		else {
			value ? element.setAttribute( this.id, value ) : element.removeAttribute( this.id );
			}
		}

	function autoSetup( element ) {
		if (this.id == "name") {
			value = element.getAttribute( "data-cke-saved-name" );
			if (value && String(value).length) { this.setValue(value); }
			}
		var value = element.hasAttribute( this.id ) && element.getAttribute( this.id );
		this.setValue( value || '' );
		}

	return {
		title: editor.lang.forms.textfield.title,
		minWidth: 550,
		minHeight: 150,
		onShow: function() {
			delete this.textField;

			var element = this.getParentEditor().getSelection().getSelectedElement();
			if ( element && element.getName() == "input" ) {
				this.textField = element;
				this.setupContent( element );
			}
		},
		onOk: function() {
			var editor = this.getParentEditor(),
				element = this.textField,
				isInsertMode = !element;

			if ( isInsertMode ) {
				element = editor.document.createElement( 'input' );
				element.setAttribute( 'type', 'text' );
				}

			var data = { element: element };

			if ( isInsertMode )
				editor.insertElement( data.element );

			this.commitContent( data );

			// Element might be replaced by commitment.
			if ( !isInsertMode )
				editor.getSelection().selectElement( data.element );
		},
		onLoad: function() {
			this.foreach( function( contentObj ) {
				if ( contentObj.getValue ) {
					if ( !contentObj.setup )
						contentObj.setup = autoSetup;
					if ( !contentObj.commit )
						contentObj.commit = autoCommit;
				}
			} );
		},


		// Dialog window contents definition.
		contents: [
		
			{//BASIC
				// Definition of the Basic Settings dialog tab (page).
				id:    'tab-basic',
				label: 'Basic Settings',

				// The tab contents.
				elements: [
					{ type: 'hbox', widths: ['75%','25%'], children: [
					
						{ type:  'text', 
						  id:    'name',
						  label: '<b>Name</b> <span style="color:#888">(Required; make unique/descriptive)</span>', 
						  style: 'width: 100%',          

							// Validation checking whether the field is not empty.
							validate: CKEDITOR.dialog.validate.notEmpty( "Name: cannot be empty" ),

							setup: autoSetup,
							commit: autoCommit
						 },


						{ type:  'text', 
						  id:    'size',
						  label: 'Size: Character Width', 
						  style: 'width:100%',

							// Validation checking whether the field is not empty.
							validate: function() {
								var v = this.getValue();
								if ( v && (isNaN(parseInt(v)) || v < 1 || v != parseInt(v))) {
									alert('The value for Size must be empty or an integer greater than zero.');
									return false;
									}
								return true;
								},

							setup: autoSetup,
							commit: autoCommit
						   }
					   ] // end children of hbox
					}, // end of hbox	

					
					{ type: 'hbox', widths: ['75%','25%'], children: [
				
						{ type:  'text', 
						  id:    'value',
						  label: 'Initial Value  <span style="color:#888">optional</span>', 
						  style: 'width:100%',
							setup: autoSetup,
							commit: autoCommit
						 }

					  ] // end children of hbox
					} // end of hbox	

				] // end of elements
			}, // end of basic tab
				

			{
				// Definition of the Basic Settings dialog tab (page).
				id:    'tab-val',
				label: 'Validation Settings',

				// The tab contents.
				elements: [
					{ type: 'hbox', widths: ['25%','75%'], children: [
				
						{ type:    'select', 
						  id:      'required',
						  label:   'Required?', 
						  style:   'width:100%',
						  items:   [ ['No: Empty OK', 'no'], 
						             ['Yes: Input needed', 'yes'] ],
						  default: 'no',

						  setup: function( element ) {
								var v = element.getAttribute("class");
								this.setValue( String(v).match(/required/i) ? "yes" : "no" );
								},
								
							// Skip ... do it all in the TYPE foeld
							commit: function() {}
						 },

						{ type:  'select', 
						  id:    'type',
						  label: 'Validate Content As',
						  style: 'width:100%',
						  items: [ ['Text (anything)','text'], 
						  			  ['Email Address (e.g. joe@domain.com)','email'], 
									  ['Phone Number: US (e.g. 123-456-7890 or +1-800-122-4567)','phone_usa'], 
									  ['Phone Number: Any (relaxed format; country code optional)','phone'], 
						  			  ['Number: Floating (e.g. -143.22 or .77 but also +234,23)','number'], 
									  ['Number: Integer (eg. -635 or +2201 or 738)','integer'], 
									  ['US Zip Code (e.g. 12345 or 12345-6789)','zip'],
									  ['Social Security Number (eg. 123-56-6789)','ssn'], 
									  ['Password','password'], 
									  ['URL (web site address)','url'], 
									  ['IPv4 (e.g. 127.0.0.2)','ipv4']], 
						  default: 'text',
						  
							setup: function( element ) {
								this.setValue( element.getAttribute( "type" ) );
								},

							commit: function( element ) {
								var t = this.getValue();
								if (element.element) element = element.element;
								element.setAttribute( "type", t );
								
								// Setup validation
								var d = this.getDialog();
								var r = d.getValueOf("tab-val","required");

								var c = [];
								if (r == "yes") c.push("required");
								if (t.match(/phone|url|email|number|integer|ipv4|zip|ssn/)) {
									c.push('custom[' + t + ']');
									}

								if (c.length > 0) {
									element.setAttribute( "class", 'validate[' + c.join(",") + ']' );
									}
								else {
									element.removeAttribute( "class" );
									}																	
								}                                                   
						 }

					  ] // end children of hbox
					}, // end of hbox	


					{ type: 'hbox', widths: ['100%'], children: [
						{ type:  'text', 
						  id:    'maxlength',
						  label: 'Maximum Characters', 
						  style: 'width:100px',

							validate: function() {
								var v = this.getValue();
								if ( v && (isNaN(parseInt(v)) || v < 1 || v != parseInt(v))) {
									alert('The value for Maximum Characters must be empty or an integer greater than zero.');
									return false;
									}
								return true;
								},

							setup: autoSetup,
							commit: autoCommit
						 }
					 ]
					}

				] // end of elements
			}, // end of validation tab				

			{
				// Definition of the Basic Settings dialog tab (page).
				id:    'tab-adv',
				label: 'Advanced Settings',

				// The tab contents.
				elements: [
					{ type: 'hbox', widths: ['100%'], children: [
				
						{ type:  'text', 
						  id:    'placeholder',
						  label: 'Placeholder Value <span style="color:#888">optional</span>', 
						  style: 'width:100%',

							setup: autoSetup,
							commit: autoCommit
						 }

					  ] // end children of hbox
					}, // end of hbox	

					{ type: 'hbox', widths: ['60%','40%'], children: [
				
						{ type:  'text', 
						  id:    'style',
						  label: 'CSS Inline Style(s) <span style="color:#888">optional</span>', 
						  style: 'width:100%',

							setup: autoSetup,
							commit: autoCommit
						 },				
						{ type:  'text', 
						  id:    'id',
						  label: 'Element ID <span style="color:#888">optional</span>', 
						  style: 'width:100%',

							setup: autoSetup,
							commit: autoCommit
						 }

					  ] // end children of hbox
					} // end of hbox	

				] // end of elements
			} // end of adv tab				
		]

	};
} );
