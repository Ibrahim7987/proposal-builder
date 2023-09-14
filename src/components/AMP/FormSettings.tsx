import React, { useContext } from "react";
import { contentAccordion, getContent } from "../../Utils";
import { ActiveElementType, ProposalBuilderContext, ProposalBuilderContextPayload } from "../../models/GeneralModels";
import { updateStepsComponent } from "../../Utils";
import Margin from "../../styles/Margin";
import ButtonStyles from "./ButtonStyles";
import BackgroundColor from "../../styles/BackgroundColor";
import Padding from "../../styles/padding";
import Border from "../../styles/Border";
import Font from "../../styles/Font";
function FormSettings(props: any) {
    const { content, updateContent } = props
    const contextData = useContext<ProposalBuilderContextPayload>(ProposalBuilderContext);
    const formSubComponent = contextData.activeElement?.formSubComponent
    const initialChoice = {
        name: "Option name",
        value: "option-name"

    }
    const onChangeForm = (value: string, objectKey: string) => {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent[objectKey] = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
    }

    const onChangeMaxrating = (value: number) => {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.maxRating = value

            if (updateActiveElement.formSubComponent.maxRating === 10) {
                if (updateActiveElement.formSubComponent.symbols[0].type === "star") {
                    updateActiveElement.formSubComponent.symbols.push(
                        {
                            type: 'star',
                            value: "6",
                            label: updateActiveElement.formSubComponent.symbols[0].label
                        },
                        {
                            type: 'star',
                            value: "7",
                            label: updateActiveElement.formSubComponent.symbols[0].label
                        },
                        {
                            type: 'star',
                            value: "8",
                            label: updateActiveElement.formSubComponent.symbols[0].label
                        },
                        {
                            type: 'star',
                            value: "9",
                            label: updateActiveElement.formSubComponent.symbols[0].label
                        },
                        {
                            type: 'star',
                            value: "10",
                            label: updateActiveElement.formSubComponent.symbols[0].label
                        },)
                }
                if (updateActiveElement.formSubComponent.symbols[0].type === "score") {
                    updateActiveElement.formSubComponent.symbols.push(
                        {
                            type: 'score',
                            value: "6",
                            label: "6",
                        },
                        {
                            type: 'score',
                            value: "7",
                            label: "7",
                        },
                        {
                            type: 'score',
                            value: "8",
                            label: "8",
                        },
                        {
                            type: 'score',
                            value: "9",
                            label: "9",
                        },
                        {
                            type: 'score',
                            value: "10",
                            label: "10"
                        },)
                }

            }
            if (updateActiveElement.formSubComponent.maxRating === 5) {
                updateActiveElement.formSubComponent.symbols.splice(5, 5)
            }
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
    }




    function onChangeChoices(value: string, key: string, index: number) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.choices[index][key] = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
    }


    function addChoices() {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.choices.push(initialChoice)
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
    }

    function deleteChoice(choiceIndex: number) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.choices.splice(choiceIndex, 1)
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
    }


    function onChangeMargin(value: string, side: number) {
        // for Contents
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.margin[side] = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
        return value
    }

    function onChangeRequired(value: boolean) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.required = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
        return value
    }

    function onChangeInputStylesBackgroundColor(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.inputStyles.backgroundColor = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
    }


    function onchangeInputPadding(value: string, side: number) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.inputStyles.padding[side] = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }

        return value
    }

    function onchangeInputMargin(value: string, side: number) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options) {
                content.options.inputStyles.margin[side] = value

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }

        return value
    }


    function onChangeInputRadius(value: number) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.border) {
                content.options.inputStyles.border.radius = value
                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value
    }



    function onchangelabelFontSize(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            content.options.labelStyles.font.size = value
        }
        contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
        return value
    }
    function onChangelabelFontColor(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            content.options.labelStyles.font.color = value
        }
        contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
        return value
    }

    function onchangeFontSize(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            content.options.inputStyles.font.size = value
        }
        contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
        return value
    }

    function onchangeLabelFontWeight(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            content.options.labelStyles.font.weight = value
        }
        contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
        return value
    }
    function onChangeInputFontColor(value: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            content.options.inputStyles.font.color = value
        }
        contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
        return value
    }

    function onChangeRatingBackgroundColor(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        updateActiveElement.formSubComponent.options.backgroundColor = value
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
        return value
    }



    function onChangeSelectedBackgroundColor(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        updateActiveElement.formSubComponent.options.selectedState.background.color = value
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
        return value
    }

    function onchangeRatingFontSize(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        updateActiveElement.formSubComponent.options.font.size = value
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
        return value
    }

    function onChangeRatingFontColor(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        updateActiveElement.formSubComponent.options.font.color = value
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
        return value
    }

    function onChangeSelectedFontColor(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        updateActiveElement.formSubComponent.options.selectedState.font.color = value
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
        return value
    }


    function onChangeInputRatingRadius(value: number) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        updateActiveElement.formSubComponent.options.border.radius = value
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
        return value
    }


    function onChangeInputRatingBorder(value: string, type: string) {

        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            if (type === "width") {
                updateActiveElement.formSubComponent.options.border.size = value
            }
            if (type === "style") {
                updateActiveElement.formSubComponent.options.border.style = value
            }
            if (type === "color") {
                updateActiveElement.formSubComponent.options.border.color = value
            }
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateStepsComponent(contextData, updateContent)
        return value
    }


    function onChangeInputBorder(value: string, type: string) {
        const elements = contextData.proposalTemplateJSON.elements
        const content = getContent(contextData)
        if (content) {
            if (content.options && content.options.inputStyles.border) {
                if (type === "width") {
                    content.options.inputStyles.border.size = value
                }
                if (type === "style") {
                    content.options.inputStyles.border.style = value
                }
                if (type === "color") {
                    content.options.inputStyles.border.color = value
                }

                contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
            }
        }
        return value

    }

    return (
        <div className="accordion block-properities" id="settings">
            <>
                {formSubComponent.hasOwnProperty("fieldValue") ? <>
                    {contentAccordion("Field Settings", () => {
                        return (
                            <>
                                {formSubComponent.hasOwnProperty("helpText") ? (
                                    <div className="form-group">
                                        <label className="form-label">Help Text</label>
                                        <input placeholder="Help Text" className="form-control eb-form-control" onChange={(e) => onChangeForm(e.target.value, "helpText")} value={formSubComponent.helpText} />
                                    </div>
                                ) : <></>}
                                {formSubComponent.hasOwnProperty("label") ? (
                                    <div className="form-group">
                                        <label className="form-label">Label</label>
                                        <input placeholder="Label" className="form-control eb-form-control" onChange={(e) => onChangeForm(e.target.value, "label")} value={formSubComponent.label} />
                                    </div>
                                ) : <></>}
                                {formSubComponent.hasOwnProperty("fieldValue") ? (
                                    <div className="form-group">
                                        <label className="form-label">Field Value</label>
                                        <input placeholder="Field Value" className="form-control eb-form-control" onChange={(e) => onChangeForm(e.target.value, "fieldValue")} value={formSubComponent.fieldValue} />
                                    </div>
                                ) : <></>}
                                {formSubComponent.hasOwnProperty("name") ? (
                                    <div className="form-group">
                                        <label className="form-label">Field Name</label>
                                        <input placeholder="Field Name" className="form-control eb-form-control" onChange={(e) => onChangeForm(e.target.value, "name")} value={formSubComponent.name} />
                                    </div>
                                ) : <></>}
                                {formSubComponent.hasOwnProperty("placeholder") ? (
                                    <div className="form-group">
                                        <label className="form-label">Placeholder</label>
                                        <input placeholder="Field Name" className="form-control eb-form-control" onChange={(e) => onChangeForm(e.target.value, "placeholder")} value={formSubComponent.placeholder} />
                                    </div>
                                ) : <></>}
                                {formSubComponent.hasOwnProperty("errorText") ? (
                                    <div className="form-group">
                                        <label className="form-label">Error Text</label>
                                        <input placeholder="Field Name" className="form-control eb-form-control" onChange={(e) => onChangeForm(e.target.value, "errorText")} value={formSubComponent.errorText} />
                                    </div>
                                ) : <></>}
                                {formSubComponent.hasOwnProperty("maxRating") ? (
                                    <div className="form-group">
                                        <label className="form-label">Max Rating</label>
                                        <select value={formSubComponent.maxRating} onChange={(e) => onChangeMaxrating(Number(e.target.value))} className="form-select eb-form-control" aria-label="Default select example">
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                ) : <></>}
                            </>
                        )
                    }, "fieldAccordion", "fieldcollapsetarget")}
                </> : <></>}



                {formSubComponent?.choices?.length > 0 ? <>
                    {contentAccordion("Edit options", () => {

                        return (
                            <>
                                <button className="btn btn-primary mb-2" onClick={() => addChoices()}>
                                    Add option
                                </button>
                                {formSubComponent?.choices?.map((choice: any, choiceIndex: number) => {
                                    return (
                                        <div className="position-relative">
                                            {contentAccordion("option", () => {
                                                return (
                                                    <div>
                                                        <div className="form-group">
                                                            <label className="form-label">Option Name</label>
                                                            <input className="form-control eb-form-control" onChange={(e) => onChangeChoices(e.target.value, "name", choiceIndex)} value={choice.name} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="form-label">Option Value</label>
                                                            <input className="form-control eb-form-control" onChange={(e) => onChangeChoices(e.target.value, "value", choiceIndex)} value={choice.value} />
                                                        </div>
                                                        <div className="absolute-top-right">
                                                            <span onClick={() => deleteChoice(choiceIndex)}>
                                                                <svg height="16" width="16" data-v-32a717ef="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><g> <path className="st0" d="M15,45c-0.8-0.2-1.5-0.5-2-1c-0.8-0.8-1-1.7-1.1-2.7c-0.3-4-0.7-8.1-1-12.1c-0.3-3.3-0.5-6.6-0.8-9.9 c-0.1-0.8-0.1-1.6-0.2-2.4c0-0.1-0.1-0.3-0.3-0.4c-1.4-0.6-2.3-2-2.1-3.4c0.1-1.6,1.2-2.9,2.7-3.2c0.3-0.1,0.7-0.1,1-0.1 c1.7,0,3.4,0,5.2,0c0.1,0,0.3,0,0.5,0c0-0.4,0-0.7,0-1c0-2.1,1.5-3.6,3.7-3.6c3,0,6.1,0,9.1,0c2.1,0,3.6,1.5,3.7,3.6 c0,0.3,0,0.7,0,1c0.2,0,0.3,0,0.5,0c1.8,0,3.5,0,5.3,0c1.7,0,3,1,3.5,2.6s-0.3,3.4-1.9,4.1c-0.3,0.1-0.4,0.2-0.4,0.5 c-0.2,2.7-0.4,5.4-0.7,8.2c-0.2,2.7-0.4,5.4-0.7,8.1c-0.2,2.7-0.5,5.3-0.6,8c-0.1,1.3-0.4,2.5-1.6,3.2c-0.5,0.3-1,0.4-1.5,0.6 C28.3,45,21.7,45,15,45z M12.2,16.7c0.2,2.3,0.4,4.5,0.5,6.7c0.2,3,0.5,6,0.7,8.9c0.2,3,0.5,5.9,0.7,8.9c0.1,1,0.5,1.3,1.5,1.3 c6.2,0,12.4,0,18.5,0c0.1,0,0.2,0,0.4,0c0.6,0,1-0.4,1.1-1c0-0.2,0.1-0.4,0.1-0.7c0.1-1.7,0.3-3.4,0.4-5.1c0.2-2.7,0.5-5.4,0.7-8.1 c0.2-2.4,0.4-4.7,0.6-7.1c0.1-1.3,0.2-2.6,0.3-3.9C29.3,16.7,20.7,16.7,12.2,16.7z M25,14.4c4.6,0,9.1,0,13.7,0c0.2,0,0.3,0,0.5,0 c0.8-0.1,1.3-0.9,0.9-1.7c-0.3-0.5-0.7-0.7-1.3-0.7c-9.2,0-18.4,0-27.7,0c-0.1,0-0.2,0-0.4,0c-0.6,0.1-1.1,0.6-1.1,1.2 c0,0.6,0.5,1.1,1.1,1.2c0.2,0,0.3,0,0.5,0C15.9,14.4,20.4,14.4,25,14.4z M30.9,9.7c0-0.4,0-0.7,0-1c0-0.9-0.5-1.3-1.3-1.3 c-1.1,0-2.2,0-3.3,0c-1.9,0-3.8,0-5.8,0c-0.7,0-1.2,0.4-1.3,1c-0.1,0.4,0,0.9,0,1.4C23.1,9.7,26.9,9.7,30.9,9.7z"></path> </g></svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            }, `accordion-${choiceIndex}`, `${choice.name}-${choiceIndex}`)}

                                        </div>
                                    )
                                })}
                            </>
                        )
                    }, "mainOptionAccordion", "mainOptioncollapsetarget")}
                </> :
                    <></>
                }
            </>
            {formSubComponent.hasOwnProperty("required") ? <>
                {contentAccordion("Required", () => {
                    return (
                        <>
                            <div className="form-check form-switch custom-switch">
                                <label className="form-label">Required</label>
                                <input checked={formSubComponent.required} onChange={(e) => onChangeRequired(e.target.checked)} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            </div>
                        </>
                    )
                }, "requiredAccordion", "requiredcollapsetarget")}
            </> : <></>}


            {formSubComponent.options.hasOwnProperty("margin") && (formSubComponent.subType == "checkbox" || formSubComponent.subType == "radio") ? (
                <Margin margin={formSubComponent.options.margin || []} onChangeMargin={onChangeMargin} accordionTitle={"Field Outer Space"} />
            ) : <></>}

            {content.hasOwnProperty("steps") && contextData.activeElement?.formSubComponentType == "button" ? (
                <>
                    <ButtonStyles updatedContent={updateContent} content={content} />

                </>
            ) : <></>}

            {formSubComponent.type === "input" && content.options.inputStyles.backgroundColor ? (
                <>
                    <BackgroundColor onChangeBackgroundColor={onChangeInputStylesBackgroundColor} background={content.options.inputStyles.backgroundColor} label={"Input Background Color"} />
                </>
            ) : <></>}
            {formSubComponent.type === "input" && content.options.inputStyles.padding ? (
                <>
                    <Padding paddingDirections={content.options.inputStyles.padding} onchangePadding={onchangeInputPadding} accordionTitle={"Input Padding"} />
                </>
            ) : <></>}

            {formSubComponent.type === "input" && content.options.inputStyles.margin ? (
                <>
                    <Margin margin={content.options.inputStyles.margin || []} onChangeMargin={onchangeInputMargin} accordionTitle={"Field Outer Space"} />

                </>
            ) : <></>}
            {formSubComponent.type === "input" && content.options.inputStyles.border ? (
                <>
                    <Border border={content.options.inputStyles.border} onChangeBorder={onChangeInputBorder} label={"Input Border"} onChangeRadius={onChangeInputRadius} />

                </>
            ) : <></>}



            {formSubComponent.type == "rating" && formSubComponent.options.border ? (
                <>
                    <Border border={formSubComponent.options.border} onChangeBorder={onChangeInputRatingBorder} label={"Rating Border"} onChangeRadius={onChangeInputRatingRadius} />
                </>
            ) : <></>}
            {formSubComponent.type == "rating" && formSubComponent.symbols[0].type === "score" ? (
                <>
                    <div className="form-group text-start">
                        {/* <label className="form-label">Selected Background Color</label> */}
                        <BackgroundColor onChangeBackgroundColor={onChangeSelectedBackgroundColor} background={formSubComponent.options.selectedState.background.color} label={"selected Background Color"} />
                    </div>
                    <div className="form-group text-start">
                        {/* <label className="form-label">Selected Background Color</label> */}
                        <Font label={"Selected Color"} onChangeFontColor={onChangeSelectedFontColor} font={formSubComponent.options.selectedState.font} />
                    </div>
                    {/* <Border border={formSubComponent.options.border} onChangeBorder={onChangeInputRatingBorder} label={"Rating Border"} onChangeRadius={onChangeInputRatingRadius} /> */}
                </>
            ) : <></>}
            {formSubComponent.type === "rating" && formSubComponent.options.font ? (
                <Font label={"Rating Font"} onchangeFontSize={onchangeRatingFontSize} onChangeFontColor={onChangeRatingFontColor} font={formSubComponent.options.font} />
            ) : <></>}
            {formSubComponent.type === "rating" && formSubComponent.options.backgroundColor ? (
                <BackgroundColor onChangeBackgroundColor={onChangeRatingBackgroundColor} background={formSubComponent.options.backgroundColor} label={"Rating Background Color"} />
            ) : <></>}
            {formSubComponent.type === "input" && content.options.inputStyles.font ? (
                <>
                    <Font label={"Input Font"} onchangeFontSize={onchangeFontSize} onChangeFontColor={onChangeInputFontColor} font={content.options.inputStyles.font} />
                </>
            ) : <></>}
            {content.options.hasOwnProperty("labelStyles") && content.options.labelStyles.font ? (
                <>
                    <Font label={"Label Font"} onChangeWeight={onchangeLabelFontWeight} onchangeFontSize={onchangelabelFontSize} onChangeFontColor={onChangelabelFontColor} font={content.options.labelStyles.font} />
                </>
            ) : <></>}

        </div>
    );
}

export default FormSettings;