CKEDITOR.plugins.add( 'simplebox', {
    requires: 'widget',

    icons: 'simplebox',

    init: function( editor ) {
        editor.widgets.add( 'simplebox', {

            button: 'Create a simple box',

            template:
                '<input class="simplebox-content" type="button" value="text">',

            editables: {
                content: {
                    selector: '.simplebox-content'
                }
            },

            allowedContent:
                'div(!simplebox)',

            requiredContent: 'div(simplebox)',

            upcast: function( element ) {
                return element.hasClass( 'simplebox' );
            }
        } );
    }
} );