(function() {
    var a = function(o) {
        var L = 1,
            I = 2,
            H = 4,
            F = 8,
            E = /^\s*(\d+)((px)|\%)?\s*$/i,
            C = /(^\s*(\d+)((px)|\%)?\s*$)|^$/i,
            A = /^\d+px$/,
            M = "",
            J = "",
            z = "",
            y = "",
            m = false,
            G = "";
        var x;
        var v = CKEDITOR.plugins.getPath("doksoft_image");
        o.doksoft_image_path = v;
        ttl = o.lang.doksoft_image.dlg_title;
        var u = "plupload";
        if (typeof o.config.doksoft_image_ui !== "undefined") {
            if (o.config.doksoft_image_ui.toLowerCase() == "old") {
                u = o.config.doksoft_image_ui.toLowerCase();
            }
        }
        var v = CKEDITOR.basePath + "plugins/doksoft_image/";
        window["doksoft_image_ckeditorPluginPath"] = v;
        if (typeof o.config.doksoft_uploader_url === "undefined") {
            o.config.doksoft_uploader_url = CKEDITOR.basePath + "plugins/doksoft_uploader/uploader.php";
        }
        var K = o.config.doksoft_uploader_url;
        if (K.indexOf("?") >= 0) {
            K += "&";
        } else {
            K += "?";
        }
        K += "type=Images";
        window["doksoft_image_doksoftUploaderUrl"] = K;
        window["doksoft_image_allowedExt"] = "jpg,jpeg,gif,png,bmp,tif,tiff";
        if (typeof o.config.doksoft_image_allowed_ext !== "undefined") {
            if (o.config.doksoft_image_allowed_ext == "") {
                o.config.doksoft_image_allowed_ext = "*";
            }
            window["doksoft_image_allowedExt"] = o.config.doksoft_image_allowed_ext;
        }
        var l;
        var p = false;
        var s = 440;
        var N = 250;
        if (u == "old") {
            s = 420;
            N = 110;
            l = [{
                type: "html",
                style: "margin-top:30px;width:40px;height:40px;font-weight:bold;",
                id: "message",
                html: o.lang.doksoft_image.status_file_upload_success,
                hidden: true
            }, {
                type: "html",
                style: "margin-top:30px;width:40px;height:40px;font-weight:bold;",
                id: "message1",
                html: o.lang.doksoft_image.status_file_upload_wait,
                hidden: true
            }, {
                type: "file",
                id: "upload",
                style: "height:40px",
                size: 38,
                onChange: function() {
                    m = true;
                    M = this.getElement();
                }
            }, {
                type: "fileButton",
                id: "uploadButton",
                onClick: function() {
                    if (m) {
                        y.show();
                        M.hide();
                        J.hide();
                    }
                },
                filebrowser: {
                    action: "QuickUpload",
                    target: "info:txtUrl",
                    url: K,
                    onSelect: function(d, f) {
                        if (d) {
                            var h = this.getDialog();
                            var e = this.filebrowser.target || null;
                            d = d.replace(/#/g, "%23");
                            if (e) {
                                var i = e.split(":");
                                var g = h.getContentElement(i[0], i[1]);
                                if (g) {
                                    g.setValue(d);
                                }
                            }
                        } else {
                            m = false;
                            y.hide();
                            M.show();
                            J.show();
                            alert(f);
                        }
                        return false;
                    }
                },
                label: o.lang.doksoft_image.label_send_to_server,
                "for": ["info", "upload"]
            }, {
                id: "txtUrl",
                type: "text",
                label: o.lang.common.url,
                required: true,
                onChange: function() {
                    var f = this.getDialog(),
                        e = this.getValue();
                    if (e.length > 0) {
                        var d = f.originalElement;
                        y.hide();
                        z.show();
                    }
                },
                setup: function(g, f) {
                    if (g == L) {
                        var e = f.data("cke-saved-src") || f.getAttribute("src"),
                            d = this;
                        this.getDialog().dontResetSize = true;
                    }
                },
                commit: function(f, e) {
                    var d = this;
                    if (f == L && (d.getValue() || d.isChanged())) {
                        e.data("cke-saved-src", d.getValue());
                    } else {
                        e.setAttribute("src", "");
                        e.removeAttribute("src");
                    }
                },
                validate: CKEDITOR.dialog.validate.notEmpty(o.lang.doksoft_image.label_no_file),
                hidden: true
            }];
        } else {
            if (u == "plupload") {
                K += "&client=plupload";
                window["doksoft_image_doksoftUploaderUrl"] = K;
                var k = true;
                if (!(typeof o.config.doksoft_image_auto_upload === "undefined")) {
                    k = o.config.doksoft_image_auto_upload;
                }
                window["doksoft_image_autoUpload"] = k;
                var D = "";
                var t = "";
                var c = true;
                if (!(typeof o.config.doksoft_image_default_img_resize === "undefined")) {
                    c = o.config.doksoft_image_default_img_resize;
                }
                var B = "800";
                if (!(typeof o.config.doksoft_image_default_img_resize_width === "undefined")) {
                    B = o.config.doksoft_image_default_img_resize_width;
                }
                var r = "600";
                if (!(typeof o.config.doksoft_image_default_img_resize_height === "undefined")) {
                    r = o.config.doksoft_image_default_img_resize_height;
                }
                var w = false;
                if (!(typeof o.config.doksoft_image_default_img_resize_enlarge === "undefined")) {
                    w = o.config.doksoft_image_default_img_resize_enlarge;
                }
                var b = true;
                if (!(typeof o.config.doksoft_image_img_resize_show === "undefined")) {
                    b = o.config.doksoft_image_img_resize_show;
                }
                if (0) {
                    var t = '<style type="text/css" media="all">' + '#doksoft_image-panel-img-resize #doksoft_image-img-resize-up { background-color: white; background-image: url("' + v + 'resize_up_disabled.png"); background-repeat: no-repeat; background-position: top left; width:19px; height:19px; display: inline-block; margin-left: 5px; font-size:15px; border: 1px solid #aaa; border-radius: 2px; }' + '#doksoft_image-panel-img-resize.enabled #doksoft_image-img-resize-up { background-image: url("' + v + 'resize_up.png"); cursor: pointer; } ' + '#doksoft_image-panel-img-resize.enabled #doksoft_image-img-resize-up:hover { background-image: url("' + v + 'resize_up_hover.png"); }' + '#doksoft_image-panel-img-resize.enabled #doksoft_image-img-resize-up.checked { background-image: url("' + v + 'resize_up_checked.png"); }' + '#doksoft_image-panel-img-resize.enabled #doksoft_image-img-resize-up.checked:hover { background-image: url("' + v + 'resize_up_checked_hover.png"); }' + "#doksoft_image-img-resize { width: 13px; height: 13px; padding: 0; margin:0; vertical-align: bottom; position: relative; top: -1px; *overflow: hidden;}" + "#doksoft_image-panel-img-resize { padding: 4px 0; }" + '#doksoft_image-panel-img-resize input[type="text"] {background-color: rgb(238, 238, 238); width:60px;border:1px solid #AAA;padding:2px;margin:0 4px 0 4px;font-size:12px; }' + '#doksoft_image-panel-img-resize.enabled input[type="text"] {background-color: white; }' + "#doksoft_image-panel-img-resize .doksoft_image-label { display: inline-block; padding-left: 15px; text-indent: -15px; width: 80px; }" + (b ? "" : "#doksoft_image-panel-resize { display: none !important; }") + "</style>" + '<div id="doksoft_image-panel-img-resize"' + (c ? ' class="enabled"' : "") + ">" + '<div style="display:inline-block">' + '<label class="doksoft_image-label">' + '<input id="doksoft_image-img-resize" type="checkbox"' + (c ? ' checked="checked"' : "") + "/>" + "&nbsp; " + o.lang.doksoft_image.resize + "</label>" + '<input type="text" id="doksoft_image-img-resize-width" value="' + B + '" ' + (c ? "" : 'disabled="disabled"') + "/>" + "&nbsp;×&nbsp;" + '<input type="text" id="doksoft_image-img-resize-height" value="' + r + '"' + (c ? "" : 'disabled="disabled"') + "/>" + "</div>" + '<div alt="' + o.lang.doksoft_image.resize_up + '" title="' + o.lang.doksoft_image.resize_up + '"' + (w ? ' class="checked"' : "") + ' id="doksoft_image-img-resize-up">&nbsp;</div>' + "</div>";
                }
                var t = "";
                var q = "";
                if (D.length > 0 || t.length > 0) {
                    q = '<div style="border-top: 1px solid #aaa;padding:10px 0; width:96%;padding:10px 2%; background-color: #DFDFDF">' + D + t + "</div>";
                }
                l = [{
                    type: "html",
                    id: "plupload2_doksoft_image",
                    html: '<div id="plupload2_doksoft_image">' + '<div class="plupload2_doksoft_image">' + "</div>" + q + "</div>"
                }];
            }
        }

        function O(f, d) {
            var e = "<img src='{IMAGE}'/>";
            if (f.config.doksoft_image_template) {
                e = f.config.doksoft_image_template;
            }
            e = e.replace(/\{IMAGE\}/g, d);
            return e;
        }
        return {
            title: ttl,
            minWidth: s,
            minHeight: N,
            width: s,
            height: N,
            resizable: p,
            onShow: function() {
                window["doksoft_image_doksoftUploadedFiles"] = [];
                if (u == "old") {
                    z = this.getContentElement("info", "message").getElement();
                    y = this.getContentElement("info", "message1").getElement();
                    J = this.getContentElement("info", "uploadButton").getElement();
                    m = false;
                    makethumb = false;
                    if (M != "") {
                        z.hide();
                        y.hide();
                        M.show();
                        J.show();
                    }
                } else {
                    if (u == "plupload") {
                        var h = CKEDITOR.dialog.getCurrent();
                        var e = h.getElement().getFirst();
                        e.setAttribute("class", e.getAttribute("class") + " dlg_doksoft_plupload");
                        var g = document;
                        var f = g.createElement("link");
                        f.href = v + "plupload2/jquery.plupload.queue/css/jquery.plupload.queue.css";
                        f.type = "text/css";
                        f.rel = "stylesheet";
                        g.head.appendChild(f);
                        var d = g.createElement("script");
                        d.type = "text/javascript";
                        d.src = v + "plupload2/all.js";
                        g.head.appendChild(d);
                    }
                }
            },
            onOk: function() {
                if (u == "old") {
                    var d = this.getContentElement("info", "txtUrl").getValue();
                    var g = O(this._.editor, d);
                    var f = CKEDITOR.dom.element.createFromHtml(g);
                    o.insertElement(f);
                } else {
                    if (u == "plupload") {
                        var h = window["doksoft_image_doksoftUploadedFiles"];
                        if (h.length == 0) {
                            var j = j_doksoft_image(".plupload2_doksoft_image").pluploadQueue();
                            if (k && j.files.length > 0) {
                                window["doksoft_image_dlg"] = this;
                                j.start();
                            } else {
                                alert("Upload files to continue");
                            }
                            return false;
                        }
                        for (var e = 0; e < h.length; e++) {
                            var g = O(this._.editor, h[e]);
                            var f = CKEDITOR.dom.element.createFromHtml(g);
                            o.insertElement(f);
                        }
                    }
                }
            },
            onHide: function() {
                if (this.originalElement) {
                    this.originalElement.remove();
                    this.originalElement = false;
                }
                delete this.imageElement;
            },
            contents: [{
                id: "info",
                label: o.lang.doksoft_image.status_file_upload,
                accessKey: "I",
                elements: [{
                    type: "vbox",
                    padding: 0,
                    children: [{
                        type: "vbox",
                        id: "uploadbox",
                        align: "right",
                        children: l
                    }]
                }]
            }]
        };
    };
    CKEDITOR.dialog.add("doksoft_image", function(b) {
        return a(b);
    });
})();