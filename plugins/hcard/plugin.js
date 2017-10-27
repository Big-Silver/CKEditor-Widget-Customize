'use strict';

		var CONTACTS = [
			{ name: 'Huckleberry Finn',			tel: '+48 1345 234 235', email: 'h.finn@example.com', avatar: 'hfin' },
			{ name: 'D\'Artagnan',				tel: '+45 2345 234 235', email: 'dartagnan@example.com', avatar: 'dartagnan' },
			{ name: 'Phileas Fogg',				tel: '+44 3345 234 235', email: 'p.fogg@example.com', avatar: 'pfog' },
			{ name: 'Alice',					tel: '+20 4345 234 235', email: 'alice@example.com', avatar: 'alice' },
			{ name: 'Little Red Riding Hood',	tel: '+45 2345 234 235', email: 'lrrh@example.com', avatar: 'lrrh' },
			{ name: 'Winnetou',					tel: '+44 3345 234 235', email: 'winnetou@example.com', avatar: 'winetou' },
			{ name: 'Edmond Dantès',			tel: '+20 4345 234 235', email: 'count@example.com', avatar: 'edantes' },
			{ name: 'Robinson Crusoe',			tel: '+45 2345 234 235', email: 'r.crusoe@example.com', avatar: 'rcrusoe' }
		];

		CKEDITOR.disableAutoInline = true;

		// Implements a simple widget that represents contact details (see http://microformats.org/wiki/h-card).
		CKEDITOR.plugins.add( 'hcard', {
			requires: 'widget',

			init: function( editor ) {
				editor.widgets.add( 'hcard', {
					allowedContent: 'img(!h-card)',
					requiredContent: 'img(h-card)',
					pathName: 'hcard',

					upcast: function( el ) {
						return el.name == 'img' && el.hasClass( 'h-card' );
					}
				} );

				// This feature does not have a button, so it needs to be registered manually.
				editor.addFeature( editor.widgets.registered.hcard );

				// Handle dropping a contact by transforming the contact object into HTML.
				// Note: All pasted and dropped content is handled in one event - editor#paste.
				editor.on( 'paste', function( evt ) {
					var contact = evt.data.dataTransfer.getData( 'contact' );
					if ( !contact ) {
						return;
					}
                    var hidden_decode = '<input type="hidden" name="' + contact.name + '" value="' + contact.email + '">'
					evt.data.dataValue =
                        '<img id="cke_ele_1" class="cke_hidden h-card" data-cke-realelement="' + encodeURIComponent(hidden_decode) + 
                        '" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="' + 
                        'alt="Hidden Field" title="Hidden Field" align data-cke-real-element-type="hiddenfield"' + 
                        'data-cke-real-node-type="1"';
				} );
			}
		} );

		CKEDITOR.on( 'instanceReady', function() {
			// When an item in the contact list is dragged, copy its data into the drag and drop data transfer.
			// This data is later read by the editor#paste listener in the hcard plugin defined above.
			CKEDITOR.document.getById( 'contactList' ).on( 'dragstart', function( evt ) {
				// The target may be some element inside the draggable div (e.g. the image), so get the div.h-card.
				var target = evt.data.getTarget().getAscendant( 'div', true );

				// Initialization of the CKEditor data transfer facade is a necessary step to extend and unify native
				// browser capabilities. For instance, Internet Explorer does not support any other data type than 'text' and 'URL'.
				// Note: evt is an instance of CKEDITOR.dom.event, not a native event.
				CKEDITOR.plugins.clipboard.initDragDataTransfer( evt );

				var dataTransfer = evt.data.dataTransfer;

				// Pass an object with contact details. Based on it, the editor#paste listener in the hcard plugin
				// will create the HTML code to be inserted into the editor. You could set 'text/html' here as well, but:
				// * It is a more elegant and logical solution that this logic is kept in the hcard plugin.
				// * You do not know now where the content will be dropped and the HTML to be inserted
				// might vary depending on the drop target.
				dataTransfer.setData( 'contact', CONTACTS[ target.data( 'contact' ) ] );

				// You need to set some normal data types to backup values for two reasons:
				// * In some browsers this is necessary to enable drag and drop into text in the editor.
				// * The content may be dropped in another place than the editor.
				dataTransfer.setData( 'text/html', target.getText() );

				// You can still access and use the native dataTransfer - e.g. to set the drag image.
				// Note: IEs do not support this method... :(.
				if ( dataTransfer.$.setDragImage ) {
					dataTransfer.$.setDragImage( target.findOne( 'img' ).$, 0, 0 );
				}
			} );
		} );