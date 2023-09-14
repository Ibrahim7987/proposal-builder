import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { ButtonBackgroundProps } from "../models/GeneralModels";

function ButtonBackground(props: ButtonBackgroundProps) {
    const { onChangeButtonBackground, btnBackground } = props;
    return (

        <>

            <Accordion title="Button Background Color" accordionJSX={() => {
                return (
                    <>
                        <div className="mb-2 text-start">
                            <div className="flex rounded-md shadow-sm color-picker mb-1 mt-2" title="Using input value">
                                <input type="text" className="block w-full rounded-none rounded-l-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 " onChange={(e) => onChangeButtonBackground(e.target.value)} value={btnBackground} />
                                <input style={{ height: "36px" }} className="relative -ml-px inline-flex  items-center gap-x-1.5 rounded-r-md p-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-blue-600" type="color" onChange={(e) => onChangeButtonBackground(e.target.value)} value={btnBackground === "transparent" ? "#ffffff" : btnBackground} />
                            </div>
                            <div className="text-end text-sm leading-6 text-primary ">
                                <span className=" cursor-pointer " onClick={(e) => onChangeButtonBackground("transparent")}>Make it transparent</span>
                            </div>
                        </div>

                    </>
                )
            }} />
        </>

    );
}
export default ButtonBackground;