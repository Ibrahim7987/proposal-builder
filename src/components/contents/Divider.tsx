import { ContentsProps } from "../../models/GeneralModels";
import React from "react"
function Divider(props: ContentsProps) {
    const { content } = props

    // const dividerDivStyles = { padding: `${content.options.padding[0]}px ${content.options.padding[1]}px ${content.options.padding[2]}px ${content.options.padding[3]}px` }

    const dividerStyles = {
        width: `${content.options.width}%`,
        fontSize: "1px",
        borderBottom: `${content.options.border?.size}px ${content.options.border?.style} ${content.options.border?.color}`,
        marginBottom: "0px"
    }
    return (
        <div
        //  style={dividerDivStyles}
        >
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr>
                        <td width="100%" align={content.options.align}>
                            <p style={dividerStyles}></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    );
}

export default Divider;