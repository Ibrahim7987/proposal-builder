import BackgroundColor from "../styles/BackgroundColor";
import Padding from "../styles/padding";
import Radius from "../styles/Radius";
import Width from "../styles/Width";
import ImageUpload from "../styles/ImageUpload";
import FullWidth from "../styles/FullWidth";
import Margin from "../styles/Margin";
import Height from "../styles/Height"
import VideoSetting from "../styles/VideoSettings"
import ButtonBackground from "../styles/ButtonBackground";
import LineHeight from "../styles/LineHeight";
import Font from "../styles/Font";
import HtmlEditor from "../styles/HtmlEditor";
import Iconsize from "../styles/IconSize";
import FullWidthOnMobile from "../styles/FullWidthOnMobile";
import ImageLinkTo from "../styles/ImageLinkTo";
import SocialNetworks from "./socialNetworks";
import ButtonText from "./ButtonText";
import Url from "./Url";
import { useContext } from "react";
import { ColumnPayload, ProposalBuilderContext, ProposalBuilderContextPayload, SectionPayload } from "../models/GeneralModels";
import Alignment from "../styles/Alignment";
import Border from "../styles/Border";
import { ContentPayload, ProductProposalsContentOptionsPayload } from "../models/ContentModels";
import { getContent, loadFontFamily } from "../Utils";
import React from "react"
import FormSettings from "./AMP/FormSettings";
import uuid from "react-uuid";
import ImageLayout from "./ImageLayout";
import ButtonStyles from "./AMP/ButtonStyles";
import AltTag from "../styles/AltTag";
function ContentSetting() {
    const contextData = useContext<ProposalBuilderContextPayload>(ProposalBuilderContext)


    function onChangeFontColor(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.font) {
                content.options.font.color = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeWeight(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.font) {
                content.options.font.weight = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeLineHeight(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.lineHeight = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)

            }
        }

        return value
    }

    function onChangeUrl(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.url = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)

            }
        }
        return value
    }


    function onChangeHtml(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.html = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)

            }
        }
        return value
    }

    function onChangeIconSize(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.iconSize = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }


    function onChangeImageLink(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.linkTo) {
                content.options.linkTo.link = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeVideoThumbnail(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.videoLinkTo) {
                content.options.videoLinkTo.thumbnail = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeVideoType(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.videoLinkTo) {
                content.options.videoLinkTo.type = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value;
    }

    function onChangeVideoUrl(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.videoLinkTo) {
                content.options.videoLinkTo.link = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value;
    }


    function onChangeButtonText(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.buttonText = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }

        return value
    }

    function onChangeFontFamily(value: string) {
        loadFontFamily(value)
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.font) {
                content.options.font.family = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }




    function onChangeRadius(value: number) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.border) {
                content.options.border.radius = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeFullWidthMobile(value: boolean) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.fluidOnMobile = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }


    function onChangeFullWidth(value: boolean) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.fullWidth = value
                content.options.fluidOnMobile = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }




    function onChangeImage(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.image = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onchangeLayout(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.layout) {
                content.options.layout = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeLinkto(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.linkTo) {
                content.options.linkTo.type = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeButtonBackground(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.buttonBackgroundColor = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }





    function onChangeBorder(value: string, type: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.border) {
                if (type === "width") {
                    content.options.border.size = value
                }
                if (type === "style") {
                    content.options.border.style = value
                }
                if (type === "color") {
                    content.options.border.color = value
                }

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value

    }

    function onChangeWidth(value: string) {
        // for content
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.width = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value

    }




    function onChangeAltText(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.altTag = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value

    }

    function onChangeHeight(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.height = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value

    }


    function onChangeAlignment(value: string) {
        // for content
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.align = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onchangeIconSpaceing(value: number, side: number) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.iconSpacing[side] = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        // for Contents

        return value
    }






    function onchangePadding(value: string, side: number) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.padding[side] = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }

        return value
    }




    function onChangeBackgroundColor(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.backgroundColor = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }


    function onChangeMargin(value: string, side: number) {
        // for Contents
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.margin[side] = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value

    }

    function onchangeFontSize(value: string) {
        // for content
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.font) {
                content.options.font.size = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function addNewFields(fieldType: string) {

        const addField = {
            id: uuid(),
            fieldType: fieldType,
            placeholder: `Hi ${fieldType}`,
            fieldlabel: fieldType,
            fieldValue: "HI"
        }
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        content.fields.push(addField)
        contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)

    }

    // function onChangeForm(value: string, index: number, attribute: string) {
    //     const elements = contextData.emailTemplateJSON.elements
    //     const content = getContent(contextData)
    //     content.fields[index][attribute] = value
    //     updateContent(content)
    //     contextData.updateBuilderData(elements, contextData.emailTemplateJSON.proposalSettings)
    // }
    const activeElement = contextData.activeElement


    function updateContent(updatedContent: ContentPayload) {
        if (contextData && contextData.activeElement && contextData.activeElement.elementType === "content") {
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


    return (
        <div >
            {contextData && activeElement && activeElement.elementType === "content" ? (
                <>
                    {contextData.proposalTemplateJSON.elements.map((section: SectionPayload) => {
                        return section.columns.map((column: ColumnPayload) => {
                            return column.contents.map((content: ContentPayload, contentIndex) => {
                                if (content.id === activeElement.elementId) {
                                    const border = content.options.border
                                    const html = content.options.html
                                    const linkTo = content.options.linkTo
                                    const image = content.options.image
                                    const buttonText = content.options.buttonText
                                    const lineHeight = content.options.lineHeight
                                    const height = content.options.height
                                    const videoLinkTo = content.options.videoLinkTo
                                    const fullWidth = content.options.fullWidth
                                    const font = content.options.font
                                    const fluidOnMobile = content.options.fluidOnMobile
                                    const margin = content.options.margin
                                    const URL = content.options.url
                                    const buttonBackgroundColor = content.options.buttonBackgroundColor
                                    const iconSize = content.options.iconSize
                                    const align = content.options.align
                                    const altTag = content.options.altTag


                                    return (
                                        <div key={contentIndex} className="left-panel-scroll">
                                            {/* <h6 className="text-start">Content settings</h6> */}
                                            {/* {content.options.hasOwnProperty("image") && image ? (
                                                <>
                                                    <ImageLayout onchangeLayout={onchangeLayout} layout={image} />

                                                </>
                                            ) : <></>} */}

                                            <div className="accordion block-properities" id="settings">

                                                {contextData.activeElement?.formSubComponentType === "steps" ? (
                                                    <>
                                                        <FormSettings content={content} updateContent={updateContent} />

                                                    </>
                                                ) : <></>}

                                                {content.options.hasOwnProperty("align") && align ? (
                                                    <>
                                                        <Alignment alignment={align} adjustAlignment={onChangeAlignment} />

                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("padding") ? (
                                                    <>
                                                        <Padding paddingDirections={content.options.padding} onchangePadding={onchangePadding} accordionTitle={"Inner Space"} />

                                                    </>
                                                ) : <></>}

                                                {content.options.hasOwnProperty("backgroundColor") && content.options.backgroundColor ? (
                                                    <>
                                                        <BackgroundColor onChangeBackgroundColor={onChangeBackgroundColor} background={content.options.backgroundColor} label={"Background Color"} />

                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("width") ? (
                                                    <>
                                                        <Width content={content} onChangeWidth={onChangeWidth} onChangeFullWidth={onChangeFullWidth} onChangeFullWidthMobile={onChangeFullWidthMobile} />
                                                        {/*  */}
                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("height") && content.type !== "image" && content.type !== "video" ? (
                                                    <>
                                                        <Height height={height} onChangeHeight={onChangeHeight} />

                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("border") && border ? (
                                                    <Border border={border} onChangeBorder={onChangeBorder} label={"Border"} onChangeRadius={onChangeRadius} />
                                                ) : <></>}
                                                {content.options.hasOwnProperty("altTag") && altTag !== undefined ? (
                                                    <>
                                                        <AltTag alt={altTag} onChangeAltText={onChangeAltText} />
                                                    </>
                                                ) : <></>}


                                                {content.options.hasOwnProperty("html") && html !== undefined ? (
                                                    <>
                                                        <HtmlEditor onChangeHtml={onChangeHtml} html={html} />

                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("socialLinks") ? (
                                                    <>
                                                        <SocialNetworks elements={contextData.proposalTemplateJSON.elements} />

                                                    </>
                                                ) : <></>}



                                                {content.options.hasOwnProperty("font") && font ? (
                                                    <>
                                                        <Font label={"Content Font"} onChangeFontFamily={onChangeFontFamily} onchangeFontSize={onchangeFontSize} onChangeFontColor={onChangeFontColor} onChangeWeight={onChangeWeight} font={font} />

                                                    </>
                                                ) : <></>}

                                                {content.options.hasOwnProperty("image") && image !== undefined ? (
                                                    <>
                                                        <ImageUpload onChangeImage={onChangeImage} image={image} />

                                                    </>
                                                ) : <></>}

                                                {content.options.hasOwnProperty("fullWidth") && fullWidth !== undefined && content.type !== "image" && content.type !== "video" ? (
                                                    <>
                                                        <FullWidth onChangeFullWidth={onChangeFullWidth} fullWidth={fullWidth} />

                                                    </>
                                                ) : <></>}

                                                {content.options.hasOwnProperty("fluidOnMobile") && fluidOnMobile !== undefined && content.type !== "image" && content.type !== "video" ? (
                                                    <>
                                                        <FullWidthOnMobile onChangeFullWidthMobile={onChangeFullWidthMobile} fullWidthMobile={fluidOnMobile} />
                                                    </>
                                                ) : <></>}

                                                {content.options.hasOwnProperty("linkTo") ? (
                                                    <>
                                                        <ImageLinkTo onChangeImageLink={onChangeImageLink} linkto={linkTo || {}} onChangeLinkto={onChangeLinkto} />

                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("margin") ? (
                                                    <>
                                                        <Margin margin={margin || []} onChangeMargin={onChangeMargin} accordionTitle={"Outer Space"} />

                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("buttonText") ?
                                                    (
                                                        <>
                                                            <ButtonText buttonText={buttonText || ""} onChangeButtonText={onChangeButtonText} />


                                                        </>
                                                    ) : <></>}
                                                {content.options.hasOwnProperty("url") ? (
                                                    <>
                                                        <Url url={URL || ""} onChangeUrl={onChangeUrl} />

                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("buttonBackgroundColor") ? (
                                                    <>
                                                        <ButtonBackground btnBackground={buttonBackgroundColor || ""} onChangeButtonBackground={onChangeButtonBackground} />

                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("lineHeight") && (content.type === "link-button" || content.type === "button") ? (
                                                    <>
                                                        <LineHeight onChangeLineHeight={onChangeLineHeight} lineHeight={lineHeight || ""} />

                                                    </>
                                                ) : <></>}
                                                {content.options.hasOwnProperty("iconSize") ? (
                                                    <>
                                                        <Iconsize iconSize={iconSize || ""} onChangeIconSize={onChangeIconSize} />

                                                    </>
                                                ) : <></>}

                                                {content.options.hasOwnProperty("videoLinkTo") && videoLinkTo ? (
                                                    <>
                                                        <VideoSetting onChangeVideoUrl={onChangeVideoUrl} onChangeVideoType={onChangeVideoType} onChangeVideoThumbnail={onChangeVideoThumbnail} videoLinkTo={videoLinkTo} />

                                                    </>
                                                ) : <></>}
                                            </div>
                                        </div>

                                    );

                                }
                                else if (content.options.productContents?.length > 0) {

                                    const productContent = content.options.productContents.find((content: any) => {
                                        return content.id === activeElement.elementId
                                    });

                                    const proposalProduct = content.options.proposal_products.find((proposal_product: ProductProposalsContentOptionsPayload) => {
                                        return activeElement.elementId == proposal_product.id.toString()
                                    })

                                    const onChangeImage = (value: string) => {
                                        const elements = contextData.proposalTemplateJSON.elements
                                        if (productContent) {
                                            if (productContent.options) {
                                                productContent.options.image = value
                                            }
                                        }
                                        if (proposalProduct && proposalProduct.image_url != undefined)
                                            proposalProduct.image_url = value
                                        contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
                                        return value

                                    }

                                    return (
                                        <div key={contentIndex} className="left-panel-scroll">

                                            <div className="accordion block-properities" id="settings">

                                                {productContent?.options.hasOwnProperty("image") && productContent?.options.image !== undefined ? (
                                                    <>
                                                        <ImageUpload onChangeImage={onChangeImage} image={productContent.options.image} />

                                                    </>
                                                ) : <></>}
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        })
                    })}
                </>
            ) : <></>}
        </div>
    )

}

export default ContentSetting;