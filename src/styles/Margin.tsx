import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { MarginProps } from "../models/ContentModels";

function Margin(props: MarginProps) {
    const { margin, onChangeMargin, accordionTitle } = props

    return (
        <div>

            <Accordion title={accordionTitle} accordionJSX={() => {
                return (
                    <>
                        {/* <div className="form-group text-start" >
                            <div className="row">
                                <div className="col-6">
                                    <label className="ms-2 form-label">Top</label>
                                    <input className="form-control eb-form-control" type="number" min="0" value={margin && margin[0]} onChange={(e) => onChangeMargin(e.target.value, 0)} />
                                </div>
                                <div className="col-6">
                                    <label className="ms-2 form-label">Bottom</label>
                                    <input className="form-control eb-form-control" type="number" min="0" value={margin && margin[2]} onChange={(e) => onChangeMargin(e.target.value, 2)} />
                                </div>
                                <div className="col-6">
                                    <label className="ms-2 form-label">Right</label>
                                    <input className="form-control eb-form-control" type="number" min="0" value={margin && margin[1]} onChange={(e) => onChangeMargin(e.target.value, 1)} />
                                </div>
                                <div className="col-6">
                                    <label className="ms-2 form-label">Left</label>
                                    <input className="form-control eb-form-control" type="number" min="0" value={margin && margin[3]} onChange={(e) => onChangeMargin(e.target.value, 3)} />
                                </div>
                            </div>

                        </div> */}

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <label className="block text-sm leading-6 text-gray-900">Top</label>
                                <div className="mt-2">
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" type="number" min="0" value={margin && margin[0]} onChange={(e) => onChangeMargin(e.target.value, 0)} />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm leading-6 text-gray-900">Bottom</label>
                                <div className="mt-2">
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" type="number" min="0" value={margin && margin[2]} onChange={(e) => onChangeMargin(e.target.value, 2)} />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm leading-6 text-gray-900">Right</label>
                                <div className="mt-2">
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" type="number" min="0" value={margin && margin[1]} onChange={(e) => onChangeMargin(e.target.value, 1)} />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm leading-6 text-gray-900">Left</label>
                                <div className="mt-2">
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" type="number" min="0" value={margin && margin[3]} onChange={(e) => onChangeMargin(e.target.value, 3)} />
                                </div>
                            </div>

                        </div>
                    </>
                )
            }} />
        </div>
    );
}

export default Margin;