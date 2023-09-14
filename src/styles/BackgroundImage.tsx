import Accordion from "../Accordion";
import { contentAccordion, selectImage } from "../Utils";
import { BackgroundImageProps } from "../models/ContentModels";

function BackgroundImage(props: BackgroundImageProps) {

    const { accordionTitle, backgroundImage, onFileUpload, onchangeBgImgRepeat, onChangeBackgroundSize, onChangeBackgroundColor, background, onChangeBackgroundPosition } = props

    const accordionTargetTitle = accordionTitle.replace(/\s/g, '')


    const selectRepoImage = () => {

        selectImage(['png',
            'jpg', 'jpeg', 'gif', 'bmp'], function (file: any) {
                onFileUpload(file.url)
            });


    }


    function UploadImage() {
        return (
            <>


                <Accordion title={accordionTitle} accordionJSX={() => {
                    return (
                        <>
                            <div className="mb-2 text-start">
                                <label className="block text-sm leading-6 text-gray-900">Background Color</label>

                                <div className="flex rounded-md shadow-sm color-picker mb-1 mt-2" title="Using input value">

                                    <input type="text" className="block w-full rounded-none rounded-l-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 " onChange={(e) => onChangeBackgroundColor(e.target.value)} value={background} />
                                    <input style={{ height: "36px" }} className="relative -ml-px inline-flex  items-center gap-x-1.5 rounded-r-md p-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-blue-600" type="color" onChange={(e) => onChangeBackgroundColor(e.target.value)} value={background === "transparent" ? "#ffffff" : background} />

                                </div>
                                <div className=" text-end text-sm leading-6 text-primary  ">
                                    <span className=" cursor-pointer" onClick={(e) => onChangeBackgroundColor("transparent")}>Make it transparent</span>
                                </div>
                            </div>
                            <div className="mb-2 text-start">
                                <label className="block text-sm leading-6 text-gray-900">Upload Images</label>
                                <div className="upload mt-2">
                                    {backgroundImage?.url?.length ? (
                                        <div className="current-image">
                                            <img src={backgroundImage?.url} alt="uploaded img" width="100px" height="auto" />
                                        </div>
                                    ) : <></>}
                                    <div className="upload-image">
                                        {/* <input className="form-control eb-form-control"
                                            type="file"
                                            alt="imageUpload" onChange={(e) => onFileUpload(e.target.value)} /> */}
                                        <button className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mb-2" onClick={(e) => selectRepoImage()} >Upload Image</button>
                                        <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="Enter image url" value={backgroundImage?.url} onChange={(e) => onFileUpload(e.target.value)} />
                                    </div>

                                </div>
                            </div>
                            {backgroundImage?.url?.length && backgroundImage?.url?.length > 0 ? (<>
                                {/* <div className="form-group text-start">
                                    <label className="form-label">Repeat</label>

                                    <div className="checkbox-inline mb-2 ">
                                        <label className="checkbox checkbox-primary">
                                            <input className="form-check-input me-1" type="checkbox" checked={backgroundImage?.noRepeat} id="bgRepeat" onChange={(e) => onchangeBgImgRepeat(e.target.checked)} />
                                            Repeat</label>
                                    </div>
                                </div> */}
                                <div className="mb-2 text-start">
                                    <label className="block text-sm leading-6 text-gray-900">Background size</label>
                                    <div className="mt-2">
                                        <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" value={backgroundImage?.size} onChange={(e) => onChangeBackgroundSize(e.target.value)}>
                                            <option value="cover">Cover</option>
                                            <option value="contain">Contain</option>
                                            <option value="auto">Auto</option>
                                            <option value="100% 100%">Fit</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-2 text-start">
                                    <label className="block text-sm leading-6 text-gray-900">Background Image Position
                                    </label>
                                    <div className="d-flex mt-2">
                                        <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" value={backgroundImage?.positionX} onChange={(e) => onChangeBackgroundPosition && onChangeBackgroundPosition(e.target.value, "positionX")}>
                                            <option value="left">Left</option>
                                            <option value="center">Center</option>
                                            <option value="right">Right</option>
                                        </select>
                                        <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" value={backgroundImage?.positionY} onChange={(e) => onChangeBackgroundPosition && onChangeBackgroundPosition(e.target.value, "positionY")}>
                                            <option value="top">Top</option>
                                            <option value="center">Center</option>
                                            <option value="bottom">Bottom</option>
                                        </select>
                                    </div>
                                </div>


                            </>) : <></>}
                        </>
                    )
                }} />

            </>

        )
    }

    return (
        <div>
            <div>
                {UploadImage()}
            </div>
        </div>
    );
}

export default BackgroundImage;