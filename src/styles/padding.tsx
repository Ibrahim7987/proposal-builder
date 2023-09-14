import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { PaddingProps } from "../models/ContentModels";
import {
    Input,
    initTE,
} from "tw-elements";

initTE({ Input });

function Padding(props: PaddingProps) {
    const { paddingDirections, onchangePadding, accordionTitle } = props

    const accordionTargetTitle = accordionTitle.replace(/\s/g, '')

    return (
        <>
            <Accordion title={accordionTitle} accordionJSX={() => {
                return (
                    <>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Top</label>
                                <div className="mt-2">
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" min="" type="number" value={paddingDirections && paddingDirections[0]} onChange={(e) => onchangePadding(e.target.value, 0)} />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Bottom</label>
                                <div className="mt-2">
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" type="number" min="0" value={paddingDirections && paddingDirections[2]} onChange={(e) => onchangePadding(e.target.value, 2)} />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Right</label>
                                <div className="mt-2">
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" type="number" min="0" value={paddingDirections && paddingDirections[1]} onChange={(e) => onchangePadding(e.target.value, 1)} />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Left</label>
                                <div className="mt-2">
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" type="number" min="0" value={paddingDirections && paddingDirections[3]} onChange={(e) => onchangePadding(e.target.value, 3)} />
                                </div>
                            </div>

                        </div>
                    </>
                )
            }} />
        </>

    );
}

export default Padding;