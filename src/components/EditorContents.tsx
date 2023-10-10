import { Draggable } from "react-beautiful-dnd";
import { EditorContentprops } from "../models/GeneralModels";
import React from "react"
function EditorContents(props: EditorContentprops) {
    const { content, contentIndex, rowIndex, columnIndex, editActiveElement, contextData, deleteContent, cloneContent, handleContentType, addEditProducts } = props
    const contentStyles: any = {
        // zIndex: 1,
        backgroundColor: `${content.options?.backgroundColor}`,
        paddingTop: content.options?.padding && content.type !== "link-button" && content.type !== "button" ? `${content.options?.padding && content.options?.padding[0]}px` : "",
        paddingBottom: content.options?.padding && content.type !== "link-button" && content.type !== "button" ? `${content.options?.padding && content.options?.padding[2]}px` : "",
        paddingRight: content.options?.padding && content.type !== "link-button" && content.type !== "button" ? `${content.options?.padding && content.options?.padding[1]}px` : "",
        paddingLeft: content.options?.padding && content.type !== "link-button" && content.type !== "button" ? `${content.options?.padding && content.options?.padding[3]}px` : "",
        // marginTop: content.type == "social" ? "2px" : ""
    }




    return (
        <Draggable key={`row-${rowIndex}-column-${columnIndex}-${content.type}-${contentIndex}`} draggableId={`row-${rowIndex}-column-${columnIndex}-${content.type}-${contentIndex}`} index={contentIndex}>
            {(provided, snapshot) => {
                return (
                    <div
                        // {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="content-section"

                    >
                        {/* <div style={{
                            backgroundColor: `${content.options?.backgroundColor}`,

                        }}> */}
                        <div className={`${contextData.onHover?.onContentHover ? "content-draggable" : ""}  ${contextData.activeElement.elementId === content.id ? "selected-content active" : ""} content-container-wrapper`}
                            onMouseEnter={() => contextData.setOnHover({ ...contextData.onHover, onSectionHover: false, onContentHover: true })}
                            onMouseLeave={() => contextData.setOnHover({ ...contextData.onHover, onSectionHover: true, onContentHover: false })}
                            onClick={(e) => content.type === "forms" ? console.log("") : editActiveElement(e, "content", content.id, true)}
                            style={contentStyles}
                        >
                            <>{handleContentType(content)}</>
                            <div className="content-action-icons">

                                <span className="copy-icon  cursor-pointer powertip" title="Duplicate" onClick={() => cloneContent(rowIndex, columnIndex, contentIndex)}>
                                    <svg height="16" width="16" data-v-32a717ef="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><g> <path className="st0" d="M10.6,45c-0.8-0.2-1.5-0.4-2.2-1c-1.1-0.9-1.8-2.1-1.8-3.6c0-7.5,0-15.1,0-22.6c0-2.4,2-4.4,4.4-4.5 c0.4,0,0.7,0,1.1,0c0.6,0,1.1,0.5,1.2,1.1c0.1,0.7-0.3,1.2-1,1.3c-0.3,0.1-0.7,0-1,0c-1.3,0-2.2,0.9-2.2,2.2c0,7.4,0,14.9,0,22.3 c0,1.3,0.9,2.2,2.2,2.2c6.9,0,13.7,0,20.6,0c1.3,0,2.2-0.9,2.2-2.2c0-0.3,0-0.5,0-0.8c0-0.6,0.5-1.1,1.2-1.2c0.6,0,1.2,0.4,1.3,1 c0.2,1.7-0.2,3.3-1.5,4.5c-0.6,0.6-1.4,0.9-2.2,1.1c-0.1,0-0.1,0-0.2,0.1C25.3,45,18,45,10.6,45z"></path> <path className="st0" d="M43.3,19.9c0,3.4-0.1,6.8,0,10.2c0.1,2.7-2.1,4.9-4.9,4.9c-5.7-0.1-11.4,0-17.1,0c-2.4,0-4.3-1.6-4.7-4 c0-0.2,0-0.5,0-0.7c0-6.9,0-13.7,0-20.6c0-2.7,2-4.7,4.7-4.7c5.7,0,11.5,0,17.2,0c2.7,0,4.7,2,4.7,4.7C43.3,13,43.3,16.5,43.3,19.9 z M40.8,19.9c0-3.4,0-6.8,0-10.2c0-1.5-1.1-2.4-2.3-2.4c-5.7,0-11.3,0-17,0c-1.5,0-2.3,0.8-2.3,2.3c0,6.8,0,13.5,0,20.3 c0,1.5,0.8,2.3,2.3,2.3c5.7,0,11.3,0,17,0c1.3,0,2.4-0.9,2.3-2.4C40.8,26.8,40.8,23.4,40.8,19.9z"></path> </g></svg>                                </span>
                                <span className="delete-icon  cursor-pointer powertip" title="Delete" onClick={() => deleteContent(rowIndex, columnIndex, contentIndex)}>
                                    <svg height="16" width="16" data-v-32a717ef="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><g> <path className="st0" d="M15,45c-0.8-0.2-1.5-0.5-2-1c-0.8-0.8-1-1.7-1.1-2.7c-0.3-4-0.7-8.1-1-12.1c-0.3-3.3-0.5-6.6-0.8-9.9 c-0.1-0.8-0.1-1.6-0.2-2.4c0-0.1-0.1-0.3-0.3-0.4c-1.4-0.6-2.3-2-2.1-3.4c0.1-1.6,1.2-2.9,2.7-3.2c0.3-0.1,0.7-0.1,1-0.1 c1.7,0,3.4,0,5.2,0c0.1,0,0.3,0,0.5,0c0-0.4,0-0.7,0-1c0-2.1,1.5-3.6,3.7-3.6c3,0,6.1,0,9.1,0c2.1,0,3.6,1.5,3.7,3.6 c0,0.3,0,0.7,0,1c0.2,0,0.3,0,0.5,0c1.8,0,3.5,0,5.3,0c1.7,0,3,1,3.5,2.6s-0.3,3.4-1.9,4.1c-0.3,0.1-0.4,0.2-0.4,0.5 c-0.2,2.7-0.4,5.4-0.7,8.2c-0.2,2.7-0.4,5.4-0.7,8.1c-0.2,2.7-0.5,5.3-0.6,8c-0.1,1.3-0.4,2.5-1.6,3.2c-0.5,0.3-1,0.4-1.5,0.6 C28.3,45,21.7,45,15,45z M12.2,16.7c0.2,2.3,0.4,4.5,0.5,6.7c0.2,3,0.5,6,0.7,8.9c0.2,3,0.5,5.9,0.7,8.9c0.1,1,0.5,1.3,1.5,1.3 c6.2,0,12.4,0,18.5,0c0.1,0,0.2,0,0.4,0c0.6,0,1-0.4,1.1-1c0-0.2,0.1-0.4,0.1-0.7c0.1-1.7,0.3-3.4,0.4-5.1c0.2-2.7,0.5-5.4,0.7-8.1 c0.2-2.4,0.4-4.7,0.6-7.1c0.1-1.3,0.2-2.6,0.3-3.9C29.3,16.7,20.7,16.7,12.2,16.7z M25,14.4c4.6,0,9.1,0,13.7,0c0.2,0,0.3,0,0.5,0 c0.8-0.1,1.3-0.9,0.9-1.7c-0.3-0.5-0.7-0.7-1.3-0.7c-9.2,0-18.4,0-27.7,0c-0.1,0-0.2,0-0.4,0c-0.6,0.1-1.1,0.6-1.1,1.2 c0,0.6,0.5,1.1,1.1,1.2c0.2,0,0.3,0,0.5,0C15.9,14.4,20.4,14.4,25,14.4z M30.9,9.7c0-0.4,0-0.7,0-1c0-0.9-0.5-1.3-1.3-1.3 c-1.1,0-2.2,0-3.3,0c-1.9,0-3.8,0-5.8,0c-0.7,0-1.2,0.4-1.3,1c-0.1,0.4,0,0.9,0,1.4C23.1,9.7,26.9,9.7,30.9,9.7z"></path> </g></svg>
                                </span>
                                <span className="edit-icon cursor-pointer powertip" title="Edit"
                                    onClick={(e) => content.type === "forms" ? console.log("") : editActiveElement(e, "content", content.id, true)}
                                >
                                    <svg className="eb-icon-svg" height={16} width={16} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">
                                        <g>
                                            <path className="st0" d="M44,21.8c-0.5,0-1,0.4-1,1v15.6c0,2.6-2.1,4.8-4.8,4.8H11.7c-2.6,0-4.8-2.1-4.8-4.8V11.7C6.9,9,9,6.9,11.7,6.9   h15.9c0.5,0,1-0.4,1-1c0-0.5-0.4-1-1-1H11.7C8,5,5,8,5,11.7v26.6C5,42,8,45,11.7,45h26.6c3.7,0,6.7-3,6.7-6.7V22.8   C45,22.2,44.6,21.8,44,21.8z" />
                                            <path className="st0" d="M24.6,19.9l-1.3,5.8c-0.1,0.3,0,0.7,0.3,0.9c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.1,0,0.2,0l5.8-1.3   c0.2,0,0.3-0.1,0.5-0.3L43.8,12c1.6-1.6,1.6-4.2,0-5.8c-1.5-1.5-4.2-1.5-5.8,0L24.8,19.4C24.7,19.5,24.6,19.7,24.6,19.9z    M26.3,20.6l13-13c0.8-0.8,2.3-0.8,3.1,0c0.8,0.8,0.8,2.2,0,3.1l-13,13l-4,0.9L26.3,20.6z" />
                                        </g>
                                    </svg>
                                </span>
                                {content.type == "product_list" ?
                                    <span className="product-icon cursor-pointer powertip" title="Edit Products"
                                        onClick={(e) => addEditProducts(null, null)}
                                    >
                                        <svg className="eb-icon-svg" height={16} width={16} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">
                                            <g>
                                                <path className="st0" d="M904.2,610.4h-8.7h-13.2h-8.7c-2.6,0-4.7,2.1-4.7,4.7v30.6c0,2.6,2.1,4.7,4.7,4.7h30.6c2.6,0,4.7-2.1,4.7-4.7 v-30.6C908.9,612.5,906.7,610.4,904.2,610.4z M894.5,612.3V626l-5.1-3.7c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2,0-0.4,0.1-0.6,0.2l-5.1,3.7 v-13.7H894.5z M907,645.7c0,1.5-1.3,2.8-2.8,2.8h-30.6c-1.5,0-2.8-1.3-2.8-2.8v-30.6c0-1.5,1.3-2.8,2.8-2.8h7.8v15.6 c0,0.4,0.2,0.7,0.5,0.8c0.3,0.2,0.7,0.1,1-0.1l6-4.4l6,4.4c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.3,0,0.4-0.1c0.3-0.2,0.5-0.5,0.5-0.8 v-15.6h7.8c1.5,0,2.8,1.3,2.8,2.8V645.7z"></path>
                                                <path className="st0" d="M40.5,4.8h-8.7H18.6H9.9c-2.6,0-4.7,2.1-4.7,4.7v30.6c0,2.6,2.1,4.7,4.7,4.7h30.6c2.6,0,4.7-2.1,4.7-4.7V9.5 C45.2,6.9,43.1,4.8,40.5,4.8z M30.8,6.7v13.7l-5.1-3.7c-0.2-0.1-0.4-0.2-0.6-0.2s-0.4,0.1-0.6,0.2l-5.1,3.7V6.7H30.8z M43.3,40.1 c0,1.5-1.3,2.8-2.8,2.8H9.9c-1.5,0-2.8-1.3-2.8-2.8V9.5c0-1.5,1.3-2.8,2.8-2.8h7.8v15.6c0,0.4,0.2,0.7,0.5,0.8 c0.3,0.2,0.7,0.1,1-0.1l6-4.4l6,4.4c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.3,0,0.4-0.1c0.3-0.2,0.5-0.5,0.5-0.8V6.7h7.8 c1.5,0,2.8,1.3,2.8,2.8V40.1z"></path>
                                            </g>
                                        </svg>
                                    </span> : null}
                                <span {...provided.dragHandleProps} className="drag-icon  cursor-pointer powertip" title="Drag">
                                    <svg height="16" width="16" data-v-32a717ef="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><g> <g> <path className="st0" d="M24.8,42.9c-0.5,0-1-0.4-1-1V5.7c0-0.5,0.4-1,1-1s1,0.4,1,1V42C25.7,42.5,25.3,42.9,24.8,42.9z"></path> </g> <g> <path className="st0" d="M24.8,44.7c-0.2,0-0.5-0.1-0.7-0.3l-6.2-6.2c-0.4-0.4-0.4-1,0-1.3c0.4-0.4,1-0.4,1.3,0l5.5,5.5l5.5-5.5 c0.4-0.4,1-0.4,1.3,0c0.4,0.4,0.4,1,0,1.3l-6.2,6.2C25.3,44.6,25,44.7,24.8,44.7z"></path> </g> <g> <path className="st0" d="M18.6,12.8c-0.2,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.3L24.1,5c0.4-0.4,1-0.4,1.3,0l6.2,6.2 c0.4,0.4,0.4,1,0,1.3c-0.4,0.4-1,0.4-1.3,0L24.8,7l-5.5,5.5C19.1,12.7,18.8,12.8,18.6,12.8z"></path> </g> </g> <g> <g> <path className="st0" d="M43.8,25.7H7.5c-0.5,0-1-0.4-1-1s0.4-1,1-1h36.3c0.5,0,1,0.4,1,1S44.3,25.7,43.8,25.7z"></path> </g> <g> <path className="st0" d="M11.9,31.9c-0.2,0-0.5-0.1-0.7-0.3l-6.2-6.2c-0.4-0.4-0.4-1,0-1.3l6.2-6.2c0.4-0.4,1-0.4,1.3,0s0.4,1,0,1.3 l-5.5,5.5l5.5,5.5c0.4,0.4,0.4,1,0,1.3C12.4,31.8,12.2,31.9,11.9,31.9z"></path> </g> <g> <path className="st0" d="M37.6,31.9c-0.2,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.3l5.5-5.5L37,19.2c-0.4-0.4-0.4-1,0-1.3 c0.4-0.4,1-0.4,1.3,0l6.2,6.2c0.4,0.4,0.4,1,0,1.3l-6.2,6.2C38.1,31.8,37.9,31.9,37.6,31.9z"></path> </g> </g></svg>
                                </span>

                            </div>

                            {/* </div> */}

                        </div>
                        {/* </div> */}

                    </div>
                )
            }}
        </Draggable >
    );
}

export default EditorContents;