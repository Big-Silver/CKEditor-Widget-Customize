CKEDITOR.plugins.add("doksoft_image", {
    lang: ["en", "ru", "es"],
    init: function(a) {
        if (typeof a.lang.doksoft_image.doksoft_image != "undefined") {
            a.lang.doksoft_image = a.lang.doksoft_image.doksoft_image;
        }
        var b = a.addCommand("doksoft_image", new CKEDITOR.dialogCommand("doksoft_image"));
        b.modes = {
            wysiwyg: 1,
            source: 0
        };
        b.canUndo = true;
        b.addParam = "image";
        if (CKEDITOR.version.charAt(0) == "4") {
            a.ui.addButton("doksoft_image", {
                label: a.lang.doksoft_image.button_label,
                command: "doksoft_image",
                icon: this.path + "doksoft_image_4.png"
            });
        } else {
            a.ui.addButton("doksoft_image", {
                label: a.lang.doksoft_image.button_label,
                command: "doksoft_image",
                icon: this.path + "doksoft_image.png"
            });
        }
        CKEDITOR.dialog.add("doksoft_image", this.path + "dialogs/dlg_upload.js");
    }
});