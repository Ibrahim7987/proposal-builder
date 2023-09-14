import { Resizable } from "react-resizable";
import { VideoProps } from "../../models/GeneralModels";
import React from "react"
import $ from 'jquery';
function Video(props: VideoProps) {
    const { contentVideo, updateContent } = props

    const videoStyles = {
        width: '100%',
        height: 'auto',
        borderRadius: `${contentVideo.options.border?.radius}px`,
        borderWidth: `${contentVideo.options.border?.size}px`,
        borderStyle: contentVideo.options.border?.style,
        borderColor: contentVideo.options.border?.color,
        // backgroundColor: `${contentVideo.options.buttonBackgroundColor}`,

    }

    // return (
    //     <div>
    //         <table width="100%">
    //             <tbody>
    //                 <tr>
    //                     <td width="100%" align={contentVideo.options.align} style={{ padding: "0" }}>
    //                         <div>
    //                             <img style={videoStyles} src={`${contentVideo.options.videoLinkTo?.thumbnail}`} alt={contentVideo.options.altTag} height={contentVideo.options.fullWidth ? "auto" : `${contentVideo.options.height}px`} width={contentVideo.options.fullWidth ? "100%" : `${contentVideo.options.width}px`} />
    //                         </div>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>

    //     </div>
    // );

    function handleResize(event: any, { node, size, handle }: any) {
        event.preventDefault()
        const newContent = contentVideo
        newContent.options.width = size.width
        newContent.options.height = size.height
        updateContent && updateContent(newContent)
    }

    function handleResizeEnd(event: any, { node, size, handle }: any) {
        console.log($("#" + contentVideo.id + "image").width())
        event.preventDefault()
        const newContent = contentVideo
        newContent.options.width = $("#" + contentVideo.id + "video").width() as number;
        newContent.options.height = $("#" + contentVideo.id + "video").height() as any;
        updateContent && updateContent(newContent)
    }

    return (
        <div style={{ textAlign: contentVideo.options.align }}>

            {contentVideo.options.fullWidth ? (
                <div>
                    <img style={videoStyles} data-layout="responsive" src={`${contentVideo.options.videoLinkTo?.thumbnail}`} alt={contentVideo.options.altTag} height={"auto"} width={contentVideo.options.fullWidth ? "100%" : `${contentVideo.options.width}px`} />
                </div>) : (
                <Resizable
                    className="max-width-100"
                    width={Number(contentVideo.options.width)}
                    height={Number(contentVideo.options.height)}
                    onResize={handleResize}
                    onResizeStop={handleResizeEnd}
                    resizeHandles={(contentVideo.options.align == 'right') ? ['sw'] : ['se']}
                >
                    <div id={contentVideo.id + "video"} style={{ width: contentVideo.options.width + "px", display: "inline-block" }}>
                        <img

                            style={videoStyles}
                            data-layout="responsive"
                            src={`${contentVideo.options.videoLinkTo?.thumbnail}`}
                            alt={contentVideo.options.altTag}
                            height={"auto"}
                        />

                    </div>

                </Resizable>
            )}


        </div>
    )
}

export default Video;