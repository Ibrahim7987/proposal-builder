import { contentAccordion, selectImage } from "../Utils";
import { VideoProps } from "../models/ContentModels";
import { useEffect, useState } from "react"
import { getReq } from "../Requests";
import { VIDEO_TEMPLATES_FETCH_URL } from "../Globals";
import Accordion from "../Accordion";

function VideoSettings(props: VideoProps) {

    const [videoTemplatesList, setVideoTemplatesList] = useState<any>([]);
    const [selectedVideoTemplate, setSelectedVideoTemplate] = useState<any>({})
    const { videoLinkTo, onChangeVideoType, onChangeVideoUrl, onChangeVideoThumbnail } = props

    const selectRepoImage = () => {

        selectImage(['png',
            'jpg', 'jpeg', 'gif', 'bmp'], function (file: any) {
                onChangeVideoThumbnail(file.url)
            });

    }

    useEffect(() => {
        if (videoTemplatesList && props.videoLinkTo.type && props.videoLinkTo.type === "templates") {
            fetchVideoTemplates();
        }
    }, [props.videoLinkTo.type])

    const fetchVideoTemplates = () => {
        getReq(VIDEO_TEMPLATES_FETCH_URL, {}).then((response) => {
            setVideoTemplatesList(response.data);
        })
    }

    function onChangeVideoTemplate(id: string) {
        videoTemplatesList.map((selectedVideoTemplate: any) => {
            if (selectedVideoTemplate.id == id) {
                onChangeVideoThumbnail(selectedVideoTemplate.video_thumbnail_url)
                onChangeVideoUrl(selectedVideoTemplate.video_url)
            }
        })
    }

    return (
        <>


            <Accordion title="Video" accordionJSX={() => {
                return (
                    <>
                        <div className="text-start mb-2">
                            <label className="block text-sm leading-6 text-gray-900">Video link to</label>
                            <div className="mt-2">
                                <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" value={videoLinkTo.type} onChange={(e) => onChangeVideoType(e.target.value)}>
                                    <option value="link">Link</option>
                                    <option value="templates">Templates</option>
                                </select>
                            </div>
                        </div>
                        {videoLinkTo.type === "templates" ?
                            <>
                                <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" value={videoLinkTo?.id} onChange={(e) => onChangeVideoTemplate(e.target.value)}>
                                    <option value="">Choose Template</option>
                                    {videoTemplatesList.map((videoTemplate: any) => {
                                        return (
                                            <option value={videoTemplate.id}>{videoTemplate.name}</option>
                                        )
                                    })}


                                </select>
                            </> : (
                                <><div className="text-start mb-2">
                                    <label className="block text-sm leading-6 text-gray-900">Video url</label>
                                    <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="www.example.com" value={videoLinkTo.link} onChange={(e) => onChangeVideoUrl(e.target.value)} />
                                </div>

                                    <div className="text-start mb-2">
                                        <label className="block text-sm leading-6 text-gray-900">Video Thumbnail</label>
                                        <div className="upload">
                                            <div className="current-image">
                                                <img alt="video-url" src={videoLinkTo.thumbnail} height="auto" width="100px"/>
                                            </div>
                                            <div className="upload-image">
                                                <button className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mb-2" onClick={() => selectRepoImage()} >Upload Image</button>

                                                <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={videoLinkTo.thumbnail} onChange={(e) => onChangeVideoThumbnail(e.target.value)} placeholder="url" />
                                            </div>

                                        </div>
                                    </div></>
                            )}



                    </>
                )
            }} />
        </>
    );
}

export default VideoSettings;