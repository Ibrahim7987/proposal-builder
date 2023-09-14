import { ContentsProps } from "../../models/GeneralModels";
import React from "react"
function Button(props: ContentsProps) {
    const { content } = props

    const buttonStyles = {
        width: content.options.fullWidth ? "100%" : "",
        fontFamily: content.options.font?.family,
        fontSize: `${content.options.font?.size}px`,
        fontWeight: content.options.font?.weight,
        color: content.options.font?.color,
        borderRadius: `${content.options.border?.radius}px`,
        borderWidth: `${content.options.border?.size}px`,
        borderStyle: content.options.border?.style,
        borderColor: content.options.border?.color,
        backgroundColor: `${content.options.buttonBackgroundColor}`,
        paddingTop: `${content.options.padding[0]}px`,
        paddingRight: `${content.options.padding[1]}px`,
        paddingBottom: `${content.options.padding[2]}px`,
        paddingLeft: `${content.options.padding[3]}px`,
        lineHeight: `${content.options.lineHeight}px`,
    }
    return (
        <table width="100%">
            <tbody>
                <tr>
                    <td width="100%" align={content.options.align}>
                        <div style={{
                            marginTop: `${content.options.margin[0]}px`,
                            marginRight: `${content.options.margin[1]}px`,
                            marginBottom: `${content.options.margin[2]}px`,
                            marginLeft: `${content.options.margin[3]}px`,
                        }}>
                            <button className={content.options.fluidOnMobile ? "btn-mobile-fullwidth" : ""} style={buttonStyles}> {content.options.buttonText}</button>

                        </div>
                    </td>
                </tr>
            </tbody>
        </table >
    );
}

export default Button;