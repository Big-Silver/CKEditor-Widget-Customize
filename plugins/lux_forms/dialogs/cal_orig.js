
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
						  id:    'lux_cal_fmt',
						  label: 'Display Date Format (<a style="cursor:pointer" target=_blank href="/perl/member/resources/help.pl/?name=secureform_builder"><u>help</u></a>)</span>',
						  style: 'width:100%',

							// Validation checking whether the field is not empty.
							validate: function() {
								return true;
								},

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "dateformat" ) );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "dateformat", this.getValue() );
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

								// Called in general on commit.
								var d  = this.getDialog();
								console.log("ele",element, element.$);
								element.setAttribute( "style", "display:inline-block;padding:3px; width:150px;height:16px;background-color:#FFF;color:#000;border: 1px solid #CCC; overflow: hidden " );
								element.$.innerHTML = 
								 "<span style=\"width:16px;height:16px;display:inline-block; margin-right:9px; background-position:center center;background-repeat:no-repeat; background-image: url(&quot;data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22%23010202%22%20d%3D%22M0%206h3v3H0V6zm4%203h3V6H4v3zm4%200h3V6H8v3zm4%200h3V6h-3v3zm0-7v3h3V2h-3zM8%205h3V2H8v3zM4%205h3V2H4v3zm-4%208h3v-3H0v3zm4%200h3v-3H4v3zm4%200h3v-3H8v3z%22%2F%3E%3C%2Fsvg%3E&quot;);\">&nbsp;</span>" +
								 "<span>" + d.getValueOf("tab-basic","lux_cal_name") + "</span>" ;
	
								}
						   },

					   ] // end children of hbox
					}, // end of hbox	

					
					{ type: 'hbox', widths: ['50%','50%'], children: [
				

						{ type:  'text', 
						  id:    'lux_cal_fmt2',
						  label: 'Submitted Date Format (<a style="cursor:pointer" target=_blank href="/perl/member/resources/help.pl/?name=secureform_builder"><u>help</u></a>)</span>',
						  style: 'width:100%',

							// Validation checking whether the field is not empty.
							validate: function() {
								return true;
								},

							// Called by the main setupContent call on dialog initialization.
							setup: function( element ) {
								this.setValue( element.getAttribute( "dateformat_form" ) );
								},

							// Called by the main commitContent call on dialog confirmation.
							commit: function( element ) {
								element.setAttribute( "dateformat_form", this.getValue() );
								}
						   },


						{ type:  'select', 
						  id:    'lux_val',
						  label: 'Validation: Date Required?',
						  style:   'width:100%',
						  items:   [ ['No: Empty is OK', 'no'], 
						             ['Yes: Date needed', 'yes'] ],
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
			if (!element || element.getAttribute("x-cal") != "1") {
				element = editor.document.createElement( 'div' );
				element.setAttribute("x-cal","1");
				element.setAttribute("name","date");
				element.setAttribute("id","date");
				element.setAttribute("dateformat","MMM D, YYYY");
				element.setAttribute("dateformat_form","MM/DD/YYYY");
				element.setAttribute("value","today");
				element.$.value = "[select date]";

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
