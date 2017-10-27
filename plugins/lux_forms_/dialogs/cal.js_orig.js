
// Our dialog definition.
CKEDITOR.dialog.add( 'cal', function( editor ) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'Date Picker Properties',
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
						  id:    'lux_cal_name',
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
						  id:    'lux_cal_id',
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
						  label: 'Date Format (<a target=_blank href="http://momentjs.com/docs/#/parsing/string-format/">help</a>)</span>',
						  style: 'width:100%',

							// Validation checking whether the field is not empty.
							validate: function() {
								return true;
								},

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "dateFormat" ) || "MM/DD/YYYY");
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "dateFormat", this.getValue() || "MM/DD/YYYY" );
								}
						   },

						{ type:  'text', 
						  id:    'lux_textsize',
						  label: 'Initial Value',
						  style: 'width:100%',

							// Validation checking whether the field is not empty.
							validate: function() {
								return true;
								},

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "value" ));
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "value", this.getValue() );
								}
						   },

					   ] // end children of hbox
					}, // end of hbox	

					
					{ type: 'hbox', widths: ['100%'], children: [
				
						{ type:  'select', 
						  id:    'lux_val',
						  label: 'Validation: Date Required?',
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
			} // end of basic tab

		],

		// -----------------------------------------------------------------------------
		// Invoked when the dialog is loaded.
		onShow: function() {

			// Get the selection in the editor.
			var selection = editor.getSelection();

			// Get the element at the start of the selection.
			var element = selection.getStartElement();

			// Get the <lux_cal> element closest to the selection, if any.
			if (element) element = element.getAscendant( 'div', true );

			// Create a new <lux_cal> element if it does not exist.
			if (!element || element.getAttribute("x-calsig") != "1") {
				element = editor.document.createElement( 'div' );
				element.setAttribute("x-calsig","1");
				element.setAttribute("name","signature");
				element.setAttribute("class","x_calsig");
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

			// Store the reference to the <lux_cal> element in an internal property, for later use.
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

			// Creates a new <lux_cal> element.
			var lux_cal = this.element;

			// Invoke the commit methods of all dialog elements, so the <lux_cal> element gets modified.
			this.commitContent( lux_cal );

			// Finally, in if insert mode, inserts the element at the editor caret position.
			if ( this.insertMode ) editor.insertElement( lux_cal );
		}
	};
});
