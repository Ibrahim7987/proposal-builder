import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { URLProps } from "../models/ContentModels";

function Url(props: URLProps) {
    const { onChangeUrl, url } = props
    return (
        <>


            <Accordion title="URL" accordionJSX={() => {
                return (
                    <>
                        <div className="text-start">
                            <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeUrl(e.target.value)} value={url} placeholder="#" />
                        </div>
                    </>
                )
            }} />
        </>

    );
}

export default Url;