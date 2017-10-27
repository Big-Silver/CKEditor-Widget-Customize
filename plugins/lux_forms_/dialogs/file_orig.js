// LuxSci FileInput Dialog
// by Erik Kangas - LuxSci
// based on http://docs.ckeditor.com/#!/guide/plugin_sdk_sample_1
//

// Our dialog definition.
CKEDITOR.dialog.add( 'file', function( editor ) {
	return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'File Upload Properties',
		minWidth: 300,
		minHeight: 100,

		// Dialog window contents definition.
		contents: [
			{
				// Definition of the Basic Settings dialog tab (page).
				id: 'tab-basic',
				label: 'Basic Settings',

				// The tab contents.
				elements: [
					{
						// Text input field for the lux_fileinputeviation text.
						type: 'text',
						id: 'lux_fileinput',
						label: 'Field Name',
						default: 'file_upload',

						// Validation checking whether the field is not empty.
						validate: CKEDITOR.dialog.validate.notEmpty( "Field name cannot be empty" ),

						// Called by the main setupContent call on dialog initialization.
						setup: function( element ) {
							this.setValue( element.getAttribute( "name" ) );
							},

						// Called by the main commitContent call on dialog confirmation.
						commit: function( element ) {
							element.setAttribute( "name", this.getValue() );
							}
					}
				]
			}
		],

		// Invoked when the dialog is loaded.
		onShow: function() {

			// Get the selection in the editor.
			var selection = editor.getSelection();

			// Get the element at the start of the selection.
			var element = selection.getStartElement();

			// Get the <lux_fileinput> element closest to the selection, if any.
			if ( element ) element = element.getAscendant( 'input', true );

			// Create a new <lux_fileinput> element if it does not exist.
			if ( !element || element.getName() != 'input' || element.getAttribute( "type" ) != "file" ) {
				element = editor.document.createElement( 'input' );
				element.setAttribute("type","file");

				// Flag the insertion mode for later use.
				this.insertMode = true;
			}
			else
				this.insertMode = false;

			// Store the reference to the <lux_fileinput> element in an internal property, for later use.
			this.element = element;

			// Invoke the setup methods of all dialog elements, so they can load the element attributes.
			if ( !this.insertMode )
				this.setupContent( this.element );
		},

		// This method is invoked once a user clicks the OK button, confirming the dialog.
		onOk: function() {

			// The context of this function is the dialog object itself.
			// http://docs.ckeditor.com/#!/api/CKEDITOR.dialog
			var dialog = this;

			// Creates a new <lux_fileinput> element.
			var lux_fileinput = this.element;

			// Invoke the commit methods of all dialog elements, so the <lux_fileinput> element gets modified.
			this.commitContent( lux_fileinput );

			// Finally, in if insert mode, inserts the element at the editor caret position.
			if ( this.insertMode )
				editor.insertElement( lux_fileinput );
		}
	};
});
