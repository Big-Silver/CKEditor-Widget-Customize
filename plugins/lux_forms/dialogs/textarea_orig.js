/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.dialog.add( 'textarea', function( editor ) {

	function commitAttributes( element ) {
		var val = this.getValue();
		
		if ( val ) {
			element.setAttribute(this.id, val);
		   } 
		else {
			element.removeAttribute( this.id );
		   }
	   }


	return {
		title: editor.lang.forms.textarea.title,
		minWidth: 350,
		minHeight: 220,
		onShow: function() {
			delete this.textarea;

			var element = this.getParentEditor().getSelection().getSelectedElement();
			if ( element && element.getName() == "textarea" ) {
				this.textarea = element;
				this.setupContent( element );
			}
		},

		onOk: function() {
			var editor,
				element = this.textarea,
				isInsertMode = !element;

			if ( isInsertMode ) {
				editor = this.getParentEditor();
				element = editor.document.createElement( 'textarea' );
			}
			this.commitContent( element );

			if ( isInsertMode ) editor.insertElement( element );
		},


		// Dialog window contents definition.
		contents: [
		
			{//BASIC
				// Definition of the Basic Settings dialog tab (page).
				id:    'tab-basic',
				label: 'Basic Settings',



				// The tab contents.
				elements: [
					{ type: 'hbox', widths: ['60%','20%','20%'], children: [
					
						{ type:  'text', 
						  id:    'name',
						  label: '<b>Name</b> <span style="color:#888">(Required; make unique/descriptive)</span>', 
						  style: 'width: 100%',          

							// Validation checking whether the field is not empty.
							validate: CKEDITOR.dialog.validate.notEmpty( "Name: cannot be empty" ),

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "name" ) );
								},

							commit: commitAttributes
						 },


						{ type:  'text', 
						  id:    'cols',
						  label: 'Characters Wide', 
						  style: 'width:100%',

							// Validation checking whether the field is not empty.
							validate: function() {
								var v = this.getValue();
								if ( v && (isNaN(parseInt(v)) || v < 1 || v != parseInt(v))) {
									alert('The value for "Characters Wide" must be empty or an integer greater than zero.');
									return false;
									}
								return true;
								},

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "cols" ) );
								},

							commit: commitAttributes
						 },


						{ type:  'text', 
						  id:    'rows',
						  label: 'Lines Tall', 
						  style: 'width:100%',

							// Validation checking whether the field is not empty.
							validate: function() {
								var v = this.getValue();
								if ( v && (isNaN(parseInt(v)) || v < 1 || v != parseInt(v))) {
									alert('The value for Lines Tall must be empty or an integer greater than zero.');
									return false;
									}
								return true;
								},

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "rows" ) );
								},

							commit: commitAttributes
						   }
					   ] // end children of hbox
					}, // end of hbox	

					{ type: 'hbox', widths: ['100%'], children: [
				
						{ type:  'textarea', 
						  id:    'value',
						  label: 'Initial Value  <span style="color:#888">optional</span>', 
						  style: 'width:100%;height:75px',

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.$.value );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.$.value= this.getValue();
								}
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
					{ type: 'hbox', widths: ['50%','50%'], children: [
				
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

							commit: function( element ) {
								var r = this.getValue();
								
								// Setup validation
								var c = [];

								if (r == "yes") c.push("required");

								if (c.length > 0) {
									element.setAttribute("class", 'validate[' + c.join(",") + ']');
									}
								else {
									element.removeAttribute("class");
									}																	
								}                                                   
						 },

						{ type:  'text', 
						  id:    'maxlength',
						  label: 'Max. Characters', 
						  style: 'width:100%',

							validate: function() {
								var v = this.getValue();
								if ( v && (isNaN(parseInt(v)) || v < 1 || v != parseInt(v))) {
									alert('The value for Maximum Characters must be empty or an integer greater than zero.');
									return false;
									}
								return true;
								},

							setup: function( element ) {
								this.setValue( element.getAttribute( "maxlength" ) );
								},
							commit: commitAttributes
						 }

					  ] // end children of hbox
					} // end of hbox	

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

							setup: function( element ) {
								this.setValue( element.getAttribute( "placeholder" ) );
								},
							commit: commitAttributes
						 }

					  ] // end children of hbox
					}, // end of hbox	

					{ type: 'hbox', widths: ['60%','40%'], children: [
				
						{ type:  'text', 
						  id:    'style',
						  label: 'CSS Inline Style(s) <span style="color:#888">optional</span>', 
						  style: 'width:100%',

							setup: function( element ) {
								this.setValue( element.getAttribute( "style" ) );
								},
							commit: commitAttributes
						 },				
						{ type:  'text', 
						  id:    'id',
						  label: 'Element ID <span style="color:#888">optional</span>', 
						  style: 'width:100%',

							setup: function( element ) {
								this.setValue( element.getAttribute( "id" ) );
								},
							commit: commitAttributes
						 }

					  ] // end children of hbox
					} // end of hbox	

				] // end of elements
			} // end of adv tab				
		]


	};
} );
