
import { Editor } from '@tinymce/tinymce-react';
import React from "react"
import { TextProps } from '../../models/GeneralModels';
import TinyMCEEditor from '../../styles/TinyMCEEditor';
import { checkIsCustomFontFamily, checkIsGoogleFontFamily } from '../../Utils';
function Rss(props: TextProps) {

    const { content, updateContent } = props

    const onChangeText = (value: string) => {

        content.options.text = value;
        updateContent(content);
        return value
    };
    const fontFamily = (checkIsGoogleFontFamily(content.options.font?.family || "") || checkIsCustomFontFamily(content.options.font?.family || "")) ? `${content.options.font?.family}` : `${content.options.font?.family + ', sans-serif'}`
    const Styles = {
        fontFamily: content.options.font?.family === 'inherit' ? "inherit" : fontFamily
    }
    return (
        <div style={Styles}>
            <TinyMCEEditor onChangeEditor={onChangeText} content={content} />

            {/* {renderEditor(onChangeText, content.options.text)}
             */}
            {/* <Editor
                apiKey='6clpn5thf1tjtmb9b4g8nl4gvftncb4ld4m0zhi4f4ndhrtu'
                onEditorChange={(e) => onChangeText(e)}
                inline={true}
                value={content.options.text}
                init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                        'image',
                        "image code",
                        'emoticons',
                        'textcolor colorpicker',
                        'link',
                        'lists advlist autolink  link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                        'images_upload_handler',
                    ],
                    toolbar1: 'bold italic underline | styles fontsize lineheight| fontsizeselect forecolor backcolor  ',
                    toolbar2: '| alignleft aligncenter alignright alignjustify |  bullist numlist |link  image emoticons |',
                    advlist_number_styles: 'lower-alpha lower-roman upper-alpha upper-roman',
                    lineheight_formats: "1 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2.0 2.2 2.4 2.6 2.8 3 4 5",
                    fontsize_formats:
                        "8px 9px 10px 11px 12px 13px 14px 15px 16px 18px 20px 22px 24px 26px 28px 30px 36px 42px 60px 80px 100px",
                    file_picker_callback: (cb, value, meta) => {
                        var input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept',
                            'image/*');
                        input.onchange = function () {
                        };
                        input.click();
                    },
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            /> */}
        </div>
    )
}

export default Rss;