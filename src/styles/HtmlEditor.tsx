import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { HtmlEditorProps } from "../models/ContentModels";

function HtmlEditor(props: HtmlEditorProps) {
    const { onChangeHtml, html } = props
    return (
        <>
            <Accordion title="HTML Code Here" accordionJSX={() => {
                return (
                    <>
                        {/* <div className="text-start">Html code here</div> */}
                        <textarea
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            style={{
                                height: "540px",
                                width: "100%",
                                resize: "vertical",
                                flex: "0 0 auto",
                                fontSize: "13px",
                                color: "rgb(85, 85, 85)",
                                padding: "7px 10px",
                                lineHeight: 1.5,
                                border: "1px solid rgb(234, 234, 234)",
                                background: "#f5f7fe"
                            }} onChange={(e) => onChangeHtml(e.target.value)} value={html} />

                    </>
                )
            }} />
        </>

    );
}

export default HtmlEditor;