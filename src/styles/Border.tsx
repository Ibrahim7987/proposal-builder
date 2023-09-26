import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { borderProps } from "../models/GeneralModels";

function Border(props: borderProps) {

    const { onChangeBorder, border, onchangeBorderSide, label, onChangeRadius } = props

    const accordionTargetTitle = label.replace(/\s/g, '')


    return (
        <>

            <Accordion title={label} accordionJSX={() => {
                return (
                    <>
                        <div className="flex">
                            <div className="text-start w-full pe-2" >
                                <label
                                    className="block mb-2 text-sm text-gray-900 dark:text-white"
                                >
                                    Size
                                </label>
                                <input
                                    type="range"
                                    value={border && border.size} min="0" max="20" onChange={(e) => onChangeBorder(e.target.value, "width")}
                                    className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                />
                            </div>
                            <div className="flex align-items-center text-sm mt-2">{border.size}px</div>
                        </div>
                        <div className="text-start mb-2" >
                            <label className="block text-sm leading-6 text-gray-900">Style</label>
                            <div className="mt-2">
                                <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeBorder(e.target.value, "style")} value={border?.style}>
                                    <option value="solid">Solid</option>
                                    <option value="dashed">Dashed</option>
                                    <option value="dotted">Dotted</option>
                                </select>
                            </div>
                        </div>



                        <div className="text-start mb-2">
                            <label className="block text-sm leading-6 text-gray-900">Color</label>
                            <div className="flex rounded-md shadow-sm color-picker mt-2" title="Using input value">
                                <input type="text" className="block w-full rounded-l-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeBorder(e.target.value, "color")} value={border?.color} />
                                <input style={{ height: "36px" }} className="relative -ml-px inline-flex  items-center gap-x-1.5 rounded-r-md p-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-blue-600" type="color" onChange={(e) => onChangeBorder(e.target.value, "color")} value={border?.color} />
                            </div>
                            <div className=" text-end text-sm leading-6 text-primary  ">
                                <span className="cursor-pointer" onClick={(e) => onChangeBorder("transparent", "color")}>Make it transparent</span>
                            </div>
                        </div>

                        {border?.radius !== undefined ? (
                            <div className="flex">
                                <div className="text-start w-full pe-2" >
                                    <label className="block text-sm leading-6 text-gray-900">Radius</label>
                                    <input className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" min="0" onChange={(e) => onChangeRadius && onChangeRadius(Number(e.target.value))} value={border.radius} />
                                </div>
                                <div className="flex align-items-center text-sm mt-2">{border.radius}px</div>
                            </div>
                        ) : <></>}


                        {border?.applyTo ? (
                            <div className="text-start">
                                <label className="block text-sm leading-6 text-gray-900">Side</label>
                                <div className="grid grid-cols-2 mt-2">
                                    {/* <div className="col-6">
                                        <div className="checkbox-inline mb-2 ">
                                            <label className="checkbox checkbox-primary">
                                                <input className="form-check-input me-1" type="checkbox" checked={border?.applyTo.includes("top")} id="top" onChange={(e) => onchangeBorderSide ? onchangeBorderSide("top") : {}} />
                                                Top</label>
                                        </div>
                                    </div> */}
                                    <div className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                                checked={border?.applyTo.includes("top")} id="top" onChange={(e) => onchangeBorderSide ? onchangeBorderSide("top") : {}}
                                            />
                                        </div>
                                        <div className="ml-2 text-sm leading-6">
                                            <label htmlFor="top" className="text-gray-900">
                                                Top
                                            </label>
                                        </div>
                                    </div>
                                    {/* <div className="col-6">
                                        <div className="checkbox-inline mb-2 ">
                                            <label className="checkbox checkbox-primary">
                                                <input className="form-check-input me-1" type="checkbox" checked={border?.applyTo.includes("right")} id="right" onChange={(e) => onchangeBorderSide ? onchangeBorderSide("right") : {}} />
                                                Right</label>
                                        </div>
                                    </div> */}
                                    <div className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                                checked={border?.applyTo.includes("right")} id="right" onChange={(e) => onchangeBorderSide ? onchangeBorderSide("right") : {}}
                                            />
                                        </div>
                                        <div className="ml-2 text-sm leading-6">
                                            <label htmlFor="right" className="text-gray-900">
                                                Right
                                            </label>
                                        </div>
                                    </div>
                                    {/* <div className="col-6">
                                        <div className="checkbox-inline mb-2 ">
                                            <label className="checkbox checkbox-primary">
                                                <input className="form-check-input me-1" type="checkbox"
                                                />
                                                Bottom</label>
                                        </div>
                                    </div> */}
                                    <div className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                                checked={border?.applyTo.includes("bottom")} id="bottom" onChange={(e) => onchangeBorderSide ? onchangeBorderSide("bottom") : {}}
                                            />
                                        </div>
                                        <div className="ml-2 text-sm leading-6">
                                            <label htmlFor="bottom" className="text-gray-900">
                                                Bottom
                                            </label>
                                        </div>
                                    </div>
                                    {/* <div className="col-6">
                                        <div className="checkbox-inline mb-2 ">
                                            <label className="checkbox checkbox-primary">
                                                <input className="form-check-input me-1" type="checkbox" checked={border?.applyTo.includes("left")} id="left" onChange={(e) => onchangeBorderSide ? onchangeBorderSide("left") : {}} />
                                                Left
                                            </label>
                                        </div>
                                    </div> */}
                                    <div className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                                checked={border?.applyTo.includes("left")} id="left" onChange={(e) => onchangeBorderSide ? onchangeBorderSide("left") : {}}
                                            />
                                        </div>
                                        <div className="ml-2 text-sm leading-6">
                                            <label htmlFor="left" className="text-gray-900">
                                                Left
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <></>}
                    </>
                )
            }} />
        </>

    );
}

export default Border;