import React from "react";
import { useContext } from "react";
import Width from "../../styles/Width";
import { ActiveElementType, ProposalBuilderContext, ProposalBuilderContextPayload } from "../../models/GeneralModels";
import { getContent, updateButtonComponent } from "../../Utils";
import Padding from "../../styles/padding";
import Margin from "../../styles/Margin";
import Alignment from "../../styles/Alignment";
import ButtonBackground from "../../styles/ButtonBackground";
import Border from "../../styles/Border";
import FullWidth from "../../styles/FullWidth";
import Font from "../../styles/Font";
import LineHeight from "../../styles/LineHeight";

function ButtonStyles(props: any) {
    const { updateContent } = props
    const contextData = useContext<ProposalBuilderContextPayload>(ProposalBuilderContext)


    // const onChangeButton = () => {
    //     const updateActiveElement:ActiveElementType = contextData.activeElement
    //     contextData.setActiveElement({ ...updateActiveElement })
    //     if (contextData.activeElement?.formSubComponentType == "buttons") {
    //         return content.steps.map((step: any) => {
    //             return step.buttons.map((button: any) => {
    //                 if (button.id == contextData.activeElement?.formSubComponent.id) {
    //                     return button = updateActiveElement.formSubComponent
    //                 }
    //             })

    //         })
    //     }

    // }



    function onchangePadding(value: string, side: number) {
        //number
        const content = getContent(contextData)

        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.padding[side] = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    function onChangeMargin(value: string, side: number) {
        //number
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.margin[side] = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }
    // Moved to utilis
    // function updateButtonComponent(contextData, updateContent) {
    //     const content = getContent(contextData)
    //     const updateActiveElement:ActiveElementType = contextData.activeElement
    //     if (contextData.activeElement?.formSubComponentType == "buttons") {
    //         content.steps.map((step: any) => {
    //             step.fields.map((field: any) => {
    //                 if (field.id == contextData.activeElement?.formSubComponent.id) {
    //                     field = updateActiveElement.formSubComponent
    //                     updateContent(content);
    //                 }
    //             })
    //         })
    //     }
    // }

    function onChangeButtonBackground(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.buttonBackgroundColor = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }




    function onChangeAlignment(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.align = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    function onChangeButtonBorder(value: string, type: string) {

        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            if (type === "width") {
                updateActiveElement.formSubComponent.options.inputStyles.border.size = value
            }
            if (type === "style") {
                updateActiveElement.formSubComponent.options.inputStyles.border.style = value
            }
            if (type === "color") {
                updateActiveElement.formSubComponent.options.inputStyles.border.color = value
            }
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    function onChangeFullWidth(value: boolean) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.fullWidth = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    function onChangeButtonRadius(value: number) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.border.radius = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    function onChangeFontFamily(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.font.family = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    function onchangeFontSize(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.font.size = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    function onChangeFontColor(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.font.color = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    function onChangeWeight(value: string) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.font.weight = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    function onChangeLineHeight(value: String) {
        const updateActiveElement: ActiveElementType = contextData.activeElement
        if (updateActiveElement) {
            updateActiveElement.formSubComponent.options.lineHeight = value
        }
        contextData.setActiveElement({ ...updateActiveElement })
        updateButtonComponent(contextData, updateContent)
        return value
    }

    const formSubComponent = contextData.activeElement?.formSubComponent
    return (
        <>
            {formSubComponent.options?.align ? (
                <>
                    <Alignment alignment={formSubComponent.options.align} adjustAlignment={onChangeAlignment} />
                </>
            ) : <></>}
            {formSubComponent.options?.padding ? (
                <Padding paddingDirections={formSubComponent.options.padding} onchangePadding={onchangePadding} accordionTitle={"Form Button Spacing"} />
            ) : <></>}
            {formSubComponent.options?.margin ? (
                <Margin margin={formSubComponent.options.margin || []} onChangeMargin={onChangeMargin} accordionTitle={"Button Outer Space"} />
            ) : <></>}

            {formSubComponent.options?.buttonBackgroundColor ? (
                <ButtonBackground btnBackground={formSubComponent.options.buttonBackgroundColor || ""} onChangeButtonBackground={onChangeButtonBackground} />
            ) : <></>}
            {formSubComponent.options?.inputStyles?.border ? (
                <Border border={formSubComponent.options?.inputStyles?.border} onChangeBorder={onChangeButtonBorder} label={"Border"} onChangeRadius={onChangeButtonRadius} />
            ) : <></>}
            {formSubComponent.options?.fullWidth ? (
                <FullWidth onChangeFullWidth={onChangeFullWidth} fullWidth={formSubComponent.options.fullWidth} />
            ) : <></>}
            {formSubComponent.options?.font ? (
                <Font label={"Button Font"} onChangeFontFamily={onChangeFontFamily} onchangeFontSize={onchangeFontSize} onChangeFontColor={onChangeFontColor} onChangeWeight={onChangeWeight} font={formSubComponent.options.font} />
            ) : <></>}
            {formSubComponent.options?.lineHeight ? (
                <LineHeight onChangeLineHeight={onChangeLineHeight} lineHeight={formSubComponent.options.lineHeight || ""} />
            ) : <></>}

        </>
    );
}

export default ButtonStyles;