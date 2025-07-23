Lyte.Component.register("zt-uihelp-icons", { //No I18N
    data: function () {
        return {
            iconsCategory: Lyte.attr('array', {
                default: [
                    {
                        name: 'Common', api_name: 'common', icons: [
                            { iconName: 'ZB_Copy', iconClass: 'zb16' }, 
                            { iconName: 'ZB_Close', iconClass: 'zb10' } // No I18N
                        ]
                    },
                    {
                        name: 'Empty State', api_name: 'empty_state', icons: [
                            { iconName: 'ZB_Empty_Reminder', iconClass: 'zb60' }, 
                            { iconName: 'ZB_Empty_Notifications', iconClass: 'zb60' }, 
                            { iconName: 'ZB_Empty_Records', iconClass: 'zb60' }, 
                            { iconName: 'ZB_Empty_Feeds', iconClass: 'zb60' }, 
                            { iconName: 'ZB_Empty_Feeds_stroke', iconClass: 'zb60' } // No I18N
                        ]
                    },
                    {
                        name: 'Media icons', api_name: 'media_icons', icons: [
                            { iconName: 'ZB_Files_Audio', iconClass: 'zbw30h24' }, 
                            { iconName: 'ZB_Files_Document', iconClass: 'zbh30w24' },
                            { iconName: 'ZB_Files_Image', iconClass: 'zb30' }, 
                            { iconName: 'ZB_Files_Link', iconClass: 'zb28' }, 
                        ]
                    }

                ]
            }),
            selectedIcon: Lyte.attr('object', { default: null }), // No I18N
            selectedCategory: Lyte.attr('string', { default: '' }) // No I18N
        };
    },
    init: function () {
        this.setData('selectedCategory', 'common'); // No I18N
        Lyte.Component.set(this.getData('iconsCategory')[0], 'active', true); // No I18N
    },
    actions: {
        changeIconCategory: function (icon) {
            this.setData('selectedCategory', icon.api_name); // No I18N
            Lyte.Component.set(icon, 'active', true); // No I18N
            document.querySelector("#" + icon.api_name).scrollIntoView({ behavior: "smooth" }); // No I18N
        },
        onIconClick: function (icon) {
            this.setData('selectedIcon', icon); // No I18N
        },
        closeIconPreview: function () {
            this.setData('selectedIcon', null); // No I18N
        },
        copySampleDataCode: function () {
            var codeSnip,
                selectedIcon = this.getData('selectedIcon'); // No I18N
            if (selectedIcon.iconClass) {
                codeSnip = `<ux-icons icon-name="${selectedIcon.iconName}" icon-class="${selectedIcon.iconClass}"></ux-icons>`; //No I18N
            } else {
                codeSnip = `<ux-icons icon-name="${selectedIcon.iconName}"></ux-icons>`; //No I18N   
            }
            document.getElementById('uiHelpDocAlertMsge').ltProp('show', true); //No I18N   
            return navigator.clipboard.writeText(codeSnip);
        },
    }
});