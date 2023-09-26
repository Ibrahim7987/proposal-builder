import React from "react";
import { contentAccordion } from "../Utils";
import { linkToPayload } from "../models/GeneralModels";
import Accordion from "../Accordion";
function LinkTo(props: linkToPayload) {
    const { onChangeLinkColor, color, textDecoration, onChangeTextDecoration } = props
    return (
        <>

            <Accordion title="Link Settings" accordionJSX={() => {
                return (
                    <>
                        <div className="mb-2 text-start">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Link Color</label>
                            <div className="flex rounded-md shadow-sm color-picker mt-2" title="Using input value">
                                <input type="text" className="block w-full rounded-l-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={color} onChange={(e) => onChangeLinkColor(e.target.value)} />
                                <input className="relative -ml-px inline-flex  items-center gap-x-1.5 rounded-r-md p-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-blue-600" type="color" value={color} onChange={(e) => onChangeLinkColor(e.target.value)} style={{ height: "36px" }} />
                            </div>
                            {/* <input className="form-control eb-form-control" type="color" value={color} onChange={(e) => onChangeLinkColor(e.target.value)} /> */}
                        </div>
                        <div className="mb-2 text-start">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Link Decoration</label>
                            <div className="mt-2">
                                <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" value={textDecoration} onChange={(e) => onChangeTextDecoration(e.target.value)}>
                                    <option value="none">None</option>
                                    <option value="underline">Underline</option>
                                </select>
                            </div>
                            <p className="mt-1 text-slate-400 text-sm">It may or may not render as it needs to be supported by the email client too.</p>
                        </div>
                    </>
                )
            }} />

        </>

    );
}

export default LinkTo;