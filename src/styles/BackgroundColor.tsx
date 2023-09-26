import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { BackgroundColorProps } from "../models/ContentModels";

function BackgroundColor(props: BackgroundColorProps) {
    const { onChangeBackgroundColor, background, label } = props
    const accordionTargetTitle = label.replace(/\s/g, '')

    return (
        <>


            <Accordion title={label} accordionJSX={() => {
                return (
                    <>
                        <div className="mb-2 text-start">
                            <div className="flex rounded-md shadow-sm color-picker mb-1 mt-2" title="Using input value">
                                <input type="text" className="block w-full rounded-l-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 " onChange={(e) => onChangeBackgroundColor(e.target.value)} value={background} />
                                <input style={{ height: "36px" }} className="relative -ml-px inline-flex  items-center gap-x-1.5 rounded-r-md p-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-blue-600" type="color" onChange={(e) => onChangeBackgroundColor(e.target.value)} value={background === "transparent" ? "#ffffff" : background} />
                            </div>
                            <div className="text-end text-sm leading-6 text-primary ">
                                <span className=" cursor-pointer " onClick={(e) => onChangeBackgroundColor("transparent")}>Make it transparent</span>
                            </div>
                        </div>
                    </>
                )
            }} />

        </>

    );
}

export default BackgroundColor;