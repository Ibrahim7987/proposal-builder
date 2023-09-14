import { Editor } from "@tinymce/tinymce-react";
import { TextProps } from "../../models/GeneralModels";
import React from "react"
import TinyMCEEditor from "../../styles/TinyMCEEditor";
import { checkIsCustomFontFamily, checkIsGoogleFontFamily } from "../../Utils";
function Signature(props: TextProps) {
    const { content, updateContent } = props

    const onChangeText = (value: string) => {

        content.options.text = value;
        updateContent(content);
        return value;
    };
    const fontFamily = (checkIsGoogleFontFamily(content.options.font?.family || "") || checkIsCustomFontFamily(content.options.font?.family || "")) ? `${content.options.font?.family}` : `${content.options.font?.family + ', sans-serif'}`
    const Styles = {
        fontFamily: content.options.font?.family === 'inherit' ? "inherit" : fontFamily
    }
    return (
        <div style={Styles}>
            <TinyMCEEditor onChangeEditor={onChangeText} content={content} />

            {/* {renderEditor(onChangeText, content.options.text)} */}
        </div>

    );
}

export default Signature;