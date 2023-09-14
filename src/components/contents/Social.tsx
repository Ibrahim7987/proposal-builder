
import { socialLinks } from "../../models/ContentModels";
import { ContentsProps } from "../../models/GeneralModels";
import React from "react"



function Social(props: ContentsProps) {
    const { content } = props;

    const socialStyles = {

        backgroundColor: `${content.options.buttonBackgroundColor}`,
        paddingTop: `${content.options.padding[0]}px`,
        paddingRight: `${content.options.padding[1]}px`,
        paddingBottom: `${content.options.padding[2]}px`,
        paddingLeft: `${content.options.padding[3]}px`,
        textDecortion: "none",
    }
    const iconStyles = {
        marginTop: `${content.options?.iconSpacing && content.options?.iconSpacing[0]}px`,
        marginRight: `${content.options?.iconSpacing && content.options?.iconSpacing[1]}px`,
        marginBottom: `${content.options?.iconSpacing && content.options?.iconSpacing[2]}px`,
        marginLeft: `${content.options?.iconSpacing && content.options?.iconSpacing[3]}px`,
    }
    return (
        // <div className="mt-1">
        <table width="100%">
            <tbody>
                <tr>
                    <td width="100%" align={content.options.align} style={socialStyles}>
                        {/* <div className="d-flex"> */}
                        {content.options.socialLinks && content.options.socialLinks.map((social: socialLinks) => {
                            return (
                                <img style={{ margin: "0 10px" }} height={content.options.iconSize} width={content.options.iconSize} src={social.icon} alt={social.alt} />
                            )
                        })}
                        {/* </div> */}

                    </td>
                </tr>
            </tbody>
        </table>
        // </div>

    );
}

export default Social;