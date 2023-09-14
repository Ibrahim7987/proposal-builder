import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { LineHeightProps } from "../models/ContentModels";

function LineHeight(props: LineHeightProps) {
    const { lineHeight, onChangeLineHeight } = props
    return (
        <>

            <Accordion title="Line Height" accordionJSX={() => {
                return (
                    <>
                        <div className="text-start">
                            {/* <label className="form-label">Line height</label> */}
                            <input type="number" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={lineHeight} onChange={(e) => onChangeLineHeight(e.target.value)} />
                        </div>
                    </>
                )
            }} />
        </>

    );
}

export default LineHeight;