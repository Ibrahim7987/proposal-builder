import { Dispatch } from "react";
import { PARENT } from "./Globals";
import $ from 'jquery';
import { ContentPayload, fieldsPayload, stepsPayload } from "./models/ContentModels";
import { ActiveElementType, ColumnPayload, ProposalBuilderContextPayload, SectionPayload } from "./models/GeneralModels";
import { LinkSettings } from "./models/styleModels";
import {
    Collapse,
    initTE,
} from "tw-elements";
import uuid from "react-uuid";
import { preProcessSections } from "./preProcessor";

initTE({ Collapse });

export const hasKey = (obj: any, key: string) => {
    try {
        return (key in obj);
    } catch (e) {
        return false;
    }
}

export const defaultWebFontFamily = [
    'inherit',
    'Georgia, serif',
    '\'Palatino Linotype\', \'Book Antiqua\', Palatino, serif',
    '\'Times New Roman\', Times, serif',
    'Arial, Helvetica, sans-serif',
    '\'Arial Black\', Gadget, sans-serif',
    '\'Comic Sans MS\', cursive, sans-serif',
    'Impact, Charcoal, sans-serif',
    '\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif',
    'Tahoma, Geneva, sans-serif',
    '\'Trebuchet MS\', Helvetica, sans-serif',
    'Verdana, Geneva, sans-serif',
    '\'Courier New\', Courier, monospace',
    '\'Lucida Console\', Monaco, monospace',
    'Monospace'
];
export const googleFontFamily = ['Raleway', 'Open Sans', 'Josefin Sans', 'Alegreya', 'B612', 'Muli', 'Titillium Web', 'Varela', 'Vollkorn', 'IBM Plex Serif', 'Crimson Text', 'Cairo', 'BioRhyme', 'Karla', 'Lora', 'Frank Ruhl Libre', 'Playfair Display', 'Archivo', 'Spectral', 'Fjalla One', 'Roboto', 'Montserrat', 'Rubik', 'Source Sans Pro', 'Cardo', 'Cormorant', 'Work Sans', 'Rakkas', 'Concert One', 'Yatra One', 'Arvo', 'Lato', 'Abril Fatface', 'Ubuntu', 'PT Serif', 'Old Standard TT', 'Oswald', 'PT Sans', 'Poppins', 'Fira Sans', 'Nunito', 'Merriweather', 'Noto Sans', 'Source Sans Pro', 'Asap', 'Merriweather Sans', 'Dosis', 'Quicksand', 'Libre Baskerville', 'Anton', 'Bebas Neue', 'Abel', 'Lobster', 'Dancing Script', 'Comfortaa', 'Pacifico', 'Shadows Into Light', 'Caveat', 'Satisfy', 'Indie Flower', 'Zilla Slab', 'Play', 'Rampart One', 'Permanent Marker', 'Chakra Petch', 'Amatic SC', 'Cinzel', 'Kaushan Script', 'Cookie', 'Sacramento', 'Special Elite', 'Allura', 'Bad Script', 'Nothing You Could Do', 'Bungee Shade', 'Raleway Dots', 'Faster One', 'Stalemate', 'Anton']
export const customFontFamily = ['Calibri'];

export const checkIsCustomFontFamily = function (fontFamily: string) {

    return (customFontFamily.indexOf(fontFamily) > -1);
}

const usedUIDList: any = []

export const checkAndGenerateNewUID = function (obj: any, key: string) {

    var id = obj[key];

    // Generate new if available
    if (id && isIdInUse(id)) {
        obj[key] = uuid();
    }

    usedUIDList.push(obj[key]);

}

const isIdInUse = function (id: string) {

    return (usedUIDList.indexOf(id) >= 0);
}

export const checkIsGoogleFontFamily = function (fontFamily: string) {
    return (googleFontFamily.indexOf(fontFamily) > -1);
}
export function updateStepsComponent(contextData: ProposalBuilderContextPayload, updateContent: any) {
    const content = getContent(contextData)
    const updateActiveElement: ActiveElementType = contextData.activeElement
    if (contextData.activeElement?.formSubComponentType === "steps") {
        content.steps.map((step: stepsPayload) => {
            step.fields.map((field: fieldsPayload) => {
                if (field.id === contextData.activeElement?.formSubComponent.id) {
                    field = updateActiveElement.formSubComponent
                    updateContent(content);
                }
            })
        })
    }
}

export const saveBlock = function (event: any, element: any, predefinedTemplates: any, setPredefindedTemplates: any,) {
    // if (event)
    // 	event.stopPropagation();

    // var self = this;
    var section = JSON.parse(JSON.stringify(element));

    var hasContent = false;
    section.columns.forEach(function (column: ColumnPayload) {
        if (column.contents.length > 0)
            hasContent = true;
    });

    if (section.columns.length === 0 || !hasContent) {
        alert("Nothing to save. Please add atleast one content.");
        return;

    }
    var data: any = {};
    data.json = JSON.stringify(section);
    data.source = "PROPOSALTEMPLATE";
    data.builder_type = "DRAG_AND_DROP_BUILDER";
    data.type = "Saved Blocks";
    data.user_defined = true;
    let windoww: any = window
    const templates = predefinedTemplates
    windoww.parent.Builder_Block_Utils.saveBlock(data, function (item: any) {
        console.log("Block Saves Success")
        const addSavedTemplates: any = {
            id: item.id || uuid(),
            type: "Saved Blocks",
            name: item.name,
            user_defined: true,
            loading: false,
            thumbnail: !item.image_url ? "" : item.image_url,
            elements: preProcessSections(JSON.parse(item.json))
        }
        // item.json = JSON.parse(item.json);
        // item.savedBlock = true;
        // if (!item.image_url)
        //     item.image_url = "";
        templates.push(addSavedTemplates);
        setPredefindedTemplates([...templates])
    });

}

export const getSection = function (contextData: ProposalBuilderContextPayload) {
    if (contextData && contextData.activeElement && contextData.activeElement.elementType === "section") {
        for (const eachsection of contextData.proposalTemplateJSON.elements) {
            if (eachsection.id === contextData.activeElement?.elementId) {
                return eachsection;
            }
            // if(eachsection){
            //     return eachsection;
            // }

        }
        return undefined;
    }
}


export const loadFontFamily = function (fontFamily: string) {
    var formattedFontName = fontFamily.split(" ").join('_').trim().toLowerCase();
    if (checkIsGoogleFontFamily(fontFamily) && $('link#' + formattedFontName).length === 0) {
        let cssEl = $('<link>', { rel: 'stylesheet', type: 'text/css', 'href': 'https://d2p078bqz5urf7.cloudfront.net/cloud/prod/assets/lib/font-family/' + formattedFontName + '.css', id: formattedFontName });
        cssEl.appendTo('head');
    }
    if (checkIsCustomFontFamily(fontFamily) && $('style#' + formattedFontName).length === 0) {

        let cssEl = $('<style>', { type: 'text/css', id: formattedFontName });
        cssEl.html(`@import url('https://s3.amazonaws.com/ebuploads2/uploads/fonts/${formattedFontName}/${formattedFontName}.css');
                            body, .font-family-${formattedFontName} {
                            font-family: '${fontFamily}', sans-serif;
                            }`);
        cssEl.appendTo('head');
    }

}

export const loadAnchorSettings = function (anchorSettings: LinkSettings) {

    var $styleSheet = $("#linkColorStylesheet")
    if ($styleSheet.length === 0)
        $("head").append('<style id="linkColorStylesheet" type="text/css">.section-container a{color:' + anchorSettings.color + '!important;text-decoration: ' + anchorSettings.textDecoration + '!important;}</style>');
    else
        $styleSheet.text('.section-container a{color:' + anchorSettings.color + '!important;text-decoration: ' + anchorSettings.textDecoration + '!important;}');

}


export function updateFormEditingComponent(contextData: ProposalBuilderContextPayload) {
    const emptyFormSubComponent = {
        elementType: contextData.activeElement?.elementType,
        elementId: contextData.activeElement?.elementId,
        elementEditingModule: contextData.activeElement?.elementEditingModule,
        formSubComponentType: undefined,
        formSubComponent: undefined
    }
    const content = getContent(contextData)
    let formContents
    if (contextData.activeElement?.formSubComponentType) {
        formContents = content[contextData.activeElement?.formSubComponentType].contents
    }

    formContents && formContents?.map((formContent: any) => {
        if (formContent.id === contextData.activeElement?.formSubComponent.id) {
            formContent = contextData.activeElement?.formSubComponent
            contextData.updateBuilderData(contextData.proposalTemplateJSON.elements, contextData.proposalTemplateJSON.proposalSettings)
        }
    })

    // contextData.setActiveElement({ ...emptyFormSubComponent })

}

export const getContent = function (contextData: ProposalBuilderContextPayload) {
    if (contextData && contextData.activeElement && (contextData.activeElement.elementType === "content" || contextData.activeElement.elementType === "formContents")) {
        for (const eachsection of contextData.proposalTemplateJSON.elements) {
            for (const column of eachsection.columns) {
                let content = column.contents.find((content: ContentPayload) => {
                    if (content.id === contextData.activeElement?.elementId)
                        return content;
                });
                if (content) {
                    return content;
                }
            }
        }
        return undefined;
    }
}

export function updateProposalTemplateJson(key: string, value: any, proposalTemplateJson: any, setProposalTemplateJson: any) {

    const newProposalTemplatejson = proposalTemplateJson
    if (proposalTemplateJson.AMPMode) {
        if (key === "elements") {
            newProposalTemplatejson.AMPElements = value
        } else if (key === "proposalSettings") {
            newProposalTemplatejson.AMPProposalSettings = value
        }
    }
    // else {
    newProposalTemplatejson[key] = value
    // }
    setProposalTemplateJson({ ...newProposalTemplatejson })
}

export function updateButtonComponent(contextData: ProposalBuilderContextPayload, updateContent: any) {
    const content = getContent(contextData)
    const updateActiveElement: ActiveElementType = contextData.activeElement
    if (contextData.activeElement?.formSubComponentType === "buttons") {
        content.steps.map((step: stepsPayload) => {
            step.fields.map((field: fieldsPayload) => {
                if (field.id === contextData.activeElement?.formSubComponent.id) {
                    field = updateActiveElement.formSubComponent
                    updateContent(content);
                }
            })
        })
    }
}


export function contentAccordion(title: string, accordionJSX: any, accordionID: string, collapsetargetTitle: string, targetedParent?: string, accordion?: boolean, setAccordion?: any) {
    return (
        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="accordion-header mb-0" id="headingOne">
                <button
                    className="group relative flex w-full items-center border-0 bg-white px-4 py-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                    type="button"
                    aria-expanded="false"
                    onClick={() => { setAccordion(!accordion) }}
                    aria-controls={collapsetargetTitle}
                    data-te-collapse-init
                    data-te-target={`#${collapsetargetTitle}`}
                >
                    {title} <span
                        className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>                </button>
            </h2>
            <div id={collapsetargetTitle}
                aria-labelledby="settings"
                className={`!visible ${accordion ? "" : "hidden"}`}
                data-te-collapse-item
                data-te-collapse-show
                data-te-parent="#settings"
            >
                <div className="px-4 py-3">
                    {accordionJSX()}
                </div>
            </div>
        </div>
    )
}

export const selectImage = (allowedFileTypes: string[], callback: Function) => {

    if (!PARENT)
        return;

    new PARENT.Account_Box_Content_Box_Search_Utils_with_fileTypes(allowedFileTypes, 'image', function (file: any) {

        console.log(file);

        if (callback)
            callback(file);

    }).search();

}

export const getProductContent = (proposalTemplateJSON: any) => {
    return proposalTemplateJSON.elements.find((element: SectionPayload) =>
        element.columns.find((column) =>
            column.contents.find((content) =>
                content.type == "product_list"))).columns.find((column: ColumnPayload) =>
                    column.contents.find((content) =>
                        content.type == "product_list")).contents.find((content: ContentPayload) =>
                            content.type == "product_list")
}

export const getSavedContent = () => {
    var content = [];
    var $proposalBuilderContent: any = $(".proposal-builder-content")
    $proposalBuilderContent.find('.mce-content-body').removeClass('mce-content-body').removeAttr('contenteditable').removeAttr('id')
    $proposalBuilderContent.find('.content-action-icons').remove()
    $proposalBuilderContent.find('.section-action-icons').remove()
    $proposalBuilderContent.find('.content-container-wrapper').removeClass("selected-content active content-draggable")
    console.log($proposalBuilderContent[0].outerHTML)
    content.push($proposalBuilderContent[0].outerHTML);
    return content
}