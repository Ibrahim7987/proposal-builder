import { ContentsProps } from "../../models/GeneralModels";
import React from "react"
function Html(props: ContentsProps) {
    const { content } = props
    return (
        <div>
            <div
                dangerouslySetInnerHTML={{ __html: content.options.html }}
            />
        </div>

    );
}

export default Html;