import Accordion from "../Accordion";
import { contentAccordion, selectImage } from "../Utils";
import { ImageUploadProps } from "../models/ContentModels";

function ImageUpload(props: ImageUploadProps) {
    const { image, onChangeImage } = props

    const selectRepoImage = () => {

        selectImage(['png',
            'jpg', 'jpeg', 'gif', 'bmp'], function (file: any) {
                onChangeImage(file.url)

            });


    }


    return (
        <>

            <Accordion title="Upload Image" accordionJSX={() => {
                return (
                    <>
                        <div className="text-start">
                            <div className="upload">
                                <div className="current-image">
                                    <img src={image} height="auto" width="100px" />
                                </div>
                                <div className="upload-image">
                                    {/* <input className="form-control eb-form-control"
                                        type="file"
                                        onChange={(e) => onChangeImage(e.target.value)} /> */}
                                    <button className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mb-2" onClick={(e) => selectRepoImage()} >Upload Image</button>
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={image} onChange={(e) => onChangeImage(e.target.value)} placeholder="url" />
                                </div>

                            </div>
                        </div>
                    </>
                )
            }} />
        </>
    );
}

export default ImageUpload;