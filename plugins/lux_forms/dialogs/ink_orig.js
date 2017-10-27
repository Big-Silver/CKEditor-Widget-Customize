
// Our dialog definition.
CKEDITOR.dialog.add( 'ink', function( editor ) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'Ink Signature Properties',
		minWidth:  550,
		minHeight: 200,

		// Dialog window contents definition.
		contents: [
		
			{//BASIC
				// Definition of the Basic Settings dialog tab (page).
				id:    'tab-basic',
				label: 'Basic Settings',

				// The tab contents.
				elements: [
					{ type: 'hbox', widths: ['50%','50%'], children: [
					
						{ type:  'text', 
						  id:    'lux_ink_name',
						  label: '<b>Name</b> <span style="color:#888">(Required; make unique/descriptive)</span>', 
						  style: 'width: 100%',          

							// Validation checking whether the field is not empty.
							validate: CKEDITOR.dialog.validate.notEmpty( "Name: cannot be empty" ),

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "name" ) );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "name", this.getValue() );
								}
						 },

						{ type:  'text', 
						  id:    'lux_ink_id',
						  label: '<b>Element ID</b> <span style="color:#888">(Required; make unique)</span>', 
						  style: 'width: 100%',          

							// Validation checking whether the field is not empty.
							validate: CKEDITOR.dialog.validate.notEmpty( "Element ID: cannot be empty" ),

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "id" ) );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "id", this.getValue() );
								}
						 }
					  ]
					},

					{ type: 'hbox', widths: ['50%','50%'], children: [

						{ type:  'text', 
						  id:    'lux_textsize',
						  label: 'Field Width <span style="color:#888">(in pixels)</span>',
						  style: 'width:100%',

							// Validation checking whether the field is not empty.
							validate: function() {
								var v = this.getValue();
								if ( !v || v && (isNaN(parseInt(v)) || v < 1 || v != parseInt(v))) {
									alert('The value for Width must be a positive number.');
									return false;
									}
								return true;
								},

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "w" ) );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "w", this.getValue() );
								}
						   },

						{ type:  'text', 
						  id:    'lux_textsize2',
						  label: 'Field Height <span style="color:#888">(in pixels)</span>',
						  style: 'width:100%',

							// Validation checking whether the field is not empty.
							validate: function() {
								var v = this.getValue();
								if ( !v || v && (isNaN(parseInt(v)) || v < 1 || v != parseInt(v))) {
									alert('The value for Height must be a positive number.');
									return false;
									}
								return true;
								},

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "h" ) );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								var h = this.getValue();
								element.setAttribute( "h", h );
								
								var d  = this.getDialog();
								var w  = d.getValueOf("tab-basic","lux_textsize");
								var bg = d.getValueOf("tab-adv","lux_bg");
								var fg = d.getValueOf("tab-adv","lux_fg");
								
								element.setAttribute( "style", "padding:5px;width:" + w + "px;height:" + h + "px;background-color:" + bg + ";color:" + fg );
								element.$.innerHTML =  "[" + d.getValueOf("tab-basic","lux_ink_name") + "]";
								}
						   },
							
					   ] // end children of hbox
					}, // end of hbox	

					
					{ type: 'hbox', widths: ['100%'], children: [
				
						{ type:  'text', 
						  id:    'lux_textcal',
						  label: 'Caption  <span style="color:#888">(optional; Text below sigature in resulting image)</span>', 
						  style: 'width:100%',

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "caption" ) );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "caption", this.getValue() );
								}
						 }

					  ] // end children of hbox
					}, // end of hbox	

					{ type: 'hbox', widths: ['100%'], children: [
				
						{ type:  'select', 
						  id:    'lux_val',
						  label: 'Validation: Signature Required?',
						  style:   'width:100%',
						  items:   [ ['No: Unsigned OK', 'no'], 
						             ['Yes: Signature needed', 'yes'] ],
						  default: 'no',

						  setup: function( element ) {
								var v = element.getAttribute("required");
								this.setValue( String(v).match(/yes/i) ? "yes" : "no" );
								},
								
							// Skip ... do it all in the TYPE field
							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								var v = this.getValue();
								if (v == "yes")
									element.setAttribute( "required", v );
								else 
									element.removeAttribute( "required" );							
								}
							}

					  ] // end children of hbox
					} // end of hbox	
				] // end of elements
			}, // end of basic tab


			{//ADVANCED
				id:    'tab-adv',
				label: 'Advanced Settings',

				// The tab contents.
				elements: [
					{ type: 'hbox', widths: ['50%','50%'], children: [
	
						{ type:  'select', 
						  id:    'lux_clear',
						  label: 'Clear Button',
						  style: 'width:100%',
						  items:   [ ['No', 'no'], 
						             ['Yes', 'yes'] ],
						  default: 'no',

						  setup: function( element ) {
								var v = element.getAttribute("lux_clear");
								this.setValue( String(v).match(/yes/i) ? "yes" : "no" );
								},
								
							// Skip ... do it all in the TYPE field
							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								var v = this.getValue();
								if (v == "yes")
									element.setAttribute( "lux_clear", v );
								else 
									element.removeAttribute( "lux_clear" );							
								}
						 },

						{ type:  'text', 
						  id:    'lux_clear_text',
						  label: 'Clear Button Text',
						  style: 'width:100%',

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "lux_clear_text" ) || "Reset Signature"  );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "lux_clear_text", this.getValue() );
								}
						 }

					   ]
					},


					{ type: 'hbox', widths: ['50%','50%'], children: [
	
						{ type:  'text', 
						  id:    'lux_bg',
						  label: 'Background Color',
						  style: 'width:100%',

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "bg" )  );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "bg", this.getValue() );
								}
						 },

						{ type:  'text', 
						  id:    'lux_fg',
						  label: 'Signature Color',
						  style: 'width:100%',

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "fg" ) );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "fg", this.getValue() );
								}
						 }
					   ]
					},
			
					{ type: 'hbox', widths: ['50%','50%'], children: [
	
						{ type:  'text', 
						  id:    'lux_class',
						  label: 'CSS Class <span style="color:#888">(optional; for canvas or div elements)</span>',
						  style: 'width:100%',

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "class" )  );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "class", this.getValue() );
								}
						 },

						{ type:  'text', 
						  id:    'lux_file',
						  label: 'Ink Signature Image File Name',
						  style: 'width:100%',

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "file_name" ));
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "file_name", this.getValue() );
								}
						 }
					  ]
					}
				]
			}

		],

		// -----------------------------------------------------------------------------
		// Invoked when the dialog is loaded.
		onShow: function() {

			// Get the selection in the editor.
			var selection = editor.getSelection();

			// Get the element at the start of the selection.
			var element = selection.getStartElement();

			// Get the <lux_ink> element closest to the selection, if any.
			if (element) element = element.getAscendant( 'div', true );

			// Create a new <lux_ink> element if it does not exist.
			if (!element || element.getAttribute("x-inksig") != "1") {
				element = editor.document.createElement( 'div' );
				element.setAttribute("x-inksig","1");
				element.setAttribute("name","signature");
				element.setAttribute("class","x_inksig");
				element.setAttribute("id","signature");
				element.setAttribute("w","400");
				element.setAttribute("h","100");
				element.setAttribute("caption","Signature");
				element.setAttribute("file_name","signature.png");
				element.setAttribute("fg","black");
				element.setAttribute("bg","#EEEEEE");
				element.$.value = "[signature]";

				// Flag the insertion mode for later use.
				this.insertMode = true;
			}
			else
				this.insertMode = false;

			// Store the reference to the <lux_ink> element in an internal property, for later use.
			this.element = element;

			// Invoke the setup methods of all dialog elements, so they can load the element attributes.
			//if ( !this.insertMode ) 
			this.setupContent( this.element );
		},

		// -----------------------------------------------------------------------------
		// This method is invoked once a user clicks the OK button, confirming the dialog.
		onOk: function() {

			// The context of this function is the dialog object itself.
			// http://docs.ckeditor.com/#!/api/CKEDITOR.dialog
			var dialog = this;

			// Creates a new <lux_ink> element.
			var lux_ink = this.element;

			// Invoke the commit methods of all dialog elements, so the <lux_ink> element gets modified.
			this.commitContent( lux_ink );

			// Finally, in if insert mode, inserts the element at the editor caret position.
			if ( this.insertMode ) editor.insertElement( lux_ink );
		}
	};
});
