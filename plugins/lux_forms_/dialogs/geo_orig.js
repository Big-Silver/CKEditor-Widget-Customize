
// Our dialog definition.
CKEDITOR.dialog.add( 'geo', function( editor ) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'Geographic Location Properties',
//		minWidth:  550,
		width:  550,
		minHeight: 150,

		// Dialog window contents definition.
		contents: [
		
			{//BASIC
				// Definition of the Basic Settings dialog tab (page).
				id:    'tab-basic',
				label: 'Settings',

				// The tab contents.
				elements: [
						{ type:  'html', 
						  html: '<div style="color:#888; white-space: normal">Inserts hidden form fields that capture the form viewer&#769;s latitude, longitude, and address (as best as posible and only if possible).  The viewer may be prompted to approve location detection.  This feature only works on devices and in web browsers that support geographic location detection.</div>'
						 },

					{ type: 'hbox', widths: ['50%','50%'], children: [
					
						{ type:  'text', 
						  id:    'lux_geo_name',
						  label: '<b>Base Name</b> <span style="color:#888">(Required)</span>', 
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
						  id:    'lux_geo_id',
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

			// Get the <lux_ink> element closest to the selection, if any.
			if (element) element = element.getAscendant( 'div', true );

			// Create a new <lux_geo> element if it does not exist.
			if (!element || element.getAttribute("x-getgeo") != "1") {
				element = editor.document.createElement( 'div' );
				element.setAttribute("x-getgeo","1");
				element.setAttribute("name","geo_location");
				element.setAttribute("class","x_getgeo");
				element.setAttribute("id","geo_location");
				element.$.value = "[get location]";
				element.$.innerHTML = "[HIDDEN GEO LOCATION FIELDS]";

				// Flag the insertion mode for later use.
				this.insertMode = true;
			}
			else
				this.insertMode = false;

			// Store the reference to the <lux_getgeo> element in an internal property, for later use.
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

			// Creates a new <lux_getgeo> element.
			var lux_getgeo = this.element;

			// Invoke the commit methods of all dialog elements, so the <lux_getgeo> element gets modified.
			this.commitContent( lux_getgeo );

			// Finally, in if insert mode, inserts the element at the editor caret position.
			if ( this.insertMode ) editor.insertElement( lux_getgeo );
		}
	};
});
