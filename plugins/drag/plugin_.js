'use strict';

var CONTACTS = [
	{ type: 'Text', name: 'text', value: 'Submit Form', validate: "text" },
	{ type: 'Image', name: 'image.', src: "img/droparea.png" },
	{ type: 'Button', name: 'button', value: 'Submit Form' },
	{ type: 'CheckBox', name: 'checkbox', value: 'checkbox' },
	{ type: 'Radio', name: 'radio', value: 'radio' },
	{ type: 'TextArea', name: 'textarea', value: 'textarea' },
	{ type: 'HiddenField', name: 'hidden', value: 'hidden' },
	{ type: 'Ink', name: 'signature', value: 'signature', class: "x_inksig", width: "400", height: "100", caption: "Signature", file_name:"signature.png", fg: "black", bg: "#EEEEEE", required: "false", isClear: "false", clearText: "Reset Signature" },
	{ type: 'Date', name: 'date', dateformat: 'MMM D, YYYY', dateformat_form: 'MM/DD/YYYY', value: 'today', required: "false"},
	{ type: 'File', name: 'file_upload' },
	{ type: 'Geo', name: 'geo_location', class: "x_getgeo", value: "[get location]", innerHTML: "HIDDEN GEO LOCATION FIELDS" },
	{ type: 'Selection', name: "selection", required: "false"}
];

var maps = {"province_list":["Armed Forces Americas","Armed Forces Europe: Middle East, & Canada","Alaska","Alabama","Armed Forces Pacific","Arkansas","American Samoa","Arizona","California","Colorado","Connecticut","District of Columbia","Delaware","Florida","Federated States of Micronesia","Georgia","Guam","Hawaii","Iowa","Idaho","Illinois","Indiana","Kansas","Kentucky","Louisiana","Massachusetts","Maryland","Maine","Marshall Islands","Michigan","Minnesota","Missouri","Northern Mariana Islands","Mississippi","Montana","North Carolina","North Dakota","Nebraska","New Hampshire","New Jersey","New Mexico","Nevada","New York","Ohio","Oklahoma","Oregon","Pennsylvania","Puerto Rico","Palau","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Virginia","Virgin Islands","Vermont","Washington","West Virginia","Wisconsin","Wyoming","Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Northwest Territories","Yukon Territory"],"state_2":["AA","AE","AK","AL","AP","AR","AS","AZ","CA","CO","CT","DC","DE","FL","FM","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MP","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WV","WI","WY"],"province_map":{"Puerto Rico":"PR","North Dakota":"ND","Delaware":"DE","District of Columbia":"DC","Ontario":"ON","West Virginia":"WV","Oregon":"OR","Connecticut":"CT","Colorado":"CO","British Columbia":"BC","Newfoundland":"NL","Nova Scotia":"NS","Missouri":"MO","Yukon Territory":"YT","Nevada":"NV","Virginia":"VA","Montana":"MT","New Mexico":"NM","New Jersey":"NJ","Oklahoma":"OK","Virgin Islands":"VI","Mississippi":"MS","North Carolina":"NC","Kansas":"KS","Alaska":"AK","Armed Forces Europe: Middle East, & Canada":"AE","Quebec":"QC","Alabama":"AL","Massachusetts":"MA","Manitoba":"MB","Minnesota":"MN","Prince Edward Island":"PE","New York":"NY","Idaho":"ID","Saskatchewan":"SK","Wyoming":"WY","Michigan":"MI","Arkansas":"AR","Nunavut":"NU","Tennessee":"TN","Utah":"UT","New Brunswick":"NB","American Samoa":"AS","Hawaii":"HI","Nebraska":"NE","Washington":"WA","Maryland":"MD","Vermont":"VT","Alberta":"AB","Marshall Islands":"MH","Northern Mariana Islands":"MP","Arizona":"AZ","South Dakota":"SD","Northwest Territories":"NT","California":"CA","Armed Forces Pacific":"AP","Federated States of Micronesia":"FM","Maine":"ME","New Hampshire":"NH","Ohio":"OH","Palau":"PW","Rhode Island":"RI","Illinois":"IL","Florida":"FL","Louisiana":"LA","Armed Forces Americas":"AA","Kentucky":"KY","Texas":"TX","Pennsylvania":"PA","Wisconsin":"WI","Iowa":"IA","Georgia":"GA","South Carolina":"SC","Guam":"GU","Indiana":"IN"},"country_list":["United States","United Kingdom","Australia","Canada","Germany","Italy","India","Mexico","Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Asia/Pacific Region","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo: The Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Europe","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran: Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea: Democratic People's Republic of","Korea: Republic of","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia: Federated States of","Moldova: Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania: United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands: British","Virgin Islands: U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]};

var data 			= [],
	select_text 	= [],
	select_value 	= [], 	
	num 			= 0,
	isOkBtn 		= false,
	sourceSrc 		= $("iframe");

/* CKEditor */
CKEDITOR.config.readOnly = false;
CKEDITOR.config.height = 900;

CKEDITOR.plugins.add( 'drag', {
	requires: 'widget',

	init: function( editor ) {
		editor.widgets.add( 'drag', {
			allowedContent: 'input[id]; input[type]; textarea[id]; img[id]; select[id]; div[id]; span[id];' + 'span(!simplebox); div[id];' + 'span(!simplebox); select[id];',
			requiredContent: 'span(h-card)',
			pathName: 'drag',
			inline: true,
			upcast: function( el ) {
				return el.hasClass( 'h-card' );
			},
			editables: {
				content: {
					selector: '.simplebox'
				}
			}
		} );
		editor.addFeature( editor.widgets.registered.drag );
		
		editor.on( 'paste', function( evt ) {
			num++;
			var contact = evt.data.dataTransfer.getData( 'contact' );
			if ( !contact ) {
				return;
			}
			switch(contact.type) {
				case "Text":
					evt.data.dataValue =
					'<input class="simplebox-input" type="text" value="' + contact.value + 
					'" id="cke_ele_' + num + '" >';
					break;
				case "Image":
					evt.data.dataValue =
					'<span class="h-card simplebox" contenteditable="true" style="width:100%;height:70px;">' +
						'<img src="' + contact.src + '"  id="cke_ele_' + num + '" style="width:50px; height:50px;">' +
					'</span>';	
					break;								
				case "Button":
					evt.data.dataValue =
					'<input class="simplebox-input" id="cke_ele_' + num + '" type="button" value="' + 
					contact.value + '">';
					break;
				case "CheckBox":
					evt.data.dataValue =
					'<input class="simplebox-input" id="cke_ele_' + num + '" type="checkbox" value="' + 
					contact.value + '">';
					break;
				case "Radio":
					evt.data.dataValue =
					'<input class="simplebox-input" id="cke_ele_' + num + '" type="radio" value="' + 
					contact.value + '">';
					break;
				case "TextArea":
					evt.data.dataValue =
					'<textarea id="cke_ele_' + num + '" data-cke-editable="1"></textarea>';
					break;
				case "HiddenField":
					var hidden_decode = '<input type="hidden" name="' + contact.name + '" value="' + contact.value + '">'
					evt.data.dataValue =
					'<span class="simplebox" contenteditable="true"> &nbsp;' +
						'<div id="cke_ele_hidden_' + num + '" >' +
							'<img id="cke_ele_' + num + '" class="cke_hidden" data-cke-realelement="' + encodeURIComponent(hidden_decode) + 
							'" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="' + 
							'alt="Hidden Field" title="Hidden Field" align data-cke-real-element-type="hiddenfield"' + 
							'data-cke-real-node-type="1"' +
						'</div>' +
					'</span>';
					break;
				case "Ink":
					var ink_style = "padding:5px;width:" + contact.width + "px;height:" + contact.height + "px;background-color:" +
						contact.bg + ";color:" + contact.fg + '"';
					evt.data.dataValue =
					'<span class="simplebox" contenteditable="true"> &nbsp;' +
						'<div id="cke_ele_' + num + '" class="' + contact.class + '" name="' + contact.name +
						'" w="' + contact.width + '" h="' + contact.height + '" caption="' + contact.caption +
						'" file_name="' + contact.file_name + '" fg="' + contact.fg + '" bg="' + contact.bg +
						'" lux_clear_text="' + contact.clearText + '" style="' + ink_style + '">[' + contact.value +
						']</div>' +
					'</span>';
					break;
				case "Date":
					var date_style = "display:inline-block;padding:3px; width:150px;height:16px;background-color:#FFF;color:#000;border: 1px solid #CCC; overflow: hidden";
					var span_style = "width:16px;height:16px;display:inline-block; margin-right:9px; background-position:center center;background-repeat:no-repeat; background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22%23010202%22%20d%3D%22M0%206h3v3H0V6zm4%203h3V6H4v3zm4%200h3V6H8v3zm4%200h3V6h-3v3zm0-7v3h3V2h-3zM8%205h3V2H8v3zM4%205h3V2H4v3zm-4%208h3v-3H0v3zm4%200h3v-3H4v3zm4%200h3v-3H8v3z%22%2F%3E%3C%2Fsvg%3E');";
					evt.data.dataValue =
					'<span class="simplebox" contenteditable="true"> &nbsp;' +
						'<div x-cal="1" name="' + contact.name + '" id="cke_ele_' + num + '" dateformat="' + contact.dateformat +
						'" dateformat_form="' + contact.dateformat_form + '" value="' + contact.value +
						'" style="' + date_style + '">' +
							'<span id="simple-date-span" style="' + span_style + '" class="datePicker_image">.</span>' +
							'<span>' + contact.name + '</span>' +
						'</div>' +
					'</span>';
					break;
				case "File":
					evt.data.dataValue =
					'<input class="simplebox-input" id="cke_ele_' + num + '" type="file" name="' + 
					contact.name + '">';
					break;
				case "Geo":
					evt.data.dataValue =
					'<span class="simplebox" contenteditable="true"> &nbsp;' +
						'<div x-getgeo="1" id="cke_ele_' + num + '" class="' + contact.class + '" name="' + contact.name +
						'" value="' + contact.value + '">[' + contact.innerHTML + ']</div>' +
					'</span>';
					break;
				case "Selection":
					evt.data.dataValue =
					'<span class="simplebox" contenteditable="true"> &nbsp;' +
						'<div id="cke_ele_sel_' + num + '" >' +
							'<select class="simplebox" id="cke_ele_' + num + '"></select>' +
						'</div>' +
					'</span>';
					break;
				default:
					evt.data.dataValue = "";
					return;
			};

			/*   Store the data    */
			data.push({type: contact.type, id: "cke_ele_" + num, name: contact.name, value: contact.value});
			/*   Open the Dialog    */
			setTimeout(function(){ 
				$( function() {
					var temp_ele_id = "#cke_ele_" + num,
						iframe_src	= $("iframe").contents();
					switch(contact.type) {
						case "Button":
							$("#btn_dialog").dialog({
								minWidth: 430,
								minHeight: 355,
								width: 430,
								height: 355,										
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;	
									$("#button_tabs" ).tabs("destroy");	
									disableBackground();
									clearWidget();								
								}
							});	
							$("#button_tabs").tabs({
								active: 0
							});
							$("#input_btn_name").val("");
							$("#input_btn_value").val(contact.value);
							$("#input_btn_style").val("");
							$("#input_btn_class").val("");
							$("#input_btn_id").val("");
							break;
						case "Image":
							$("#img_dialog").dialog({
								classes: {
									"ui-dialog": "ui-dialog-background",
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;		
									disableBackground();
									clearWidget();								
								}								
							});
							$("#input_img_src").val($(temp_ele_id).attr("src"));
							$("#input_img_width").val($(temp_ele_id).width());
							$("#input_img_height").val($(temp_ele_id).height());
							break;
						case "Text":
							$("#text_dialog").dialog({
								minWidth: 530,
								minHeight: 335,
								width: 530,
								height: 335,									
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;		
									$("#text_tabs" ).tabs("destroy");
									disableBackground();
									clearWidget();								
								}
							});
							$("#text_tabs").tabs({
								active: 0
							});
							$("#input_text_name").val("");
							$("#input_text_value").val("");
							$("#input_text_width").val("");
							$("#input_text_max").val("");
							$("#input_text_placeholder").val("");
							$("#input_text_style").val("");
							$("#input_text_id").val("cke_ele_" + num);
							break;
						case "CheckBox":
							$("#check_dialog").dialog({
								minWidth: 370,
								minHeight: 325,
								width: 370,
								height: 325,										
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;		
									disableBackground();
									clearWidget();								
								}
							});										
							$("#input_check_name").val("");
							$("#input_check_value").val("");
							$("#input_check_select").prop('checked', false);
							$("#select_check_required").val("no");
							break;
						case "Radio":
							$("#radio_dialog").dialog({
								minWidth: 370,
								minHeight: 330,
								width: 370,
								height: 330,										
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;		
									disableBackground();
									clearWidget();								
								}
							});										
							$("#input_radio_name").val("");
							$("#input_radio_value").val("");
							$("#input_radio_select").prop('checked', false);
							$("#input_radio_required").prop('checked', true);
							break;
						case "TextArea":
							$("#textarea_dialog").dialog({
								minWidth: 531,
								minHeight: 390,
								width: 531,
								height: 390,								
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;
									$("#textarea_tabs" ).tabs("destroy");
									disableBackground();
									clearWidget();								
								}
							});	
							$("#textarea_tabs").tabs({
								active: 0
							});
							$("#input_textarea_name").val("");
							$("#input_textarea_value").val("");							
							$("#input_textarea_wide").val("");
							$("#input_textarea_tall").val("");
							$("#select_textarea_required").val("false");
							$("#input_textarea_max").val("");
							$("#input_textarea_placehold").val("");
							$("#input_textarea_style").val("");
							$("#input_textarea_id").val("cke_ele_" + num);
							break;
						case "HiddenField":
							$("#hidden_dialog").dialog({
								minWidth: 317,
								minHeight: 245,
								width: 317,
								height: 245,								
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;		
									disableBackground();
									clearWidget();								
								}
							});											
							$("#input_hidden_name").val("");
							$("#input_hidden_value").val("");
							break;
						case "Ink":
							$("#ink_dialog").dialog({
								minWidth: 660,
								minHeight: 445,
								width: 660,
								height: 445,										
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;
									$("#ink_tabs" ).tabs("destroy");	
									disableBackground();
									clearWidget();								
								}
							});
							$("#ink_tabs").tabs({
								active: 0
							});
							$("#input_ink_name").val(contact.name);
							$("#input_ink_id").val("cke_ele_" + num);
							$("#input_ink_width").val(contact.width);
							$("#input_ink_height").val(contact.height);
							$("#input_ink_caption").val(contact.caption);
							$("#select_ink_signature").val(contact.required);
							$("#select_ink_clearBtn").val(contact.isClear);
							$("#input_ink_clearText").val(contact.clearText);
							$("#input_ink_bg").val(contact.bg);
							$("#input_ink_fg").val(contact.fg);
							$("#input_ink_css").val(contact.class);
							$("#input_ink_image").val(contact.file_name);
							break;
						case "Date":
							$("#date_dialog").dialog({
								minWidth: 660,
								minHeight: 320,
								width: 660,
								height: 320,								
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;		
									disableBackground();
									clearWidget();								
								}
							});
							$("#input_date_name").val(contact.name);
							$("#input_date_id").val(contact.id);
							$("#input_date_format").val(contact.dateformat);
							$("#input_date_init").val(contact.value);
							$("#input_date_submitted").val(contact.dateformat_form);
							$("#input_date_init").val(contact.value);
							$("#select_date_required").val(contact.required);
							break;
						case "File":
							$("#file_dialog").dialog({
								minWidth: 320,
								minHeight: 190,
								width: 320,
								height: 190,
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;		
									disableBackground();
									clearWidget();						
								}
							});
							$("#input_file_name").val(contact.name);
							break;
						case "Geo":
							$("#geo_dialog").dialog({
								minWidth: 572,
								minHeight: 285,
								width: 572,
								height: 285,								
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;		
									disableBackground();
									clearWidget();								
								}
							});
							$("#input_geo_name").val(contact.name);
							$("#input_geo_id").val("cke_ele_" + num);
							break;
						case "Selection":
							$("#selection_dialog").dialog({
								minWidth: 570,
								minHeight: 530,
								width: 570,
								height: 530,
								classes: {
									"ui-dialog": "ui-dialog-background",
									"ui-dialog-titlebar": "ui-dialog-header"
								},
								open: function( event, ui ) {
									disableBackground();
								},
								close: function( event, ui ) {
									if(!isOkBtn) {
										var temp_id = "#cke_ele_" + num;
										removeEle(temp_id);	
									};		
									isOkBtn = false;
									$("#selection_tabs" ).tabs("destroy");	
									disableBackground();
									clearWidget();								
								}
							});
							$("#selection_tabs").tabs({
								active: 0
							});
							$("#input_selection_name").val("");
							$("#input_selection_value").val("");
							$("#input_selection_text").val("");
							$("#input_selection_option").val("");
							$("#input_selection_id").val("cke_ele_" + num);
							$("#select_selection_required").val(contact.required);							
							$("#select_selectin_fill").val("country");
							$('#select_sel_text')
								.find('option')
								.remove()
								.end()
							;
							$('#select_sel_value')
								.find('option')
								.remove()
								.end()
							;
							$("#input_selection_multiple").prop('checked', false);
							$("#input_selection_height").val("");
							$("#input_selection_style").val("");
							break;
						default:
							return;
					};
				} ); 
			}, 100);
		} );
		editor.on( 'doubleclick', function( evt ) {										
		});               
		editor.on('drop', function(ev) {					
		});
	}
} );

CKEDITOR.on( 'instanceReady', function() {
	CKEDITOR.document.getById( 'contactList' ).on( 'dragstart', function( evt ) {
		var target = evt.data.getTarget().getAscendant( 'div', true );
		CKEDITOR.plugins.clipboard.initDragDataTransfer( evt );

		var dataTransfer = evt.data.dataTransfer;
		dataTransfer.setData( 'contact', CONTACTS[ target.data( 'contact' ) ] );
		dataTransfer.setData( 'text/html', target.getText() );
		
		if ( dataTransfer.$.setDragImage ) {
			dataTransfer.$.setDragImage( target.findOne( 'img' ).$, 0, 0 );
		}
	} );								
} );

CKEDITOR.on('dialogDefinition', function (e) {    
	var dialog = e.data.definition.dialog;
	
	dialog.on('show', function () {    
		var element = this.getElement();
		var labelledby = element.getAttribute('aria-labelledby');          
		var nativeElement = document.querySelector("[aria-labelledby='" + labelledby + "']");        
		nativeElement.onclick = function (evt) {
			if ((evt.target.tagName == "INPUT" || evt.target.tagName == "SELECT" || evt.target.tagName == "TEXTAREA") &&
				-1 != evt.target.className.indexOf("cke_dialog_ui_input")) {
				evt.target.focus();    
			};
		}  
	});   
});

// Set the features of element using Input Dialog.
$("#input_btn_ok").click(function(){
	var sel_id = "#cke_ele_" + num;
	$("iframe").contents().find(sel_id).attr("name", $("#input_btn_name").val());
	switch($("#select_button_type").val()) {
		case "submit":
			$("iframe").contents().find(sel_id).attr("type", "submit");
			break;
		case "save":
			$("iframe").contents().find(sel_id).attr("type", "button");
			break;
		case "javascript":
			$("iframe").contents().find(sel_id).attr("type", "button");
			break;
		case "reset":
			$("iframe").contents().find(sel_id).attr("type", "reset");
			break;
		default:
			return;
	};
	$("iframe").contents().find(sel_id).attr("value", $("#input_btn_value").val());
	$("iframe").contents().find(sel_id).attr("style", $("#input_btn_style").val());
	$("iframe").contents().find(sel_id).attr("class", $("#input_btn_class").val());
	$("iframe").contents().find(sel_id).attr("id", $("#input_btn_id").val());
	if(dialogValidation("Button")) {
		isOkBtn = true;
		$("#btn_dialog").dialog("close");			
	};	
});

$("#input_img_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	$("iframe").contents().find(sel_id).attr("src", $("#input_img_src").val());
	$("iframe").contents().find(sel_id).css("width", $("#input_img_width").val());
	$("iframe").contents().find(sel_id).css("height", $("#input_img_height").val());
	$("#img_dialog").dialog("close");
});

$("#input_text_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	var required_class = "";
	if($("#select_text_required").val() == "true")
		required_class = "required,";
	var text_class = 'validate[' + required_class + 'custom[' + $("#select_text_validate").val() + ']]';
	$("iframe").contents().find(sel_id).attr("type", $("#select_text_validate").val());
	$("iframe").contents().find(sel_id).attr("name", $("#input_text_name").val());
	$("iframe").contents().find(sel_id).attr("size", $("#input_text_width").val());
	$("iframe").contents().find(sel_id).attr("value", $("#input_text_value").val());
	$("iframe").contents().find(sel_id).attr("class", text_class);
	$("iframe").contents().find(sel_id).attr("maxlength", $("#input_text_maximum").val());
	$("iframe").contents().find(sel_id).attr("placeholder", $("#input_text_placeholder").val());
	$("iframe").contents().find(sel_id).attr("style", $("#input_text_style").val());
	$("iframe").contents().find(sel_id).attr("id", $("#input_text_id").val());
	if(dialogValidation("Text")) {
		isOkBtn = true;
		$("#text_dialog").dialog("close");
	};			
});

$("#input_check_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	$("iframe").contents().find(sel_id).attr("type", "checkbox");	
	$("iframe").contents().find(sel_id).attr("data-cke-saved-name", $("#input_check_name").val());
	$("iframe").contents().find(sel_id).attr("value", $("#input_check_value").val());
	if($("#input_check_select").is(':checked'))
		$("iframe").contents().find(sel_id).attr("checked", "checked");
	if($("#select_check_required").val() == "yes")
		$("iframe").contents().find(sel_id).attr("class", "validate[required]");
	if(dialogValidation("CheckBox")) {
		isOkBtn = true;
		$("#check_dialog").dialog("close");
	};		
});

$("#input_radio_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	$("iframe").contents().find(sel_id).attr("type", "radio");
	$("iframe").contents().find(sel_id).attr("data-cke-saved-name", $("#input_radio_name").val());
	$("iframe").contents().find(sel_id).attr("value", $("#input_radio_value").val());
	if($("#input_radio_select").is(':checked'))
		$("iframe").contents().find(sel_id).attr("checked", "checked");
	if($("#input_radio_required").is(':checked'))
		$("iframe").contents().find(sel_id).attr("class", "validate[required]");
	if(dialogValidation("Radio")) {
		isOkBtn = true;
		$("#radio_dialog").dialog("close");
	};		
});

$("#input_textarea_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	$("iframe").contents().find(sel_id).attr("name", $("#input_textarea_name").val());
	$("iframe").contents().find(sel_id).attr("cols", $("#input_textarea_wide").val());
	$("iframe").contents().find(sel_id).attr("rows", $("#input_textarea_tall").val());
	if($("#select_textarea_required").val() == "true")
		$("iframe").contents().find(sel_id).attr("class", "validate[required]");
	$("iframe").contents().find(sel_id).attr("maxlength", $("#input_textarea_max").val());
	$("iframe").contents().find(sel_id).attr("placeholder", $("#input_textarea_placehold").val());
	$("iframe").contents().find(sel_id).text($("#input_textarea_value").val());
	$("iframe").contents().find(sel_id).attr("style", $("#input_textarea_style").val());
	$("iframe").contents().find(sel_id).attr("id", $("#input_textarea_id").val());
	if(dialogValidation("TextArea")) {
		isOkBtn = true;
		$("#textarea_dialog").dialog("close");
	};		
});

$("#input_hidden_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	var hidden_decode = '<input type="hidden" name="' + $("#input_hidden_name").val() + '" value="' + $("#input_hidden_value").val() + '">';
	$("iframe").contents().find(sel_id).attr("data-cke-realelement", encodeURIComponent(hidden_decode));
	if(dialogValidation("HiddenField")) {
		isOkBtn = true;
		$("#hidden_dialog").dialog("close");
	};
});

$("#input_ink_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	var ink_style = "padding:5px;width:" + $("#input_ink_width").val() + "px;height:" + $("#input_ink_height").val() + "px;background-color:" +	$("#input_ink_bg").val() + ";color:" + $("#input_ink_fg").val() + '"';
	$("iframe").contents().find(sel_id).attr("style", ink_style);
	$("iframe").contents().find(sel_id).attr("x-inksig", "1");
	$("iframe").contents().find(sel_id).attr("name", $("#input_ink_name").val());
	$("iframe").contents().find(sel_id).attr("class", $("#input_ink_css").val());
	$("iframe").contents().find(sel_id).attr("id", $("#input_ink_id").val());
	$("iframe").contents().find(sel_id).attr("w", $("#input_ink_width").val());
	$("iframe").contents().find(sel_id).attr("h", $("#input_ink_height").val());
	$("iframe").contents().find(sel_id).attr("caption", $("#input_ink_caption").val());
	$("iframe").contents().find(sel_id).attr("file_name", $("#input_ink_image").val());
	$("iframe").contents().find(sel_id).attr("fg", $("#input_ink_fg").val());
	$("iframe").contents().find(sel_id).attr("bg", $("#input_ink_bg").val());	
	$("iframe").contents().find(sel_id).attr("lux_clear_text", $("#input_ink_clearText").val());
	/* For static Editor */
	var list = document.getElementsByTagName("IFRAME")[0];
	var innerDoc = (list.contentDocument) ? list.contentDocument : list.contentWindow.document;

	if($("#select_ink_signature").val() == "true") {
		var ink_src = innerDoc.getElementById("cke_ele_" + num);
		ink_src.setAttribute("required", "yes");
	};		

	if($("#select_ink_clearBtn").val() == "true") {
		$("iframe").contents().find(sel_id).attr("lux_clear", "yes");	
	};
	if(dialogValidation("Ink")) {
		isOkBtn = true;
		$("#ink_dialog").dialog("close");
	};
});

$("#input_date_ok").click(function() {
	var div_style = "display:inline-block;padding:3px; width:150px;height:16px;background-color:#FFF;color:#000;border: 1px solid #CCC; overflow: hidden";
	var span_style = "width:16px;height:16px;display:inline-block; margin-right:9px; background-position:center center;background-repeat:no-repeat; background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22%23010202%22%20d%3D%22M0%206h3v3H0V6zm4%203h3V6H4v3zm4%200h3V6H8v3zm4%200h3V6h-3v3zm0-7v3h3V2h-3zM8%205h3V2H8v3zM4%205h3V2H4v3zm-4%208h3v-3H0v3zm4%200h3v-3H4v3zm4%200h3v-3H8v3z%22%2F%3E%3C%2Fsvg%3E');";
	var sel_id = "#cke_ele_" + num;		
	$("iframe").contents().find(sel_id).attr("name", $("#input_date_name").val());		
	$("iframe").contents().find(sel_id).attr("dateformat", $("#input_date_format").val());
	$("iframe").contents().find(sel_id).attr("value", $("#input_date_value").val());
	$("iframe").contents().find(sel_id).attr("dateformat_form", $("#input_date_submitted").val());
	$("iframe").contents().find(sel_id).attr("style", div_style);
	$("iframe").contents().find(sel_id).attr("x-cal", "1");
	$("iframe").contents().find("#simple-date-span").attr("style", span_style);
	/* For static Editor */
	var list = document.getElementsByTagName("IFRAME")[0];
	var innerDoc = (list.contentDocument) ? list.contentDocument : list.contentWindow.document;

	if($("#select_date_required").val() == "true") {
		var date_src = innerDoc.getElementById("cke_ele_" + num);
		date_src.setAttribute("required", "yes");
	};
	$("iframe").contents().find(sel_id).attr("id", $("#input_date_id").val());
	clearWidget();
	if(dialogValidation("Date")) {
		isOkBtn = true;
		$("#date_dialog").dialog("close");
	};		
});

$("#input_file_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	$("iframe").contents().find(sel_id).attr("name", $("#input_file_name").val());		
	$("iframe").contents().find(sel_id).attr("type", "file");
	if(dialogValidation("File")) {
		isOkBtn = true;
		$("#file_dialog").dialog("close");
	};		
});

$("#input_geo_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	$("iframe").contents().find(sel_id).attr("name", $("#input_geo_name").val());
	$("iframe").contents().find(sel_id).attr("id", $("#input_geo_id").val());
	$("iframe").contents().find(sel_id).attr("x-getgeo", "1");
	clearWidget();
	if(dialogValidation("Geo")) {
		isOkBtn = true;
		$("#geo_dialog").dialog("close");
	};
});

$("#input_selection_ok").click(function() {
	var sel_id = "#cke_ele_" + num;
	var list = document.getElementsByTagName("IFRAME")[0];
	var innerDoc = (list.contentDocument) ? list.contentDocument : list.contentWindow.document;

	$("iframe").contents().find(sel_id).attr("data-cke-saved-name", $("#input_selection_name").val());
	$("iframe").contents().find(sel_id).attr("id", $("#input_selection_id").val());
	if($("#select_selection_required").val() == "true") {
		$("iframe").contents().find(sel_id).attr("class", "validate[required]");
	};
	if($("input[type=checkbox][id=input_selection_multiple]:checked").val() == "on") {
		var date_src = innerDoc.getElementById("cke_ele_" + num);
		date_src.setAttribute("multiple", "true");
	};
	if($("#input_selection_height").val() > 0) {
		$("iframe").contents().find(sel_id).attr("size", $("#input_selection_height").val());
	};				
	$("iframe").contents().find(sel_id).attr("style", $("#input_selection_style").val());
	for(var i = 0; i < select_text.length; i++) {
		$("iframe").contents().find(sel_id).append($('<option>', {
			value: select_value[i],
			text: select_text[i]
		}));
	};
	if(dialogValidation("Selection")) {
		isOkBtn = true;
		$("#selection_dialog").dialog("close");
	};		
});

/* SELECT Change */
$("#select_sel_text").change(function() {
	var index = $("#select_sel_text option:selected").index();
	$("#input_selection_text").val($("#select_sel_text :selected").text());				
	$("#input_selection_option").val($('#select_sel_value option').eq(index).val());
	$('#select_sel_value option').eq(index).prop('selected', true);
});

$("#select_sel_value").change(function() {
	var index = $("#select_sel_value option:selected").index();
	$("#input_selection_option").val($("#select_sel_value :selected").text());			
	$("#input_selection_text").val($('#select_sel_text option').eq(index).val());
	$('#select_sel_text option').eq(index).prop('selected', true);
});

/* Add Button */
$("#button_selection_add").click(function() {
	$('#select_sel_text').append($('<option>', {
		value: $("#input_selection_text").val(),
		text: $("#input_selection_text").val()
	}));
	$('#select_sel_value').append($('<option>', {
		value: $("#input_selection_option").val(),
		text: $("#input_selection_option").val()
	}));
	
	select_text.push($("#input_selection_text").val());
	select_value.push($("#input_selection_option").val());
	
	$("#input_selection_text").val("");
	$("#input_selection_option").val("");
	
});

/* Modify Button */
$("#button_selection_modify").click(function() {
	var sel_text_index = $("#select_sel_text option:selected").index();
	for(var num = 0; num < select_text.length; num++) {
		if(num == sel_text_index) {
			select_text[num] = $("#input_selection_text").val();
			select_value[num] = $("#input_selection_option").val();
		};
	};
	$('#select_sel_text').empty();
	$('#select_sel_value').empty();
	select_text.forEach(function(ele) {
		$('#select_sel_text').append($('<option>', {
			value: ele,
			text: ele
		}));
	});
	select_value.forEach(function(ele) {
		$('#select_sel_value').append($('<option>', {
			value: ele,
			text: ele
		}));
	});
});

/* Up Button */
$("#button_selection_up").click(function() {
	var sel_text_index = $("#select_sel_text option:selected").index();
	if(sel_text_index == 0 || sel_text_index == -1)
		return;
	var temp_sel_text = select_text[sel_text_index];
	var temp_sel_value = select_value[sel_text_index];
	select_text[sel_text_index] = select_text[sel_text_index - 1];
	select_value[sel_text_index] = select_value[sel_text_index - 1];
	select_text[sel_text_index - 1] = temp_sel_text;
	select_value[sel_text_index - 1] = temp_sel_value;

	$('#select_sel_text').empty();
	$('#select_sel_value').empty();
	select_text.forEach(function(ele) {
		$('#select_sel_text').append($('<option>', {
			value: ele,
			text: ele
		}));
	});
	select_value.forEach(function(ele) {
		$('#select_sel_value').append($('<option>', {
			value: ele,
			text: ele
		}));
	});
});

/* Down */
$("#button_selection_down").click(function() {
	var sel_text_index = $("#select_sel_text option:selected").index();
	if(sel_text_index == select_text.length - 1 || sel_text_index == -1)
		return;
	var temp_sel_text = select_text[sel_text_index];
	var temp_sel_value = select_value[sel_text_index];
	select_text[sel_text_index] = select_text[sel_text_index + 1];
	select_value[sel_text_index] = select_value[sel_text_index + 1];
	select_text[sel_text_index + 1] = temp_sel_text;
	select_value[sel_text_index + 1] = temp_sel_value;

	$('#select_sel_text').empty();
	$('#select_sel_value').empty();
	select_text.forEach(function(ele) {
		$('#select_sel_text').append($('<option>', {
			value: ele,
			text: ele
		}));
	});
	select_value.forEach(function(ele) {
		$('#select_sel_value').append($('<option>', {
			value: ele,
			text: ele
		}));
	});
});

/* Fill Button */
$("#button_selection_fill").click(function() {
	$('#select_sel_text').empty();
	$('#select_sel_value').empty();
	select_text = [];
	select_value = [];

	var temp;
	switch($("#select_selectin_fill").val()) {
		case "country":
			temp = maps.country_list;
			break;
		case "state-fullName":
			temp = maps.province_list;
			break;
		case "state-code":
			temp = maps.state_2;
			break;
		default:
			return;
	};
	temp.forEach(function(ele) {
		$('#select_sel_text').append($('<option>', {
			value: ele,
			text: ele
		}));
		$('#select_sel_value').append($('<option>', {
			value: ele,
			text: ele
		}));
	});
	temp.forEach(function(e) {
		select_text.push(e);
		select_value.push(e);
	});
});

/* Delete Button */
$("#button_selection_delete").click(function() {
	var sel_text_index = $("#select_sel_text option:selected").index();
	select_text.splice(sel_text_index, 1);
	select_value.splice(sel_text_index, 1);

	$('#select_sel_text').empty();
	$('#select_sel_value').empty();
	select_text.forEach(function(ele) {
		$('#select_sel_text').append($('<option>', {
			value: ele,
			text: ele
		}));
	});
	select_value.forEach(function(ele) {
		$('#select_sel_value').append($('<option>', {
			value: ele,
			text: ele
		}));
	});
});

/* Set Default Value */
$("#button_selection_default").click(function() {	
	$("#input_selection_value").val($('#select_sel_value').val());
});

/* Close the dialog */
$("#input_btn_cancel").click(function() {	
	$("#btn_dialog").dialog("close");
});

$("#input_img_cancel").click(function() {
	$("#img_dialog").dialog("close");
});

$("#input_text_cancel").click(function() {
	$("#text_dialog").dialog("close");
});

$("#input_check_cancel").click(function() {
	$("#check_dialog").dialog("close");
});

$("#input_radio_cancel").click(function() {
	$("#radio_dialog").dialog("close");
});

$("#input_textarea_cancel").click(function() {
	$("#textarea_dialog").dialog("close");
});

$("#input_hidden_cancel").click(function() {
	$("#hidden_dialog").dialog("close");
});

$("#input_ink_cancel").click(function() {
	$("#ink_dialog").dialog("close");
});

$("#input_date_cancel").click(function() {
	$("#date_dialog").dialog("close");
});

$("#input_file_cancel").click(function() {
	$("#file_dialog").dialog("close");
});

$("#input_geo_cancel").click(function() {
	$("#geo_dialog").dialog("close");
});

$("#input_selection_cancel").click(function() {
	$("#selection_dialog").dialog("close");
});

function removeEle(iD) {
	/* For inline editor */
	// var removeEle = $(iD);

	/* For static editor */
	var removeEle = $("iframe").contents().find(iD);
	var temp_id;		
	for(var i = 0; i < data.length; i++) {
		temp_id = "#" + data[i].id;
		if(temp_id == iD) {
			if(data[i].type == "Text" || "Button" || "CheckBox" || "Radio" || "TextArea" || "Ink" || "Date" || "File" || "Geo" || "Selection") {
				removeEle.remove();
			}
			else
				removeEle.parent().remove();
		};
	};
	return;
};

function disableBackground() {
	var cke_background_cover = $("#cke_background_cover");
	if(cke_background_cover.hasClass("background-cover"))
		cke_background_cover.removeClass("background-cover");
	else
		cke_background_cover.addClass("background-cover");
	return;
};

function displaySelect() {
	select_text.forEach(function(element) {
	});
};

function clearWidget() {	
	$("iframe").contents().find(".cke_widget_simplebox").remove();
};

function dialogValidation(ele) {
	switch(ele) {
		case "Text":
			if($("#input_text_name").val() == "") {
				alert("Name: cannot be empty");
				return false;
			};					
			break;
		case "Button":
			if($("#input_btn_value").val() == "") {
				alert("Button Text: cannot be empty");
				return false;
			};					
			break;
		case "CheckBox":
			break;
		case "Radio":
			break;
		case "TextArea":
			if($("#input_textarea_name").val() == "") {
				alert("Name: cannot be empty");
				return false;
			};					
			break;
		case "HiddenField":
			break;
		case "Ink":
			if($("#input_ink_name").val() == "") {
				alert("Name: cannot be empty");
				return false;
			};
			if($("#input_ink_id").val() == "") {
				alert("Element ID: cannot be empty");
				return false;
			};
			break;
		case "Date":
			if($("#input_date_name").val() == "") {
				alert("Name: cannot be empty");
				return false;
			};
			if($("#input_date_id").val() == "") {
				alert("Element ID: cannot be empty");
				return false;
			}
			break;
		case "File":
			break;
		case "Geo":
			if($("#input_geo_name").val() == "") {
				alert("Name: cannot be empty");
				return false;
			};
			if($("#input_geo_id").val() == "") {
				alert("Element ID: cannot be empty");
				return false;
			}
			break;
		case "Selection":
			break;
		default:
			return;
	};
	return true;
};
