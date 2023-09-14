import BackgroundColor from "../styles/BackgroundColor";
import Border from "../styles/Border";
import Padding from "../styles/padding";
import BackgroundImage from "../styles/BackgroundImage";
import { useContext, useState } from "react";
import { ColumnPayload, ProposalBuilderContext, ProposalBuilderContextPayload, SectionPayload } from "../models/GeneralModels";
import VerticalAlign from "../styles/VerticalAlign";
import ContentSetting from "./ContentSetting";
import { getSection } from "../Utils";
import Margin from "../styles/Margin";
import ContentWidth from "../styles/ContentWidth";
import FormEditComponent from "./FormEditComponent";
import {
    Collapse,
    initTE,
} from "tw-elements";
initTE({ Collapse });
function ContentStyleEditor(props: any) {
    const { setShowBodySetting, showBodySetting } = props
    const contextData = useContext<ProposalBuilderContextPayload>(ProposalBuilderContext)
    const [activeColumnIndex, setActiveColumnIndex] = useState<number>(0)


    function onchangePadding(value: string, side: number) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.padding[side] = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeMargin(value: string, side: number) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.margin[side] = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeColumnBackground(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)

        if (section) {
            if (section.options) {
                section.columns[activeColumnIndex].options.backgroundColor = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }

    function onChangeColumnInnerBackground(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)

        if (section) {
            if (section.options) {
                section.columns[activeColumnIndex].options.innerBackgroundColor = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }





    function onChangeOuterBackgroundPosition(value: string, key: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.sectionBackground[key] = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeOuterBackgroundColor(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.sectionBackground.color = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }


    function onChangeBackgroundPosition(value: string, key: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.background[key] = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onChangeSectionBackgroundColor(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.background.color = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }



    function onFileUpload(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.background.url = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }

    function onSectionFileUpload(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.sectionBackground.url = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }

    function onChangeSectionBackgroundSize(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.sectionBackground.size = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }

    function onchangeSectionBgImgRepeat(value: boolean) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.sectionBackground.noRepeat = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }


    function onchangeBgImgRepeat(value: boolean) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.background.noRepeat = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }

    function onChangeBackgroundSize(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.options.background.size = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }




    function onChangeColumnVerticalAlignment(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.columns[activeColumnIndex].options.verticalAlign = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }



    function onchangeSectionBorder(value: string, type: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                if (type === "width") {
                    section.options.border.size = value
                }
                if (type === "style") {
                    section.options.border.style = value
                }
                if (type === "color") {
                    section.options.border.color = value
                }
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }

    function onchangeBorderSide(side: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                if (section.options.border.applyTo.indexOf(side) === -1) {
                    section.options.border.applyTo.push(side)
                }
                else {
                    const removingIndex = section.options.border.applyTo.indexOf(side)
                    section.options.border.applyTo.splice(removingIndex, 1)
                }
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return side
    }

    function onchangeColumnBorder(value: string, type: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                if (type === "width") {
                    section.columns[activeColumnIndex].options.border.size = value
                }
                if (type === "style") {
                    section.columns[activeColumnIndex].options.border.style = value
                }
                if (type === "color") {
                    section.columns[activeColumnIndex].options.border.color = value
                }
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }


    function onchangeColumnOuterBorderSide(side: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                if (section.columns[activeColumnIndex].options.border.applyTo.indexOf(side) === -1) {
                    section.columns[activeColumnIndex].options.border.applyTo.push(side)
                }
                else {
                    const removingIndex = section.columns[activeColumnIndex].options.border.applyTo.indexOf(side)
                    section.columns[activeColumnIndex].options.border.applyTo.splice(removingIndex, 1)
                }
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return side
    }


    function onchangeInnerBorderSide(side: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                if (section.columns[activeColumnIndex].options.innerBorder.applyTo.indexOf(side) === -1) {
                    section.columns[activeColumnIndex].options.innerBorder.applyTo.push(side)
                }
                else {
                    const removingIndex = section.columns[activeColumnIndex].options.innerBorder.applyTo.indexOf(side)
                    section.columns[activeColumnIndex].options.innerBorder.applyTo.splice(removingIndex, 1)
                }
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return side
    }

    function onchangeColumnInnerBorder(value: string, type: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                if (type === "width") {
                    section.columns[activeColumnIndex].options.innerBorder.size = value
                }
                if (type === "style") {
                    section.columns[activeColumnIndex].options.innerBorder.style = value
                }
                if (type === "color") {
                    section.columns[activeColumnIndex].options.innerBorder.color = value
                }
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }



    function onchangeColumnPadding(value: string, side: number) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        if (section) {
            if (section.options) {
                section.columns[activeColumnIndex].options.padding[side] = value
            }
        }
        contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
        return value
    }

    function onChangeColumnWidth(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const section = getSection(contextData)
        const remainingWidth = 100 - Number(value)
        if (section) {
            const remainingWidthToEachColumns = remainingWidth / (section.columns.length - 1)

            section.columns.map((column: any, index: number) => {
                if (activeColumnIndex !== index) {

                    return column.columnWidthPercentage = remainingWidthToEachColumns
                }
                else {
                    section.columns[activeColumnIndex].columnWidthPercentage = value
                }
            })
            // if (section.options) {
            //     section.columns.map()

            // }
        }
        contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
        return value
    }



    function renderSectionEditingComponents() {
        return (
            <>
                {contextData.proposalTemplateJSON.elements.map((elementData: SectionPayload) => {
                    if (elementData.id === contextData.activeElement?.elementId) {

                        return (
                            <div className="right-panel-scroll">
                                {/* <h6 className="text-start">Section settings</h6> */}
                                <div className="accordion block-properities" id="settings">
                                    {elementData.options.hasOwnProperty("border") ? (
                                        <>
                                            <Border border={elementData.options.border} onChangeBorder={onchangeSectionBorder} onchangeBorderSide={onchangeBorderSide} label={"Border"} />
                                            {/*  */}
                                        </>
                                    ) : <></>}

                                    {elementData.options.hasOwnProperty("padding") ? (
                                        <>
                                            <Padding paddingDirections={elementData.options.padding} onchangePadding={onchangePadding} accordionTitle={"Section Inner Padding"} />
                                        </>
                                    ) : <></>}
                                    {elementData.options.hasOwnProperty("margin") ? (
                                        <>
                                            <Margin margin={elementData.options.margin || []} onChangeMargin={onChangeMargin} accordionTitle={"Section Outer Space"} />
                                            {/*  */}
                                        </>
                                    ) : <></>}

                                    {elementData.options.hasOwnProperty("background") ? (
                                        <>
                                            <BackgroundImage accordionTitle={"Inner Section Background"} onChangeBackgroundColor={onChangeSectionBackgroundColor} onChangeBackgroundPosition={onChangeBackgroundPosition} background={elementData.options.background.color} onFileUpload={onFileUpload} onchangeBgImgRepeat={onchangeBgImgRepeat} onChangeBackgroundSize={onChangeBackgroundSize} backgroundImage={elementData.options.background} />
                                        </>
                                    ) : <></>}
                                    {elementData.options.hasOwnProperty("sectionBackground") ? (
                                        <>
                                            <div>
                                                {/* <h6 className="text-start form-label-title">Section background</h6> */}
                                                <BackgroundImage accordionTitle={"Outer Section Background"} onChangeBackgroundColor={onChangeOuterBackgroundColor} onChangeBackgroundPosition={onChangeOuterBackgroundPosition} background={elementData.options.sectionBackground.color} onFileUpload={onSectionFileUpload} onchangeBgImgRepeat={onchangeSectionBgImgRepeat} onChangeBackgroundSize={onChangeSectionBackgroundSize} backgroundImage={elementData.options.sectionBackground} />
                                                {/*  */}
                                            </div>
                                        </>
                                    ) : <></>}


                                    <div className="column-sidebar-container">
                                        <label className="form-label-title text-start pt-3 mb-2 ps-3">
                                            Column properities
                                        </label>
                                        <div>
                                            {elementData.columns.length <= 1 ? (
                                                <>
                                                    {elementData.columns.map((column: ColumnPayload, columnIndex: number) => {
                                                        return (
                                                            <div className="tab-pane show active" id={`column-${columnIndex}`} role="tabpanel" aria-labelledby="nav-home-tab">
                                                                {activeColumnIndex === columnIndex || elementData.columns.length === 1 ? (
                                                                    <>
                                                                        <BackgroundColor onChangeBackgroundColor={onChangeColumnBackground} background={column.options.backgroundColor} label={"Outer Background Color"} />

                                                                        <BackgroundColor onChangeBackgroundColor={onChangeColumnInnerBackground} background={column.options.innerBackgroundColor} label={"Inner Background Color"} />


                                                                        <Border border={column.options.border} onchangeBorderSide={onchangeColumnOuterBorderSide} onChangeBorder={onchangeColumnBorder} label={"Outer Border"} />

                                                                        <Border border={column.options.innerBorder} onchangeBorderSide={onchangeInnerBorderSide} onChangeBorder={onchangeColumnInnerBorder} label={"Inner Border"} />

                                                                        <VerticalAlign alignment={column.options.verticalAlign} adjustAlignment={onChangeColumnVerticalAlignment} />

                                                                        <Padding paddingDirections={column.options.padding} onchangePadding={onchangeColumnPadding} accordionTitle={"Column Padding"} />
                                                                        {column.columnWidthPercentage === 100 ? <></> : (
                                                                            <ContentWidth onChangeColumnWidth={onChangeColumnWidth} columnWidth={column.columnWidthPercentage} />
                                                                        )}
                                                                    </>
                                                                ) : <></>}

                                                            </div>
                                                        )
                                                    })}
                                                </>) : <nav>
                                                <ul className="nav nav-tabs sidebar-navs m-0 columns-nav border-bottom mb-3 px-3 rounded-0" id="nav-tab" role="tablist">
                                                    {elementData.columns.map((column: ColumnPayload, columnIndex: number) => {
                                                        return (
                                                            <li className="nav-item">
                                                                <button onClick={() => setActiveColumnIndex(columnIndex)} className={`${activeColumnIndex === columnIndex ? "active" : ""} nav-link`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target={`column-${columnIndex}`} type="button" role="tab" aria-controls="nav-home" aria-selected="true">Col-{columnIndex + 1}</button>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                                <div className="tab-content mb" id="nav-tabContent">
                                                    {elementData.columns.map((column: ColumnPayload, columnIndex: number) => {
                                                        return (
                                                            <div className="tab-pane show active" id={`column-${columnIndex}`} role="tabpanel" aria-labelledby="nav-home-tab">
                                                                {activeColumnIndex === columnIndex ? (
                                                                    <>
                                                                        <BackgroundColor onChangeBackgroundColor={onChangeColumnBackground} background={column.options.backgroundColor} label={"Outer Background Color"} />

                                                                        <BackgroundColor onChangeBackgroundColor={onChangeColumnInnerBackground} background={column.options.innerBackgroundColor} label={"Inner Background Color"} />


                                                                        <Border border={column.options.border} onchangeBorderSide={onchangeColumnOuterBorderSide} onChangeBorder={onchangeColumnBorder} label={"Outer Border"} />

                                                                        <Border border={column.options.innerBorder} onchangeBorderSide={onchangeInnerBorderSide} onChangeBorder={onchangeColumnInnerBorder} label={"Inner Border"} />

                                                                        <VerticalAlign alignment={column.options.verticalAlign} adjustAlignment={onChangeColumnVerticalAlignment} />

                                                                        <Padding paddingDirections={column.options.padding} onchangePadding={onchangeColumnPadding} accordionTitle={"Column Padding"} />
                                                                        {column.columnWidthPercentage === 100 ? <></> : (
                                                                            <ContentWidth onChangeColumnWidth={onChangeColumnWidth} columnWidth={column.columnWidthPercentage} />
                                                                        )}
                                                                    </>
                                                                ) : <></>}

                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </nav>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </>
        )
    }


    function HandleEditingComponents() {
        switch (contextData.activeElement?.elementType) {
            case "section":
                return <>
                    {renderSectionEditingComponents()}
                </>
            case "content":
                return <ContentSetting />
            case "formContents":
                return <FormEditComponent />
            // default:
            //     return ;
        }
    }


    return (
        <>
            {contextData.activeElement.elementEditingModule ?
                <>
                    {HandleEditingComponents()}
                </>
                : <><div className="m-4 mt-5 pt-4 text-center text-sm text-blue-600">Hey, looks like you haven’t selected any element. Please select an element to proceed further.</div></>}
        </>
    )











}

export default ContentStyleEditor;

