import { ContentPayload } from "../../models/ContentModels";
import React from "react"
interface SpaceProps {
    content: ContentPayload
}

function Space(props: SpaceProps) {
    const { content } = props
    return (
        <div style={{ height: `${content.options.height}px`, background: `${content.options.backgroundColor}` }}>

        </div>
    );
}

export default Space;
