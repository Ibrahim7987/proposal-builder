import { BUILD_META_INFO } from "./Globals";
import { checkAndGenerateNewUID, hasKey, loadAnchorSettings, loadFontFamily } from "./Utils";

export const getFallbackData = (functionName: any) => {

    var fallbackNestedProp = functionName.split(".");
    let genFunction: any = window.parent;
    for (var i = 0; i < fallbackNestedProp.length; i++) {
        genFunction = genFunction[fallbackNestedProp[i]];
    }
    return genFunction(BUILD_META_INFO);

}

export const goBackCallback = (functionName: any) => {
    return getFallbackData(functionName);
}

export const executeSaveCallback = (saveCallback: string, data: any) => {

    var callbackNestedProp: string[] = saveCallback.split(".");
    let genFunction: any = window.parent;
    for (var i = 0; i < callbackNestedProp.length; i++) {
        genFunction = genFunction[callbackNestedProp[i]];
    }
    return genFunction(data, BUILD_META_INFO);
}

export const preprocessEmail = (emailData: any) => {

    var email = (emailData) ? emailData : {
        elements: [],
        html: '',
        emailSettings: {
            contentWidth: '600',
            font: {
                family: 'Arial, Helvetica, sans-serif',
                style: 'normal',
                size: 13,
                weight: 'normal',
                lineHeight: 1.6,
                color: "#000000"
            },
            padding: [50, 0, 50, 0],
            background: {
                "color": "#F2F2F2",
                "url": "",
                "noRepeat": false,
                "size": "auto",
                "positionX": "center",
                "positionY": "center"
            }
        }
    }

    if (!email.emailSettings.background) {
        let bgSettings: any = {};
        bgSettings.color = email.emailSettings.backgroundColor;
        bgSettings.url = email.emailSettings.backgroundImage ? email.emailSettings.backgroundImage.url : "";
        bgSettings.noRepeat = email.emailSettings.backgroundImage ? email.emailSettings.backgroundImage.noRepeat : false;
        bgSettings.size = email.emailSettings.backgroundImage ? email.emailSettings.backgroundImage.size : "auto";
        bgSettings.positionX = email.emailSettings.backgroundImage ? email.emailSettings.backgroundImage.positionX : "center";
        bgSettings.positionY = email.emailSettings.backgroundImage ? email.emailSettings.backgroundImage.positionY : "center";
        email.emailSettings.background = bgSettings;
        delete email.emailSettings['backgroundColor'];
        delete email.emailSettings['backgroundImage'];
    }

    if (!email.emailSettings.linkSettings) {
        email.emailSettings.linkSettings = {
            color: '#15c',
            textDecoration: 'underline'
        };
    }

    if (!email.emailSettings.font.size) {
        email.emailSettings.font.size = 13;
        email.emailSettings.font.style = 'normal';
        email.emailSettings.font.weight = 'normal';
        email.emailSettings.font.lineHeight = 1.6;
        email.emailSettings.font.color = "#000000";
    }

    loadAnchorSettings(email.emailSettings.linkSettings);

    // Emulate response from server
    loadFontFamily(email.emailSettings.font.family);

    // const fontFamilyList = getUsedFontFamilies(emailTemplateJSON.emailSettings, emailTemplateJSON.elements)
    // loadMultipleFontFamily(fontFamilyList)

    try {
        email.elements.map(function (element: any) {

            return preProcessSections(element);


        });

    } catch (e) {
        console.warn(e);
    }

    return email;

}

export const preProcessSections = (element: any) => {

    checkAndGenerateNewUID(element, 'id');

    if (!element.options.sectionBackground) {
        element.options.sectionBackground = {
            url: '',
            noRepeat: false,
            size: 'auto',
            positionX: 'center',
            positionY: 'center',
            color: ""
        }
    }

    if (!element.options.background) {
        let bgSettings: any = {};
        bgSettings.color = element.options.backgroundColor;
        bgSettings.url = element.options.backgroundImage ? element.options.backgroundImage.url : "";
        bgSettings.noRepeat = element.options.backgroundImage ? element.options.backgroundImage.noRepeat : false;
        bgSettings.size = element.options.backgroundImage ? element.options.backgroundImage.size : "auto";
        bgSettings.positionX = element.options.backgroundImage ? element.options.backgroundImage.positionX : "center";
        bgSettings.positionY = element.options.backgroundImage ? element.options.backgroundImage.positionY : "center";
        element.options.background = bgSettings;
        delete element.options['backgroundColor'];
        delete element.options['backgroundImage'];
    }

    if (!element.options.border) {
        element.options.border = {
            size: 0,
            style: 'solid',
            color: '#dddddd',
            applyTo: ['left', 'right', 'top', 'bottom'],
            // radius: 0
        }
    }

    if (!element.options.margin) {
        element.options.margin = [0, 0, 0, 0]
    }

    element.columns.map(function (column: any) {

        if (!column.options.border.applyTo)
            column.options.border.applyTo = ['left', 'right', 'top', 'bottom'];

        if (!column.options.innerBackgroundColor)
            column.options.innerBackgroundColor = 'transparent';

        if (!column.options.innerBorder) {
            column.options.innerBorder = {
                size: 0,
                style: 'solid',
                color: '#dddddd',
                applyTo: ['left', 'right', 'top', 'bottom'],
            }
        }

        if (!column.options.padding)
            column.options.padding = [0, 0, 0, 0];

        checkAndGenerateNewUID(column, 'id');

        column.contents.map(function (content: any) {

            checkAndGenerateNewUID(content, 'id');

            switch (content.type) {

                case 'divider':

                    if (!content.options.width || Number(content.options.width) > 100)
                        content.options.width = 100;

                    if (!content.options.align)
                        content.options.align = 'center';

                    break

                case 'image':
                case 'video':

                    if (!hasKey(content.options, 'fullWidth'))
                        content.options.fullWidth = false;

                    if (!hasKey(content.options, 'fluidOnMobile'))
                        content.options.fluidOnMobile = false;

                    break

                case 'button':
                case 'text':
                case 'rss':

                    if (content.type == 'text') {

                        if (!content.options.font)
                            content.options.font = {};

                        if (!content.options.font.family)
                            content.options.font.family = 'inherit';

                    }

                    if (content.options.font && content.options.font.family) {
                        loadFontFamily(content.options.font.family);
                    }

                    break;

            }

        })

        return column;
    });

    return element;
}