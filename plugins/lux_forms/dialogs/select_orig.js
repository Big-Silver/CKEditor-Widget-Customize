﻿/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.dialog.add( 'select', function( editor ) {
	var maps = {"province_list":["Armed Forces Americas","Armed Forces Europe: Middle East, & Canada","Alaska","Alabama","Armed Forces Pacific","Arkansas","American Samoa","Arizona","California","Colorado","Connecticut","District of Columbia","Delaware","Florida","Federated States of Micronesia","Georgia","Guam","Hawaii","Iowa","Idaho","Illinois","Indiana","Kansas","Kentucky","Louisiana","Massachusetts","Maryland","Maine","Marshall Islands","Michigan","Minnesota","Missouri","Northern Mariana Islands","Mississippi","Montana","North Carolina","North Dakota","Nebraska","New Hampshire","New Jersey","New Mexico","Nevada","New York","Ohio","Oklahoma","Oregon","Pennsylvania","Puerto Rico","Palau","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Virginia","Virgin Islands","Vermont","Washington","West Virginia","Wisconsin","Wyoming","Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Northwest Territories","Yukon Territory"],"state_2":["AA","AE","AK","AL","AP","AR","AS","AZ","CA","CO","CT","DC","DE","FL","FM","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MP","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WV","WI","WY"],"province_map":{"Puerto Rico":"PR","North Dakota":"ND","Delaware":"DE","District of Columbia":"DC","Ontario":"ON","West Virginia":"WV","Oregon":"OR","Connecticut":"CT","Colorado":"CO","British Columbia":"BC","Newfoundland":"NL","Nova Scotia":"NS","Missouri":"MO","Yukon Territory":"YT","Nevada":"NV","Virginia":"VA","Montana":"MT","New Mexico":"NM","New Jersey":"NJ","Oklahoma":"OK","Virgin Islands":"VI","Mississippi":"MS","North Carolina":"NC","Kansas":"KS","Alaska":"AK","Armed Forces Europe: Middle East, & Canada":"AE","Quebec":"QC","Alabama":"AL","Massachusetts":"MA","Manitoba":"MB","Minnesota":"MN","Prince Edward Island":"PE","New York":"NY","Idaho":"ID","Saskatchewan":"SK","Wyoming":"WY","Michigan":"MI","Arkansas":"AR","Nunavut":"NU","Tennessee":"TN","Utah":"UT","New Brunswick":"NB","American Samoa":"AS","Hawaii":"HI","Nebraska":"NE","Washington":"WA","Maryland":"MD","Vermont":"VT","Alberta":"AB","Marshall Islands":"MH","Northern Mariana Islands":"MP","Arizona":"AZ","South Dakota":"SD","Northwest Territories":"NT","California":"CA","Armed Forces Pacific":"AP","Federated States of Micronesia":"FM","Maine":"ME","New Hampshire":"NH","Ohio":"OH","Palau":"PW","Rhode Island":"RI","Illinois":"IL","Florida":"FL","Louisiana":"LA","Armed Forces Americas":"AA","Kentucky":"KY","Texas":"TX","Pennsylvania":"PA","Wisconsin":"WI","Iowa":"IA","Georgia":"GA","South Carolina":"SC","Guam":"GU","Indiana":"IN"},"country_list":["United States","United Kingdom","Australia","Canada","Germany","Italy","India","Mexico","Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Asia/Pacific Region","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo: The Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Europe","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran: Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea: Democratic People's Republic of","Korea: Republic of","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia: Federated States of","Moldova: Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania: United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands: British","Virgin Islands: U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]};

	function autoCommit( element ) {
		if (element.element) element = element.element;
		var value = this.getValue();
		value ? element.setAttribute( this.id, value ) : element.removeAttribute( this.id );
		}

	function autoSetup(name, element) {
		if (name == "option") return;

		if (name == "clear" || ! element) 
			this.setValue( '' );
		else {
			var value = element.hasAttribute( this.id ) && element.getAttribute( this.id );
			this.setValue( value || '' );
			}
		}



	// Add a new option to a SELECT object (combo or list).
	function addOption( combo, optionText, optionValue, documentObject, index ) {
		combo = getSelect( combo );
		var oOption;
		if ( documentObject )
			oOption = documentObject.createElement( "OPTION" );
		else
			oOption = document.createElement( "OPTION" );

		if ( combo && oOption && oOption.getName() == 'option' ) {
			if ( CKEDITOR.env.ie ) {
				if ( !isNaN( parseInt( index, 10 ) ) )
					combo.$.options.add( oOption.$, index );
				else
					combo.$.options.add( oOption.$ );

				oOption.$.innerHTML = optionText.length > 0 ? optionText : '';
				oOption.$.value = optionValue;
			} else {
				if ( index !== null && index < combo.getChildCount() )
					combo.getChild( index < 0 ? 0 : index ).insertBeforeMe( oOption );
				else
					combo.append( oOption );

				oOption.setText( optionText.length > 0 ? optionText : '' );
				oOption.setValue( optionValue );
			}
		} else
			return false;

		return oOption;
	}
	// Remove all selected options from a SELECT object.
	function removeSelectedOptions( combo ) {
		combo = getSelect( combo );

		// Save the selected index
		var iSelectedIndex = getSelectedIndex( combo );

		// Remove all selected options.
		for ( var i = combo.getChildren().count() - 1; i >= 0; i-- ) {
			if ( combo.getChild( i ).$.selected )
				combo.getChild( i ).remove();
		}

		// Reset the selection based on the original selected index.
		setSelectedIndex( combo, iSelectedIndex );
	}
	//Modify option  from a SELECT object.
	function modifyOption( combo, index, title, value ) {
		combo = getSelect( combo );
		if ( index < 0 )
			return false;
		var child = combo.getChild( index );
		child.setText( title );
		child.setValue( value );
		return child;
	}

	function removeAllOptions( combo ) {
		combo = getSelect( combo );
		while ( combo.getChild( 0 ) && combo.getChild( 0 ).remove() ) {
			/*jsl:pass*/
		}
	}
	// Moves the selected option by a number of steps (also negative).
	function changeOptionPosition( combo, steps, documentObject ) {
		combo = getSelect( combo );
		var iActualIndex = getSelectedIndex( combo );
		if ( iActualIndex < 0 )
			return false;

		var iFinalIndex = iActualIndex + steps;
		iFinalIndex = ( iFinalIndex < 0 ) ? 0 : iFinalIndex;
		iFinalIndex = ( iFinalIndex >= combo.getChildCount() ) ? combo.getChildCount() - 1 : iFinalIndex;

		if ( iActualIndex == iFinalIndex )
			return false;

		var oOption = combo.getChild( iActualIndex ),
			sText = oOption.getText(),
			sValue = oOption.getValue();

		oOption.remove();

		oOption = addOption( combo, sText, sValue, ( !documentObject ) ? null : documentObject, iFinalIndex );
		setSelectedIndex( combo, iFinalIndex );
		return oOption;
	}

	function getSelectedIndex( combo ) {
		combo = getSelect( combo );
		return combo ? combo.$.selectedIndex : -1;
	}

	function setSelectedIndex( combo, index ) {
		combo = getSelect( combo );
		if ( index < 0 )
			return null;
		var count = combo.getChildren().count();
		combo.$.selectedIndex = ( index >= count ) ? ( count - 1 ) : index;
		return combo;
	}

	function getOptions( combo ) {
		combo = getSelect( combo );
		return combo ? combo.getChildren() : false;
	}

	function getSelect( obj ) {
		if ( obj && obj.domId && obj.getInputElement().$ ) // Dialog element.
		return obj.getInputElement();
		else if ( obj && obj.$ )
			return obj;
		return false;
	}

	return {
		title: editor.lang.forms.select.title,
		minWidth: 550,
		minHeight: 250,

		onShow: function() {
			delete this.selectBox;
			this.setupContent( 'clear' );
			var element = this.getParentEditor().getSelection().getSelectedElement();
			if ( element && String(element.getName()).toLowerCase() == "select" ) {
				this.selectBox = element;
				this.setupContent( element.getName(), element );

				// Load Options into dialog.
				var objOptions = getOptions( element );
				for ( var i = 0; i < objOptions.count(); i++ )
					this.setupContent( 'option', objOptions.getItem( i ) );
			}
		},

		onOk: function() {
			var editor = this.getParentEditor(),
				element = this.selectBox,
				isInsertMode = !element;

			if ( isInsertMode )
				element = editor.document.createElement( 'select' );

			this.commitContent( element );

			if ( isInsertMode ) {
				editor.insertElement( element );
				if ( CKEDITOR.env.ie ) {
					var sel = editor.getSelection(),
						bms = sel.createBookmarks();
					setTimeout( function() {
						sel.selectBookmarks( bms );
					}, 0 );
				}
			}
		},
		contents: [
			{//BASIC
				// Definition of the Basic Settings dialog tab (page).
				id:    'info',
				label: 'Basic Settings',


			elements: [
				{
				id: 'txtName',
				type: 'text',
				widths: [ '25%', '75%' ],
				labelLayout: 'horizontal',
				label: editor.lang.common.name,
				'default': '',
				accessKey: 'N',
				style: 'width:100%',
				setup: function( name, element ) {
					if ( name == 'clear' )
						this.setValue( this[ 'default' ] || '' );
					else if ( name == 'select' )
						this.setValue( element.data( 'cke-saved-name' ) || element.getAttribute( 'name' ) || '' );

				},
				commit: function( element ) {
					if ( this.getValue() )
						element.data( 'cke-saved-name', this.getValue() );
					else {
						element.data( 'cke-saved-name', false );
						element.removeAttribute( 'name' );
					}
				}
			},
				{
				id: 'txtValue',
				type: 'text',
				widths: [ '25%', '75%' ],
				labelLayout: 'horizontal',
				label: 'Selected Value',
				style: 'width:100%',
				'default': '',
				className: 'cke_disabled',
				onLoad: function() {
					this.getInputElement().setAttribute( 'readOnly', true );
				},
				setup: function( name, element ) {
					if ( name == 'clear' )
						this.setValue( '' );
					else if ( name == 'option' && element.getAttribute( 'selected' ) )
						this.setValue( element.$.value );
				}
			},
				{
				type: 'html',
				html: '<br><span><b>Available Selection Options</b></span>'
				},
				{
				type: 'hbox',
				widths: [ '40%', '40%', '20%' ],
				children: [
					{
					type: 'vbox',
					children: [
						{
						id: 'txtOptName',
						type: 'text',
						label: editor.lang.forms.select.opText,
						style: 'width:200px',
						setup: function( name, element ) {
							if ( name == 'clear' )
								this.setValue( "" );
						}
					},
						{
						type: 'select',
						id: 'cmbName',
						label: '',
						title: '',
						size: 5,
						style: 'width:200px;height:75px',
						items: [],
						onChange: function() {
							var dialog = this.getDialog(),
								values = dialog.getContentElement( 'info', 'cmbValue' ),
								optName = dialog.getContentElement( 'info', 'txtOptName' ),
								optValue = dialog.getContentElement( 'info', 'txtOptValue' ),
								iIndex = getSelectedIndex( this );

							setSelectedIndex( values, iIndex );
							optName.setValue( this.getValue() );
							optValue.setValue( values.getValue() );
						},
						setup: function( name, element ) {
							if ( name == 'clear' )
								removeAllOptions( this );
							else if ( name == 'option' )
								addOption( this, element.getText(), element.getText(), this.getDialog().getParentEditor().document );
						},
						commit: function( element ) {
							var dialog = this.getDialog(),
								optionsNames = getOptions( this ),
								optionsValues = getOptions( dialog.getContentElement( 'info', 'cmbValue' ) ),
								selectValue = dialog.getContentElement( 'info', 'txtValue' ).getValue();

							removeAllOptions( element );

							for ( var i = 0; i < optionsNames.count(); i++ ) {
								var oOption = addOption( element, optionsNames.getItem( i ).getValue(), optionsValues.getItem( i ).getValue(), dialog.getParentEditor().document );
								if ( optionsValues.getItem( i ).getValue() == selectValue ) {
									oOption.setAttribute( 'selected', 'selected' );
									oOption.selected = true;
								}
							}
						}
					}
					]
				},
					{
					type: 'vbox',
					children: [
						{
						id: 'txtOptValue',
						type: 'text',
						label: editor.lang.forms.select.opValue,
						style: 'width:200px',
						setup: function( name, element ) {
							if ( name == 'clear' )
								this.setValue( "" );
						}
					},
						{
						type: 'select',
						id: 'cmbValue',
						label: '',
						size: 5,
						style: 'width:200px;height:75px',
						items: [],
						onChange: function() {
							var dialog = this.getDialog(),
								names = dialog.getContentElement( 'info', 'cmbName' ),
								optName = dialog.getContentElement( 'info', 'txtOptName' ),
								optValue = dialog.getContentElement( 'info', 'txtOptValue' ),
								iIndex = getSelectedIndex( this );

							setSelectedIndex( names, iIndex );
							optName.setValue( names.getValue() );
							optValue.setValue( this.getValue() );
						},
						setup: function( name, element ) {
							if ( name == 'clear' )
								removeAllOptions( this );
							else if ( name == 'option' ) {
								var oValue = element.getValue();
								addOption( this, oValue, oValue, this.getDialog().getParentEditor().document );
								if ( element.getAttribute( 'selected' ) == 'selected' )
									this.getDialog().getContentElement( 'info', 'txtValue' ).setValue( oValue );
							}
						}
					}
					]
				},
					{
					type: 'vbox',
					padding: 5,
					children: [
						{
						type: 'button',
						id: 'btnAdd',
						style: '',
						label: editor.lang.forms.select.btnAdd,
						title: editor.lang.forms.select.btnAdd,
						style: 'width:100%;',
						onClick: function() {
							//Add new option.
							var dialog = this.getDialog(),
								parentEditor = dialog.getParentEditor(),
								optName = dialog.getContentElement( 'info', 'txtOptName' ),
								optValue = dialog.getContentElement( 'info', 'txtOptValue' ),
								names = dialog.getContentElement( 'info', 'cmbName' ),
								values = dialog.getContentElement( 'info', 'cmbValue' );

							addOption( names, optName.getValue(), optName.getValue(), dialog.getParentEditor().document );
							addOption( values, optValue.getValue(), optValue.getValue(), dialog.getParentEditor().document );

							optName.setValue( "" );
							optValue.setValue( "" );
						}
					},
						{
						type: 'button',
						id: 'btnModify',
						label: editor.lang.forms.select.btnModify,
						title: editor.lang.forms.select.btnModify,
						style: 'width:100%;',
						onClick: function() {
							//Modify selected option.
							var dialog = this.getDialog(),
								optName = dialog.getContentElement( 'info', 'txtOptName' ),
								optValue = dialog.getContentElement( 'info', 'txtOptValue' ),
								names = dialog.getContentElement( 'info', 'cmbName' ),
								values = dialog.getContentElement( 'info', 'cmbValue' ),
								iIndex = getSelectedIndex( names );

							if ( iIndex >= 0 ) {
								modifyOption( names, iIndex, optName.getValue(), optName.getValue() );
								modifyOption( values, iIndex, optValue.getValue(), optValue.getValue() );
							}
						}
					},
						{
						type: 'button',
						id: 'btnUp',
						style: 'width:100%;',
						label: editor.lang.forms.select.btnUp,
						title: editor.lang.forms.select.btnUp,
						onClick: function() {
							//Move up.
							var dialog = this.getDialog(),
								names = dialog.getContentElement( 'info', 'cmbName' ),
								values = dialog.getContentElement( 'info', 'cmbValue' );

							changeOptionPosition( names, -1, dialog.getParentEditor().document );
							changeOptionPosition( values, -1, dialog.getParentEditor().document );
						}
					},
						{
						type: 'button',
						id: 'btnDown',
						style: 'width:100%;',
						label: editor.lang.forms.select.btnDown,
						title: editor.lang.forms.select.btnDown,
						onClick: function() {
							//Move down.
							var dialog = this.getDialog(),
								names = dialog.getContentElement( 'info', 'cmbName' ),
								values = dialog.getContentElement( 'info', 'cmbValue' );

							changeOptionPosition( names, 1, dialog.getParentEditor().document );
							changeOptionPosition( values, 1, dialog.getParentEditor().document );
						}
					}
					]
				}
				]
			},
				{
				type: 'hbox',
				widths: [ '40%', '20%', '40%' ],
				children: [
					{
					type: 'button',
					id: 'btnSetValue',
					label: editor.lang.forms.select.btnSetValue,
					title: editor.lang.forms.select.btnSetValue,
					onClick: function() {
						//Set as default value.
						var dialog = this.getDialog(),
							values = dialog.getContentElement( 'info', 'cmbValue' ),
							txtValue = dialog.getContentElement( 'info', 'txtValue' );
						txtValue.setValue( values.getValue() );
					}
				},
					{
					type: 'button',
					id: 'btnDelete',
					label: editor.lang.forms.select.btnDelete,
					title: editor.lang.forms.select.btnDelete,
					onClick: function() {
						// Delete option.
						var dialog = this.getDialog(),
							names = dialog.getContentElement( 'info', 'cmbName' ),
							values = dialog.getContentElement( 'info', 'cmbValue' ),
							optName = dialog.getContentElement( 'info', 'txtOptName' ),
							optValue = dialog.getContentElement( 'info', 'txtOptValue' );

						removeSelectedOptions( names );
						removeSelectedOptions( values );

						optName.setValue( "" );
						optValue.setValue( "" );
					}
				}
				]
			},

				{
				type: 'html',
				html: '<br><span><b>Pre-configured List Options</b></span>'
				},
	

				{
				type: 'hbox',
				widths: [ '30%','70%' ],
				children: [
					{
					type: 'button',
					id: 'btnAssign',
					label: 'Fill Option List with:',
					onClick: function() {
						var dialog = this.getDialog(),
							names   = dialog.getContentElement( 'info', 'cmbName' ),
							values  = dialog.getContentElement( 'info', 'cmbValue' );
   						removeAllOptions( names);
							removeAllOptions( values );
      			
		         	   var nL = [''], nV = [''];
							var t  = dialog.getValueOf("info","prefill");

							if (t == "cn")
								for (var i=0; i< maps.country_list.length; i++) {
									nL.push( maps.country_list[i] );
									nV.push( maps.country_list[i] );
									}
							
							else if (t == "sn")
								for (var i=0; i< maps.province_list.length; i++) {
									nL.push( maps.province_list[i] );
									nV.push( maps.province_list[i] );
									}

							else if (t == "sc")
								for (var i=0; i < maps.state_2.length; i++) {
									nL.push( maps.state_2[i] );
									nV.push( maps.state_2[i] );
									}
									

							for (var i=0; i< nL.length; i++) {
								addOption( names, nL[i], nL[i], dialog.getParentEditor().document );
								addOption( values, nV[i], nV[i], dialog.getParentEditor().document );
								}

							
					}
				},


					{
					type:  'select',
					id:    'prefill',
					label: '',
					labelLayout: 'horizontal',
					 widths: '1%,99%',
					 items:   [ ['Country Names', 'cn'], 
						          ['US/Canada State/Province Names', 'sn'], 
						          ['US State/Province 2-Letter Codes', 'sc'] 
									 ],
					 default: 'cn',

					setup: function() {},
					commit: function() {}
					}
				]
			}
				
			
			
			
			
				] // end of elements
			}, // end of basic tab
				
			{
				// Definition of the Basic Settings dialog tab (page).
				id:    'tab-val',
				label: 'Validation Settings',

				// The tab contents.
				elements: [
					{ type: 'hbox', widths: ['100%'], children: [
				
						{ type:    'select', 
						  id:      'required',
						  label:   'Required?', 
						  style:   'width:100%',
						  items:   [ ['No: Selecting an Empty Value is OK', 'no'], 
						             ['Yes: Selecting Some Value is Required', 'yes'] ],
						  default: 'no',

						  setup: function( name, element ) {
						  		if (name != 'clear' && name != 'option') {
									var v = element.getAttribute("class");
									this.setValue( String(v).match(/required/i) ? "yes" : "no" );
									}
								},
								
							// Skip ... do it all in the TYPE foeld
							commit: function(element) {
								var v = this.getValue();
								element.setAttribute("class", v == "yes" ? "validate[required]" : "" );
								}
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
	
 				{
					id: 'chkMulti',
					type: 'checkbox',
					label: editor.lang.forms.select.chkMulti,
					'default': '',
					accessKey: 'M',
					value: "checked",
					setup: function( name, element ) {
						if ( name == 'select' )
							this.setValue( element.getAttribute( 'multiple' ) );
						if ( CKEDITOR.env.webkit )
							this.getElement().getParent().setStyle( 'vertical-align', 'middle' );
					},
					commit: function( element ) {
						if ( this.getValue() )
							element.setAttribute( 'multiple', this.getValue() );
						else
							element.removeAttribute( 'multiple' );
					}
				},

				{
				type: 'hbox',
				widths: [ '100%'],
				children: [
					{
					id: 'size',
					type: 'text',
					label: 'Height <span style="color:#888">(lines tall; when multiple selections are allowed)</span>',
					'default': '',
					accessKey: 'S',
					style: 'width:175px',
					validate: function() {
						var func = CKEDITOR.dialog.validate.integer( editor.lang.common.validateNumberFailed );
						return ( ( this.getValue() === '' ) || func.apply( this ) );
					},
					setup: function( name, element ) {
						if ( name == 'select' )
							this.setValue( element.getAttribute( 'size' ) || '' );
						if ( CKEDITOR.env.webkit )
							this.getInputElement().setStyle( 'width', '86px' );
					},
					commit: function( element ) {
						if ( this.getValue() )
							element.setAttribute( 'size', this.getValue() );
						else
							element.removeAttribute( 'size' );
					}
				}
				]
			},

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
