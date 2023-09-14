import { Editor } from '@tinymce/tinymce-react';
import { ActiveElementType, ProposalBuilderContext, ProposalBuilderContextPayload, TextProps } from '../../models/GeneralModels';
import React, { useContext } from "react"
import { checkIsCustomFontFamily, checkIsGoogleFontFamily, updateFormEditingComponent } from '../../Utils';
//import { PARENT } from '../../Globals';
import TinyMCEEditor from '../../styles/TinyMCEEditor';
function Text(props: TextProps) {
    const { content, updateContent } = props
    const contextData = useContext<ProposalBuilderContextPayload>(ProposalBuilderContext)
    const onChangeText = (value: string) => {
        content.options.text = value;
        updateContent(content);
        if (contextData.proposalTemplateJSON.AMPMode) {
            const updateActiveElement: ActiveElementType = contextData.activeElement
            if (updateActiveElement) {
                updateActiveElement.formSubComponent = content
            }
            contextData.setActiveElement({ ...updateActiveElement })
            updateFormEditingComponent(contextData)
        }

        return value

    };

    const Styles = {
        fontFamily: (checkIsGoogleFontFamily(content.options.font?.family || "") || checkIsCustomFontFamily(content.options.font?.family || "")) ? `${content.options.font?.family}` : `${content.options.font?.family}, sans-serif`
    }

    return (
        <div style={Styles} >
            <TinyMCEEditor onChangeEditor={onChangeText} content={content} />
            {/* <Editor
                apiKey='6clpn5thf1tjtmb9b4g8nl4gvftncb4ld4m0zhi4f4ndhrtu'
                onEditorChange={(e) => onChangeText(e)}
                inline={true}
                // onInit={(evt, editor) => editorRef.current = editor}
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
                        'lists advlist autolink link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                        'images_upload_handler',
                        'lists',
                    ],
                    toolbar1: 'bold italic underline | styles fontsize lineheight| fontsizeselect forecolor backcolor  ',
                    toolbar2: '| alignleft aligncenter alignright alignjustify |  bullist numlist |link  image emoticons | personalization',
                    // advlist_bullet_styles: 'square',
                    advlist_number_styles: 'lower-alpha lower-roman upper-alpha upper-roman',
                    lineheight_formats: "1 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2.0 2.2 2.4 2.6 2.8 3 4 5",
                    fontsize_formats:
                        "8px 9px 10px 11px 12px 13px 14px 15px 16px 18px 20px 22px 24px 26px 28px 30px 36px 42px 60px 80px 100px",
                    paste_as_text: true,
                    paste_preprocess: function (plugin: any, args: any) {

                        console.log("paste content", args.content);

                        let brExp = /<br\s*\/?>/i;
                        let lines = args.content.split(brExp);

                        let newContent = "";
                        jQuery.each(lines, function (index, str) {
                            newContent += "<div>" + str + "<br></div>"
                        });
                        args.content = newContent;

                    },
                    paste_postprocess: function (plugin: any, args: any) {
                        console.log(args.node);
                        // args.node.setAttribute('id', '42');
                    },
                    convert_urls: false,
                    // document_base_url : documentBaseURL,
                    // link_assume_external_targets: 'http',
                    file_picker_types: 'image',
                    paste_filter_drop: false,
                    relative_urls: false,
                    file_picker_callback: function (cb,
                        value, meta) {

                        selectImage(['png',
                            'jpg', 'jpeg', 'gif', 'bmp'], function (file: any) {

                                cb(file.file_url, {
                                    title: file.name
                                });
                            });


                    },
                    setup: function (editor) {

                        editor.ui.registry.addMenuButton('personalization',
                            {
                                text: 'Personalize',
                                fetch: function (callback) {
                                    getItemsList(callback);
                                }
                            });

                        function getItemsList(callback: Function) {

                            if (!PARENT.EngageBay_TinyMCE_Editor_Util)
                                return callback([]);

                            PARENT.EngageBay_TinyMCE_Editor_Util.getMergeFieldsAsList('', function (listq: any) {

                                let menuq = [];
                                for (let i = 0; i < listq.length; i++) {
                                    menuq.push(mergeField(listq[i]));
                                }
                                callback(menuq);

                                function mergeField(fieldData: any) {

                                    let menu_item: any = {};

                                    if (fieldData && fieldData.menu) {

                                        let listSubmenu = fieldData.menu;
                                        if (!listSubmenu || listSubmenu.length == 0)
                                            return;

                                        let submenuList: any = [];
                                        for (let j = 0; j < listSubmenu.length; j++) {
                                            console.log("listSubmenu[j]", listSubmenu[j]);
                                            if (listSubmenu[j]) {
                                                submenuList.push({
                                                    'type': 'menuitem',
                                                    'text': listSubmenu[j].text,
                                                    'onAction': function () {
                                                        editor.insertContent(listSubmenu[j].value);
                                                    }
                                                });

                                            }

                                        }

                                        menu_item["type"] = 'nestedmenuitem';
                                        menu_item["text"] = fieldData.text;
                                        menu_item["getSubmenuItems"] = function () {
                                            // console.log('list[i].text', list[i].text);
                                            return submenuList;
                                        }

                                    } else {
                                        menu_item["type"] = 'menuitem';
                                        menu_item["text"] = fieldData.text;
                                        menu_item["onAction"] = function () {
                                            editor.insertContent(fieldData.value);
                                        };
                                    }

                                    return menu_item;

                                }

                            });
                        }

                    }
                    // content_style: `.mce-content-body {font - family:${content.options.font?.family};}'`
                }}
            /> */}

            {/* <input value={content.options.text} onChange={(e) => onChangeText(e)} onClick={() => editActiveElement(false, "contents", content.id, true)} /> */}
        </div>


    );
}

export default Text;