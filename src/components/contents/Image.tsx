import { ContentsProps } from "../../models/GeneralModels";
import React from "react"
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';
import $ from 'jquery';

// import './ResizableComponent.css';


function Image(props: ContentsProps) {
    const { content, updateContent } = props




    const imageStyles = {
        borderRadius: `${content.options.border?.radius}px`,
        borderWidth: `${content.options.border?.size}px`,
        borderStyle: content.options.border?.style,
        borderColor: content.options.border?.color,
        width: '100%',
        height: 'auto',
    }



    function handleResizeEnd(event: any, { node, size, handle }: any) {
        console.log($("#" + content.id + "image").width())
        event.preventDefault()
        const newContent = content
        newContent.options.width = $("#" + content.id + "image").width() as number;
        newContent.options.height = $("#" + content.id + "image").height() as any;
        updateContent && updateContent(newContent)
    }

    function handleResize(event: any, { node, size, handle }: any) {
        event.preventDefault()
        const newContent = content
        newContent.options.width = size.width
        newContent.options.height = size.height
        updateContent && updateContent(newContent)
    }

    return (
        <div style={{ textAlign: content.options.align }}>
            {content.options.fullWidth ? (
                <img style={imageStyles} data-layout="responsive" src={`${content.options.image}`} alt={content.options.altTag} height={"auto"} width={content.options.fullWidth ? "100%" : `${content.options.width}px`} />
            ) : (
                <>
                    <Resizable
                        className="max-width-100"
                        width={Number(content.options.width)}
                        height={Number(content.options.height)}
                        onResize={handleResize}
                        onResizeStop={handleResizeEnd}
                        // draggableOpts={{...}}
                        // maxConstraints={[300, Infinity]}
                        resizeHandles={(content.options.align == 'right') ? ['sw'] : ['se']}
                    >
                        <div id={content.id + "image"} style={{ width: content.options.width + "px", display: "inline-block" }}>
                            <img

                                style={imageStyles}
                                data-layout="responsive"
                                src={`${content.options.image}`}
                                alt={content.options.altTag}
                                height={"auto"}
                            />

                        </div>

                    </Resizable>
                </>)}

        </div>
    )

    // return (
    //     <div
    //         className="h-100"
    //         style={{
    //             width: `${content.options.width}px`,
    //             border: '1px solid #7cafff',
    //             resize: 'both',
    //             overflow: "auto",
    //             maxWidth: "100%",
    //             height: "auto !important",
    //             position: "relative",
    //             margin: content.options.align == "center" ? "auto" : content.options.align == "left" ? "0" : "0 0 0 auto"
    //         }}
    //         onMouseDown={(e) => handleMouseDown(e)}
    //     >
    //         <div style={{
    //             width: '100%',
    //             height: '100%',
    //             position: 'relative',
    //         }}>
    //             <img style={imageStyles} data-layout="responsive" src={`${content.options.image}`} alt={content.options.altTag} height={"auto"} width={content.options.fullWidth ? "100%" : `${content.options.width}px`} />
    //         </div>


    //     </div>
    // );

}

export default Image;