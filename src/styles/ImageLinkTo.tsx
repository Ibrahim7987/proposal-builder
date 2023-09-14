import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { LinkTo } from "../models/ContentModels";

function ImageLinkTo(props: LinkTo) {
    const { linkto, onChangeLinkto, onChangeImageLink } = props

    function renderLinkType(type: string) {
        switch (type) {
            case "email":
                return <span>
                    <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

                        <path className="st0" d="M41.8,12H8.2C6.5,12,5,13.5,5,15.3v19.5C5,36.5,6.5,38,8.2,38h33.5c1.8,0,3.2-1.5,3.2-3.2V15.3  C45,13.5,43.5,12,41.8,12z M40.9,13.9L25.5,26.4L9.8,13.9H40.9z M8.2,36.1c-0.1,0-0.1,0-0.2,0l10-9.8c0.4-0.4,0.4-1,0-1.3  c-0.4-0.4-1-0.4-1.3,0l-9.9,9.7V15.3c0-0.4,0.1-0.7,0.4-0.9l17.6,14c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2L43,14.7  c0.1,0.2,0.1,0.3,0.1,0.5v19.1l-9.5-9.5c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,1,0,1.3l9.7,9.7c0,0,0.1,0.1,0.2,0.1  c-0.1,0-0.2,0.1-0.4,0.1H8.2z" />
                    </svg>
                </span>
            case "link":
                return <span>
                    <svg className="eb-icon-svg" version="1.1" id="svg753" x="0px" y="0px" viewBox="0 0 50 50" >
                        <g id="g759" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                            <g id="g761">
                                <g>
                                    <g id="g763">
                                        <g id="g769" transform="translate(129.1421,270.5635)">
                                            <g id="path771">
                                                <path d="M-118.7,207.7c-1.7,0-3.4,0.6-4.7,1.9c-1.3,1.3-1.9,2.9-1.9,4.7c0,1.8,0.7,3.4,1.9,4.7l5,5c0.3,0.3,0.7,0.3,1,0        s0.3-0.7,0-1l-5-5c-1-1-1.5-2.3-1.5-3.7c0-1.4,0.5-2.7,1.5-3.7c2-2,5.3-2,7.4,0l5,5c0.3,0.3,0.7,0.3,1,0c0.3-0.3,0.3-0.7,0-1        l-5-5C-115.3,208.3-117,207.7-118.7,207.7z" />
                                            </g>
                                        </g>
                                        <g id="g773" transform="translate(382.8579,241.4365)">
                                            <g id="path775">
                                                <path d="M-356.6,250.2c-0.2,0-0.4,0.1-0.5,0.2c-0.3,0.3-0.3,0.7,0,1l5,5c2,2,2,5.3,0,7.4c-2,2-5.4,2-7.4,0l-5-5        c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l5,5c1.3,1.3,2.9,1.9,4.7,1.9c1.8,0,3.4-0.7,4.7-1.9c2.6-2.6,2.6-6.8,0-9.4l-5-5        C-356.2,250.3-356.4,250.2-356.6,250.2z" />
                                            </g>
                                        </g>
                                        <g id="g777" transform="translate(156,156)">
                                            <g id="path779">
                                                <path d="M-143.2,330.6c-0.2,0-0.4,0.1-0.5,0.2c-0.3,0.3-0.3,0.7,0,1l11.9,11.9c0.3,0.3,0.7,0.3,1,0c0.3-0.3,0.3-0.7,0-1        l-11.9-11.9C-142.8,330.7-143,330.6-143.2,330.6z" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </span>
                break;

            default:
                break;
        }
    }
    return (
        <>


            <Accordion title="Image Link To" accordionJSX={() => {
                return (
                    <>
                        <div className="text-start">
                            <label className="block text-sm leading-6 text-gray-900">Image Link to</label>
                            <div className="mt-2">
                                <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeLinkto(e.target.value)} value={linkto.type}>
                                    <option value="none">None</option>
                                    {/* <option value="phone">Phone</option> */}
                                    <option value="email">Email</option>
                                    <option value="link">Link</option>
                                </select>
                            </div>
                            {linkto.type !== "none" ? (
                                <div className="mt-2">
                                    {/* <label className="form-label text-transform-capitalize">{linkto.type}</label> */}
                                    <div className="flex rounded-md shadow-sm mb-1">
                                        <span className="bg-slate-200 rounded-l-md p-2 text-sm fs-7 ring-1 ring-inset ring-gray-300" id="addon-wrapping">{renderLinkType(linkto.type || "")}</span>
                                        <input className="block w-full rounded-none rounded-r-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 " value={linkto.link} onChange={(e) => onChangeImageLink(e.target.value)} placeholder={linkto.type} />
                                    </div>
                                </div>
                            ) : <></>}
                        </div>
                    </>
                )
            }} />
        </>

    );
}

export default ImageLinkTo;