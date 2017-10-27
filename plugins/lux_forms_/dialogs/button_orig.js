/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.dialog.add( 'button', function( editor ) {
	function commitAttributes( element ) {
		var val = this.getValue();
		if ( val ) {
			element.attributes[ this.id ] = val;
		} else {
			delete element.attributes[ this.id ];
		}
	}

	return {
		title: editor.lang.forms.button.title,
		minWidth: 350,
		minHeight: 150,
		onShow: function() {
			delete this.button;
			var element = this.getParentEditor().getSelection().getSelectedElement();
			if ( element && element.is( 'input' ) ) {
				var type = element.getAttribute( 'type' );
				if ( type in { button: 1, reset: 1, submit: 1 } ) {
					this.button = element;
					this.setupContent( element );
				}
			}
		},

		onOk: function() {
			var editor = this.getParentEditor(),
				element = this.button,
				isInsertMode = !element;

			var fake = element ? CKEDITOR.htmlParser.fragment.fromHtml( element.getOuterHtml() ).children[ 0 ] : new CKEDITOR.htmlParser.element( 'input' );
			this.commitContent( fake );

			var writer = new CKEDITOR.htmlParser.basicWriter();
			fake.writeHtml( writer );
			var newElement = CKEDITOR.dom.element.createFromHtml( writer.getHtml(), editor.document );

			if ( isInsertMode )
				editor.insertElement( newElement );
			else {
				newElement.replace( element );
				editor.getSelection().selectElement( newElement );
			}
		},

		contents: [

         {//BASIC
            // Definition of the Basic Settings dialog tab (page).
            id:    'tab-basic',
            label: 'Basic Settings',

            // The tab contents.
            elements: [
               { type: 'hbox', widths: ['100%'], children: [

                  { type:  'text',
                    id:    'value',
                    label: '<b>Button Text</b> <span style="color:#888">(e.g. "Submit Form")</span>',
                    style: 'width: 100%',
                    default: 'Submit Form',

                     // Validation checking whether the field is not empty.
                     validate: CKEDITOR.dialog.validate.notEmpty( "Button Text: cannot be empty" ),

                     // Called by the main setupContent call on dialog initialization.
                     setup: function( element ) {
                        this.setValue( element.getAttribute( "value" ) );
                        },

							commit: commitAttributes
                   }
                  ] // end children of hbox
               }, // end of hbox

				{
				id: 'name',
				type: 'text',
				label: 'Button Name <span style="color:#888">(optional)</span>',
				'default': '',
				setup: function( element ) {
					this.setValue( element.data( 'cke-saved-name' ) || element.getAttribute( 'name' ) || '' );
					},
				commit: commitAttributes
				},

				{
				id: 'type',
				type: 'select',
				label: editor.lang.forms.button.type,
				'default': 'submit',
				accessKey: 'T',
				items: [
					[ 'Submit Button', 'submit' ],
					[ 'JavaScript Button', 'button' ],
					[ 'Reset Form', 'reset' ]
					],
				setup: function( element ) {
					this.setValue( element.getAttribute( 'type' ) || '' );
					},
				commit: commitAttributes
				}

            ] // end of elements
         }, // end of basic tab

        {
            // Definition of the Basic Settings dialog tab (page).
            id:    'tab-adv',
            label: 'Advanced Settings',

            // The tab contents.
            elements: [
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
                    id:    'class',
                    label: 'CSS Class(es) <span style="color:#888">optional</span>',
                    style: 'width:100%',

                     setup: function( element ) {
                        this.setValue( element.getAttribute( "class" ) );
                        },
							commit: commitAttributes
                   }
                ]
               },
               { type: 'hbox', widths: ['100%'], children: [

                  { type:  'text',
                    id:    'id',
                    label: 'Element ID <span style="color:#888">optional</span>',
                    style: 'width:50%',

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
