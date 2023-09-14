import { useContext } from "react";
import React from "react";
import { ActiveElementType, ProposalBuilderContext, ProposalBuilderContextPayload } from "../models/GeneralModels";
import { ColumnPayload, SectionPayload } from "../models/DesignModels";
import { ContentPayload } from "../models/ContentModels";
import ImageLayout from "./ImageLayout";
import FormSettings from "./AMP/FormSettings";
import Alignment from "../styles/Alignment";
import Padding from "../styles/padding";
import BackgroundColor from "../styles/BackgroundColor";
import Width from "../styles/Width";
import Border from "../styles/Border";
import HtmlEditor from "../styles/HtmlEditor";
import SocialNetworks from "./socialNetworks";
import Font from "../styles/Font";
import ImageUpload from "../styles/ImageUpload";
import FullWidth from "../styles/FullWidth";
import FullWidthOnMobile from "../styles/FullWidthOnMobile";
import ImageLinkTo from "../styles/ImageLinkTo";
import Margin from "../styles/Margin";
import ButtonText from "./ButtonText";
import Url from "./Url";
import ButtonBackground from "../styles/ButtonBackground";
import LineHeight from "../styles/LineHeight";
import Iconsize from "../styles/IconSize";
import Height from "../styles/Height";
import VideoSettings from "../styles/VideoSettings";
import { loadFontFamily, updateFormEditingComponent } from "../Utils";

function FormEditComponent() {
    const contextData = useContext<ProposalBuilderContextPayload>(ProposalBuilderContext)

    function onChangeFontColor(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.font.color = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeWeight(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.font.weight = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeLineHeight(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.lineHeight = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeUrl(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.url = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }


    function onChangeHtml(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.html = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeIconSize(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.iconSize = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }


    function onChangeImageLink(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.linkTo.link = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeVideoThumbnail(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.videoLinkTo.thumbnail = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeVideoType(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.videoLinkTo.type = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeVideoUrl(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.videoLinkTo.link = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }


    function onChangeButtonText(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.buttonText = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeFontFamily(value: string) {
        loadFontFamily(value)
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.font.family = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }




    function onChangeRadius(value: number) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.border.radius = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeFullWidthMobile(value: boolean) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.fluidOnMobile = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }


    function onChangeFullWidth(value: boolean) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.fullWidth = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeHeight(value: string) {
        //number
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.height = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }


    function onChangeImage(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.image = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onchangeLayout(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.layout = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeLinkto(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.linkTo.type = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeButtonBackground(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.buttonBackgroundColor = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    // pending work



    function onChangeBorder(value: string, type: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            if (type === "width") {
                formSubComponent.options.border.size = value
            }
            if (type === "style") {
                formSubComponent.options.border.style = value
            }
            if (type === "color") {
                formSubComponent.options.border.color = value
            }
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onChangeWidth(value: number) {
        // for content
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.width = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value

    }


    function onChangeAlignment(value: string) {
        // for content
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.align = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onchangeIconSpaceing(value: string, side: number) {
        //number
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.iconSpacing[side] = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }






    function onchangePadding(value: string, side: number) {
        //number
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.padding[side] = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }




    function onChangeBackgroundColor(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.backgroundColor = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }


    function onChangeMargin(value: string, side: number) {
        //number
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.margin[side] = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
    }

    function onchangeFontSize(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.font.size = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateFormEditingComponent(contextData)
        return value
        // for content
    }



    function updateContent(updatedContent: ContentPayload) {
        if (contextData && contextData.activeElement && contextData.activeElement.elementType === "contents") {
            return contextData.proposalTemplateJSON.elements.map((section: SectionPayload, rowIndex: number) => {
                return section.columns.map((column: ColumnPayload, columnIndex: number) => {
                    return column.contents.map((content: ContentPayload, contentIndex: number) => {
                        if (content.id === updatedContent.id) {
                            const contentPaddingArray = contextData.proposalTemplateJSON.elements
                            contentPaddingArray[rowIndex].columns[columnIndex].contents[contentIndex] = updatedContent;
                            contextData.updateBuilderData(contentPaddingArray, contextData.proposalTemplateJSON.proposalSettings)
                        }
                    })
                })
            })
        }
        // return value
    }

    const formSubComponent = contextData.activeElement?.formSubComponent
    const border = formSubComponent.options.border
    const html = formSubComponent.options.html
    const linkTo = formSubComponent.options.linkTo
    const image = formSubComponent.options.image
    const buttonText = formSubComponent.options.buttonText
    const lineHeight = formSubComponent.options.lineHeight
    const height = formSubComponent.options.height
    const videoLinkTo = formSubComponent.options.videoLinkTo
    const fullWidth = formSubComponent.options.fullWidth
    const font = formSubComponent.options.font
    const fluidOnMobile = formSubComponent.options.fluidOnMobile
    const margin = formSubComponent.options.margin
    const URL = formSubComponent.options.url
    const buttonBackgroundColor = formSubComponent.options.buttonBackgroundColor
    const iconSize = formSubComponent.options.iconSize
    const align = formSubComponent.options.align
    return (
        <div className="left-panel-scroll">
            <h6 className="text-start">Form settings</h6>
            <div className="accordion block-properities" id="settings">
                {formSubComponent.options.hasOwnProperty("image") ? (
                    <>
                        <ImageLayout onchangeLayout={onchangeLayout} layout={image} />

                    </>
                ) : <></>}
                {contextData.activeElement?.formSubComponentType === "steps" ? (
                    <>
                        <FormSettings content={formSubComponent} updateContent={updateContent} />

                    </>
                ) : <></>}

                {formSubComponent.options.hasOwnProperty("align") && align ? (
                    <>
                        <Alignment alignment={align} adjustAlignment={onChangeAlignment} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("padding") ? (
                    <>
                        <Padding paddingDirections={formSubComponent.options.padding} onchangePadding={onchangePadding} accordionTitle={"Form Padding"} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("iconSpacing") ? (
                    <>
                        <Padding paddingDirections={formSubComponent.options.iconSpacing} onchangePadding={onchangeIconSpaceing} accordionTitle={"Icon Spacing"} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("backgroundColor") ? (
                    <>
                        <BackgroundColor onChangeBackgroundColor={onChangeBackgroundColor} background={formSubComponent.options.backgroundColor} label={"Background Color"} />

                    </>
                ) : <></>}
                {/* {formSubComponent.options.hasOwnProperty("width") ? (
                    <>
                        <Width width={formSubComponent.options.width} onChangeWidth={onChangeWidth} />

                    </>
                ) : <></>} */}
                {formSubComponent.options.hasOwnProperty("border") && border ? (
                    <Border border={border} onChangeBorder={onChangeBorder} label={"Border"} onChangeRadius={onChangeRadius} />
                ) : <></>}


                {formSubComponent.options.hasOwnProperty("html") && html ? (
                    <>
                        <HtmlEditor onChangeHtml={onChangeHtml} html={html} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("socialLinks") ? (
                    <>
                        <SocialNetworks elements={contextData.proposalTemplateJSON.elements} />

                    </>
                ) : <></>}



                {formSubComponent.options.hasOwnProperty("font") && font ? (
                    <>
                        <Font label={"Form Font"} onChangeFontFamily={onChangeFontFamily} onchangeFontSize={onchangeFontSize} onChangeFontColor={onChangeFontColor} onChangeWeight={onChangeWeight} font={font} />

                    </>
                ) : <></>}

                {formSubComponent.options.hasOwnProperty("image") && image ? (
                    <>
                        <ImageUpload onChangeImage={onChangeImage} image={image} />

                    </>
                ) : <></>}

                {formSubComponent.options.hasOwnProperty("fullWidth") && fullWidth !== undefined ? (
                    <>
                        <FullWidth onChangeFullWidth={onChangeFullWidth} fullWidth={fullWidth} />

                    </>
                ) : <></>}

                {formSubComponent.options.hasOwnProperty("fluidOnMobile") && fluidOnMobile ? (
                    <>
                        <FullWidthOnMobile onChangeFullWidthMobile={onChangeFullWidthMobile} fullWidthMobile={fluidOnMobile} />

                    </>
                ) : <></>}

                {formSubComponent.options.hasOwnProperty("linkTo") ? (
                    <>
                        <ImageLinkTo onChangeImageLink={onChangeImageLink} linkto={linkTo || {}} onChangeLinkto={onChangeLinkto} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("margin") ? (
                    <>
                        <Margin margin={margin || []} onChangeMargin={onChangeMargin} accordionTitle={"Outer Space"} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("buttonText") ?
                    (
                        <>
                            <ButtonText buttonText={buttonText || ""} onChangeButtonText={onChangeButtonText} />


                        </>
                    ) : <></>}
                {formSubComponent.options.hasOwnProperty("url") ? (
                    <>
                        <Url url={URL || ""} onChangeUrl={onChangeUrl} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("buttonBackgroundColor") ? (
                    <>
                        <ButtonBackground btnBackground={buttonBackgroundColor || ""} onChangeButtonBackground={onChangeButtonBackground} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("lineHeight") ? (
                    <>
                        <LineHeight onChangeLineHeight={onChangeLineHeight} lineHeight={lineHeight || ""} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("iconSize") ? (
                    <>
                        <Iconsize iconSize={iconSize || ""} onChangeIconSize={onChangeIconSize} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("height") ? (
                    <>
                        <Height height={height || ""} onChangeHeight={onChangeHeight} />

                    </>
                ) : <></>}
                {formSubComponent.options.hasOwnProperty("videoLinkTo") && videoLinkTo ? (
                    <>
                        <VideoSettings onChangeVideoUrl={onChangeVideoUrl} onChangeVideoType={onChangeVideoType} onChangeVideoThumbnail={onChangeVideoThumbnail} videoLinkTo={videoLinkTo} />

                    </>
                ) : <></>}
            </div>
        </div>

    )




}

export default FormEditComponent;