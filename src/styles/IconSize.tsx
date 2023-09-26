import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { IconSizeProps } from "../models/ContentModels";

function Iconsize(props: IconSizeProps) {
    const { onChangeIconSize, iconSize } = props
    return (
        <>


            <Accordion title="Icon Size" accordionJSX={() => {
                return (
                    <>
                        <div className="text-start">
                            {/* <label className="form-label">Height</label> */}
                            <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" type="number" min={0} value={iconSize} onChange={(e) => onChangeIconSize(e.target.value)} />
                        </div>
                    </>
                )
            }} />
        </>
    );
}

export default Iconsize;