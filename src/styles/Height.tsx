import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { HeightProps } from "../models/ContentModels";

function Height(props: HeightProps) {
    const { height, onChangeHeight } = props
    return (
        <>

            <Accordion title="Height" accordionJSX={() => {
                return (
                    <>
                        <div className="flex rounded-md shadow-sm">
                            <input type="number" className="block w-full rounded-l-md  border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeHeight(e.target.value)} value={height} />
                            <span className=" bg-slate-200 rounded-r-md p-2 text-sm fs-7 ring-1 ring-inset ring-gray-300">px</span>
                        </div>
                    </>
                )
            }} />

        </>
    );
}

export default Height;