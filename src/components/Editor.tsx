import React, { useContext } from 'react'
import { Draggable, Droppable, DroppableProvided } from 'react-beautiful-dnd'
import { ColumnPayload, EditorArray, ProposalBuilderContext, ProposalBuilderContextPayload, SectionPayload } from '../models/GeneralModels';
import EditorContents from './EditorContents';
import { ContentPayload } from '../models/ContentModels';
import Divider from './contents/Divider';
import Text from './contents/Text';
import Rss from './contents/Rss';
import Signature from './contents/Signature';
import Html from './contents/Html';
import Button from "./contents/Button";
import Video from './contents/Video';
import Image from './contents/Image';
import Space from './contents/Space';
import Social from './contents/Social';
import Product from './contents/Product';
import uuid from 'react-uuid';
import { preProcessSections } from '../preProcessor';
import { saveBlock } from '../Utils';

const Editor = (props: EditorArray) => {

    const contextData = useContext<ProposalBuilderContextPayload>(ProposalBuilderContext);
    const { snapshot, placeholderProps, previewDevicetype, setShowBodySetting, removeTransform, getDraggedElement, setShowRightSettings, proposalProducts, totalAmount } = props


    function editActiveElement(event: any, type: string, id: string, isEditingModule: boolean, formSubComponent?: any, formSubComponentType?: string) {

        setShowBodySetting(true)
        event?.stopPropagation()
        const activeElementObj = {
            elementType: type,
            elementId: id,
            elementEditingModule: isEditingModule,
            formSubComponent: formSubComponent,
            formSubComponentType: formSubComponentType
        }
        setShowRightSettings("contents")
        contextData.setActiveElement({ ...activeElementObj })
        return event;
    }

    function deleteContent(rowIndex: number, columnIndex: number, contentIndex: number) {

        const confirmationModalObj = {
            showModal: true,
            modalMessage: "Are you sure ?",
            btnText: "Delete",
            callBack: () => {
                const activeElementObj = {
                    elementType: contextData.activeElement.elementType,
                    elementId: contextData.activeElement.elementId,
                    elementEditingModule: false,
                    formSubComponent: contextData.activeElement.formSubComponent,
                    formSubComponentType: contextData.activeElement.formSubComponentType
                }

                const tempElement = contextData.proposalTemplateJSON.elements
                tempElement[rowIndex].columns[columnIndex].contents.splice(contentIndex, 1)
                contextData.updateBuilderData(tempElement, contextData.proposalTemplateJSON.proposalSettings)
                contextData.setActiveElement({ ...activeElementObj })
                contextData.setConfirmationModal({ ...contextData.confirmationModal, showModal: false })


            },
            modalTitle: "Delete Content"
        }
        contextData.setConfirmationModal({ ...confirmationModalObj })
        return contextData.proposalTemplateJSON.elements
    }

    function handleContentType(content: ContentPayload) {
        switch (content.type) {
            case "divider":
                return <Divider content={content} />;
            case "product_list":
                return <Product proposalProducts={proposalProducts} totalAmount={totalAmount} content={content} updateContent={updateContent} editActiveElement={editActiveElement} contextData={contextData} />;
            case "text":
                return <Text content={content} updateContent={updateContent} />;
            case "rss":
                return <Rss content={content} updateContent={updateContent} />;
            case "signature":
                return <Signature content={content} updateContent={updateContent} />;
            case "html":
                return <Html content={content} />;
            case "button":
                return <Button content={content} />;
            case "link-button":
                return <Button content={content} />;
            case "image":
                return <Image content={content} updateContent={updateContent} editActiveElement={editActiveElement} />;
            case "video":
                return <Video contentVideo={content} updateContent={updateContent} />;
            case "space":
                return <Space content={content} />;
            case "social":
                return <Social content={content} />;
            // case "forms":
            //     return <Forms content={content} updateContent={updateContent} editActiveElement={editActiveElement} />

        }
        return content.type
    }

    function rowActionIcons(type: string, index: number) {
        const newElements = JSON.parse(JSON.stringify(contextData.proposalTemplateJSON.elements))
        if (type === "up") {
            if (index === 0) {
                return;
            }
            newElements.splice(index - 1, 0, contextData.proposalTemplateJSON.elements[index])
            newElements.splice(index + 1, 1)
        }
        if (type === "down") {
            const newIndex = index + 2
            newElements.splice(newIndex, 0, contextData.proposalTemplateJSON.elements[index])
            newElements.splice(index, 1)
        }
        if (type === "clone") {
            const addCloneElement = JSON.parse(JSON.stringify(newElements[index]))
            addCloneElement.id = uuid()
            addCloneElement.columns.map((col: ColumnPayload) => {
                col.id = uuid()
                col.contents?.map((content) => {
                    return content.id = uuid()
                })
            })
            newElements.splice(index, 0, preProcessSections(addCloneElement))

        }
        if (type === "delete") {
            const confirmationModalObj = {
                showModal: true,
                modalMessage: "Are you sure ?",
                btnText: "Delete",
                callBack: () => {
                    newElements.splice(index, 1)
                    const activeElementObj: any = contextData.activeElement
                    activeElementObj.elementEditingModule = false
                    contextData.setActiveElement({ ...activeElementObj })
                    contextData.setConfirmationModal({ ...contextData.confirmationModal, showModal: false })
                },
                modalTitle: "Delete Section"
            }
            contextData.setConfirmationModal({ ...confirmationModalObj })

        }
        contextData.updateBuilderData(newElements, contextData.proposalTemplateJSON.proposalSettings)
    }

    function updateContent(updatedContent: ContentPayload) {
        if (contextData) {
            return contextData.proposalTemplateJSON.elements.map((section: SectionPayload, rowIndex: number) => {
                return section.columns.map((column: ColumnPayload, columnIndex: number) => {
                    return column.contents.map((content: ContentPayload, contentIndex: number) => {
                        if (content.id === updatedContent.id) {
                            const contentPaddingArray = contextData.proposalTemplateJSON.elements
                            contentPaddingArray[rowIndex].columns[columnIndex].contents[contentIndex] = updatedContent;
                            contextData.updateBuilderData(contentPaddingArray, contextData.proposalTemplateJSON.proposalSettings)
                        }
                    })
                })
            })
        }
        // return value
    }

    function cloneContent(rowIndex: number, columnIndex: number, contentIndex: number) {
        const tempElement = contextData.proposalTemplateJSON.elements
        const cloneElement = JSON.parse(JSON.stringify(tempElement))
        cloneElement[rowIndex].id = uuid()
        cloneElement[rowIndex].columns[columnIndex].contents[contentIndex].id = uuid()
        const addClone = cloneElement[rowIndex].columns[columnIndex].contents[contentIndex]

        tempElement[rowIndex].columns[columnIndex].contents.splice(contentIndex, 0, addClone)
        contextData.updateBuilderData(tempElement, contextData.proposalTemplateJSON.proposalSettings)

        return contextData.proposalTemplateJSON.elements
    }

    const testArray: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <>
            {/* {testArray?.map((num: number, index: number) => {
                return (


                    <Draggable draggableId={`editor-${num}`} index={index} key={num}>
                        {(provided) => (
                            <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                className='grid-view-panel'
                            >{num}</div>
                        )}
                    </Draggable>


                )

            })} */}

            {contextData.proposalTemplateJSON.elements.length ? (
                <>
                    {contextData.proposalTemplateJSON.elements.map((row: SectionPayload, rowIndex: number) => {
                        const fullWidthStyles = {
                            backgroundColor: row.options.sectionBackground?.color,
                            // width: `${contextData.emailTemplateJSON.emailSettings.contentWidth}px`,
                            // margin: "auto",
                            backgroundImage: `url("${row.options.sectionBackground?.url}")`,
                            backgroundRepeat: (row.options.sectionBackground?.noRepeat) ? 'no-repeat' : 'repeat',
                            backgroundSize: row.options.sectionBackground?.size,
                            backgroundPositionX: row.options.sectionBackground?.positionX,
                            backgroundPositionY: row.options.sectionBackground?.positionY,
                        }


                        const doNeighBourHasContents = (columnIndex: number) => {
                            const col = row.columns.find((column: ColumnPayload, index: number) => {
                                return index == columnIndex - 1;
                            })
                            return col?.contents.length;
                        }

                        const customWidthStylesDiv = {

                            borderTop: row.options.border?.applyTo?.includes("top") ? `${row.options.border.size + "px"} ${row.options.border.style} ${row.options.border.color}` : "",
                            borderRight: row.options.border?.applyTo?.includes("right") ? `${row.options.border.size + "px"} ${row.options.border.style} ${row.options.border.color}` : "",
                            borderBottom: row.options.border?.applyTo?.includes("bottom") ? `${row.options.border.size + "px"} ${row.options.border.style} ${row.options.border.color}` : "",
                            borderLeft: row.options.border?.applyTo?.includes("left") ? `${row.options.border.size + "px"} ${row.options.border.style} ${row.options.border.color}` : "",
                            backgroundColor: row.options.background?.color,
                            backgroundImage: `url("${row.options.background?.url}")`,
                            backgroundRepeat: (row.options.background?.noRepeat) ? 'no-repeat' : 'repeat',
                            backgroundSize: row.options.background?.size,
                            backgroundPositionX: row.options.background?.positionX,
                            backgroundPositionY: row.options.background?.positionY,
                        }
                        return (<Draggable draggableId={`editor-${row?.type}-${rowIndex}`} index={rowIndex} key={`editor-${row?.type}-${rowIndex}`}>
                            {(provided) => (
                                <div onClick={(e) => editActiveElement(e, "section", row.id, true)} className={`${contextData.onHover?.onSectionHover ? `section-element` : ""} ${contextData.activeElement.elementId === row.id ? "selected-element active" : ""}  build-area ${previewDevicetype === "MOBILE" ? "mobile-view " : "desktop-view"}`}
                                    {...provided.draggableProps}
                                    ref={provided.innerRef}
                                    onMouseEnter={(e) => { contextData.setOnHover({ ...contextData.onHover, onSectionHover: true, onContentHover: false }); e.preventDefault() }}
                                    onMouseLeave={(e) => { contextData.setOnHover({ ...contextData.onHover, onSectionHover: false, onContentHover: false }); e.preventDefault() }}
                                >
                                    <div style={fullWidthStyles}>
                                        <div style={{
                                            width: `${contextData.proposalTemplateJSON.proposalSettings.contentWidth}px`,
                                            maxWidth: "100%",
                                            margin: "auto", padding: row.options.margin ? `${row.options.margin[0]}px ${row.options.margin[1]}px ${row.options.margin[2]}px ${row.options.margin[3]}px` : "",
                                        }}>
                                            <div style={customWidthStylesDiv} className="editor-row section-setting scroll-container">
                                                <div className="w-100 d-flex" style={{ minHeight: "11px", paddingTop: `${row.options.padding[0]}px`, paddingRight: `${row.options.padding[1]}px`, paddingBottom: `${row.options.padding[2]}px`, paddingLeft: `${row.options.padding[3]}px`, }}
                                                >
                                                    {row.columns.map((col: ColumnPayload, columnIndex: number) => {
                                                        const columnStyles: {} = {
                                                            padding: col.options.padding ? `${col.options.padding[0]}px ${col.options.padding[1]}px ${col.options.padding[2]}px ${col.options.padding[3]}px` : "",
                                                            backgroundColor: col.options.backgroundColor,
                                                            // borderColor: col.options.border.color,
                                                            // borderWidth: col.options.border.size + "px",
                                                            // borderStyle: col.options.border.style,
                                                            borderTop: col.options.border?.applyTo?.includes("top") ? `${col.options.border.size + "px"} ${col.options.border.style} ${col.options.border.color}` : "",
                                                            borderRight: col.options.border?.applyTo?.includes("right") ? `${col.options.border.size + "px"} ${col.options.border.style} ${col.options.border.color}` : "",
                                                            borderBottom: col.options.border?.applyTo?.includes("bottom") ? `${col.options.border.size + "px"} ${col.options.border.style} ${col.options.border.color}` : "",
                                                            borderLeft: col.options.border?.applyTo?.includes("left") ? `${col.options.border.size + "px"} ${col.options.border.style} ${col.options.border.color}` : "",

                                                            position: "relative",
                                                            // zIndex: 100
                                                        }

                                                        const innerStyles = {
                                                            backgroundColor: col.options.innerBackgroundColor,
                                                            borderColor: col.options.innerBorder?.color,
                                                            borderWidth: col.options.innerBorder?.size + "px",
                                                            borderStyle: col.options.innerBorder?.style,
                                                            borderTop: col.options.innerBorder?.applyTo?.includes("top") ? `${col.options.innerBorder?.size + "px"} ${col.options.innerBorder?.style} ${col.options.innerBorder?.color}` : "",
                                                            borderRight: col.options.innerBorder?.applyTo?.includes("right") ? `${col.options.innerBorder?.size + "px"} ${col.options.innerBorder?.style} ${col.options.innerBorder?.color}` : "",
                                                            borderBottom: col.options.innerBorder?.applyTo?.includes("bottom") ? `${col.options.innerBorder?.size + "px"} ${col.options.innerBorder?.style} ${col.options.innerBorder?.color}` : "",
                                                            borderLeft: col.options.innerBorder?.applyTo?.includes("left") ? `${col.options.innerBorder?.size + "px"} ${col.options.innerBorder?.style} ${col.options.innerBorder?.color}` : "",
                                                            // borderTop: col.options.innerBorder?.applyTo?.includes("top") ? col.options.innerBorder?.size + "px" : "none",
                                                            // borderBottom: col.options.innerBorder?.applyTo?.includes("bottom") ? col.options.innerBorder?.size + "px" : "none",
                                                            // borderLeft: col.options.innerBorder?.applyTo?.includes("left") ? col.options.innerBorder?.size + "px" : "none",
                                                            // borderRight: col.options.innerBorder?.applyTo?.includes("right") ? col.options.innerBorder?.size + "px" : "none"
                                                        }


                                                        return (<div style={{ width: `${col.columnWidthPercentage}%`, maxWidth: `${col.columnWidthPercentage}%`, verticalAlign: col.options.verticalAlign }}>
                                                            <div key={columnIndex} style={{ width: "100%" }} className="table-fixed-layout-child" >
                                                                <div style={{ width: "100%" }}>
                                                                    <div style={columnStyles}>
                                                                        <div style={innerStyles}>
                                                                            <Droppable droppableId={`row-${rowIndex}-column-${columnIndex}-contentDropping`} type="content">
                                                                                {(provided: DroppableProvided, snapshotDroppable: any) => {
                                                                                    return (
                                                                                        <div
                                                                                            {...provided.droppableProps}
                                                                                            ref={provided.innerRef}
                                                                                        >
                                                                                            {col.contents.length ? (
                                                                                                <>
                                                                                                    {col.contents.map((content: ContentPayload, contentIndex: number) => {
                                                                                                        return (
                                                                                                            <>
                                                                                                                <EditorContents cloneContent={cloneContent} editActiveElement={editActiveElement} deleteContent={deleteContent} content={content} contentIndex={contentIndex} rowIndex={rowIndex} handleContentType={handleContentType} columnIndex={columnIndex} contextData={contextData} />
                                                                                                            </>
                                                                                                        )
                                                                                                    })}
                                                                                                    {provided.placeholder}
                                                                                                    {snapshotDroppable.isDraggingOver ? (
                                                                                                        <div className="placeholder-container" style={{
                                                                                                            position: "absolute",
                                                                                                            top: placeholderProps.clientY,
                                                                                                            left: placeholderProps.clientX,
                                                                                                            width: placeholderProps.clientWidth,
                                                                                                            maxWidth: `${contextData.proposalTemplateJSON.proposalSettings.contentWidth}px`,
                                                                                                            margin: "auto"
                                                                                                        }} >
                                                                                                            <div className="position-relative">
                                                                                                                <span className="placeholder-styles">Drop it here</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    ) : <></>}
                                                                                                </>
                                                                                            )
                                                                                                :
                                                                                                <>
                                                                                                    <div >
                                                                                                        <div className={`border-dashed ${columnIndex == 0 ? "border-2" : "border-y-2 border-e-2"} ${doNeighBourHasContents(columnIndex) ? "border-s-2" : ""} border-sky-200 h-24 justify-center items-center flex text-center`}>
                                                                                                            Drop content here
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {/* {provided.placeholder} */}
                                                                                                    {snapshotDroppable.isDraggingOver ? (
                                                                                                        <div className="placeholder-container" style={{
                                                                                                            position: "absolute",
                                                                                                            top: placeholderProps.clientY,
                                                                                                            left: placeholderProps.clientX,
                                                                                                            width: placeholderProps.clientWidth,
                                                                                                            maxWidth: `${contextData.proposalTemplateJSON.proposalSettings.contentWidth}px`,
                                                                                                            margin: "auto"
                                                                                                        }} >
                                                                                                            <div className="position-relative">
                                                                                                                <span className="placeholder-styles">Drop it here</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    ) : <></>}

                                                                                                </>}
                                                                                        </div>
                                                                                    )
                                                                                }}
                                                                            </Droppable>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>)
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-action-icons content-element-actions">
                                        <span className="copy-icon cursor-pointer powertip" title="Duplicate" onClick={(e) => rowActionIcons("clone", rowIndex)}>
                                            <svg height={16} width={16} data-v-32a717ef="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><g> <path className="st0" d="M10.6,45c-0.8-0.2-1.5-0.4-2.2-1c-1.1-0.9-1.8-2.1-1.8-3.6c0-7.5,0-15.1,0-22.6c0-2.4,2-4.4,4.4-4.5 c0.4,0,0.7,0,1.1,0c0.6,0,1.1,0.5,1.2,1.1c0.1,0.7-0.3,1.2-1,1.3c-0.3,0.1-0.7,0-1,0c-1.3,0-2.2,0.9-2.2,2.2c0,7.4,0,14.9,0,22.3 c0,1.3,0.9,2.2,2.2,2.2c6.9,0,13.7,0,20.6,0c1.3,0,2.2-0.9,2.2-2.2c0-0.3,0-0.5,0-0.8c0-0.6,0.5-1.1,1.2-1.2c0.6,0,1.2,0.4,1.3,1 c0.2,1.7-0.2,3.3-1.5,4.5c-0.6,0.6-1.4,0.9-2.2,1.1c-0.1,0-0.1,0-0.2,0.1C25.3,45,18,45,10.6,45z"></path> <path className="st0" d="M43.3,19.9c0,3.4-0.1,6.8,0,10.2c0.1,2.7-2.1,4.9-4.9,4.9c-5.7-0.1-11.4,0-17.1,0c-2.4,0-4.3-1.6-4.7-4 c0-0.2,0-0.5,0-0.7c0-6.9,0-13.7,0-20.6c0-2.7,2-4.7,4.7-4.7c5.7,0,11.5,0,17.2,0c2.7,0,4.7,2,4.7,4.7C43.3,13,43.3,16.5,43.3,19.9 z M40.8,19.9c0-3.4,0-6.8,0-10.2c0-1.5-1.1-2.4-2.3-2.4c-5.7,0-11.3,0-17,0c-1.5,0-2.3,0.8-2.3,2.3c0,6.8,0,13.5,0,20.3 c0,1.5,0.8,2.3,2.3,2.3c5.7,0,11.3,0,17,0c1.3,0,2.4-0.9,2.3-2.4C40.8,26.8,40.8,23.4,40.8,19.9z"></path> </g></svg>
                                        </span>
                                        <span className="delete-icon cursor-pointer powertip" title="Delete" onClick={() => rowActionIcons("delete", rowIndex)}>
                                            <svg height={16} width={16} data-v-32a717ef="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><g> <path className="st0" d="M15,45c-0.8-0.2-1.5-0.5-2-1c-0.8-0.8-1-1.7-1.1-2.7c-0.3-4-0.7-8.1-1-12.1c-0.3-3.3-0.5-6.6-0.8-9.9 c-0.1-0.8-0.1-1.6-0.2-2.4c0-0.1-0.1-0.3-0.3-0.4c-1.4-0.6-2.3-2-2.1-3.4c0.1-1.6,1.2-2.9,2.7-3.2c0.3-0.1,0.7-0.1,1-0.1 c1.7,0,3.4,0,5.2,0c0.1,0,0.3,0,0.5,0c0-0.4,0-0.7,0-1c0-2.1,1.5-3.6,3.7-3.6c3,0,6.1,0,9.1,0c2.1,0,3.6,1.5,3.7,3.6 c0,0.3,0,0.7,0,1c0.2,0,0.3,0,0.5,0c1.8,0,3.5,0,5.3,0c1.7,0,3,1,3.5,2.6s-0.3,3.4-1.9,4.1c-0.3,0.1-0.4,0.2-0.4,0.5 c-0.2,2.7-0.4,5.4-0.7,8.2c-0.2,2.7-0.4,5.4-0.7,8.1c-0.2,2.7-0.5,5.3-0.6,8c-0.1,1.3-0.4,2.5-1.6,3.2c-0.5,0.3-1,0.4-1.5,0.6 C28.3,45,21.7,45,15,45z M12.2,16.7c0.2,2.3,0.4,4.5,0.5,6.7c0.2,3,0.5,6,0.7,8.9c0.2,3,0.5,5.9,0.7,8.9c0.1,1,0.5,1.3,1.5,1.3 c6.2,0,12.4,0,18.5,0c0.1,0,0.2,0,0.4,0c0.6,0,1-0.4,1.1-1c0-0.2,0.1-0.4,0.1-0.7c0.1-1.7,0.3-3.4,0.4-5.1c0.2-2.7,0.5-5.4,0.7-8.1 c0.2-2.4,0.4-4.7,0.6-7.1c0.1-1.3,0.2-2.6,0.3-3.9C29.3,16.7,20.7,16.7,12.2,16.7z M25,14.4c4.6,0,9.1,0,13.7,0c0.2,0,0.3,0,0.5,0 c0.8-0.1,1.3-0.9,0.9-1.7c-0.3-0.5-0.7-0.7-1.3-0.7c-9.2,0-18.4,0-27.7,0c-0.1,0-0.2,0-0.4,0c-0.6,0.1-1.1,0.6-1.1,1.2 c0,0.6,0.5,1.1,1.1,1.2c0.2,0,0.3,0,0.5,0C15.9,14.4,20.4,14.4,25,14.4z M30.9,9.7c0-0.4,0-0.7,0-1c0-0.9-0.5-1.3-1.3-1.3 c-1.1,0-2.2,0-3.3,0c-1.9,0-3.8,0-5.8,0c-0.7,0-1.2,0.4-1.3,1c-0.1,0.4,0,0.9,0,1.4C23.1,9.7,26.9,9.7,30.9,9.7z"></path> </g></svg>
                                        </span>
                                        <span className="cursor-pointer up-arrow powertip" title="Move Up" onClick={() => rowActionIcons("up", rowIndex)}>
                                            <svg height={16} width={16} className="eb-icon-svg" xmlns="http://www.w3.org/2000/svg" version="1.0" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

                                                <path className="st0" d="M38.9,18.3l-13-13c0,0,0,0-0.1,0c-0.1-0.1-0.2-0.2-0.3-0.2C25.3,5,25.2,5,25,5c0,0,0,0,0,0c0,0,0,0-0.1,0  c-0.1,0-0.3,0-0.4,0.1c-0.1,0-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0.1l-13,13c-0.5,0.5-0.5,1.3,0,1.8c0.5,0.5,1.3,0.5,1.8,0L23.7,9.3  v34.4c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3V9.3l10.8,10.8c0.2,0.2,0.6,0.4,0.9,0.4s0.6-0.1,0.9-0.4C39.4,19.6,39.4,18.8,38.9,18.3  z" />
                                            </svg>
                                        </span>
                                        <span className="cursor-pointer down-arrow powertip" title="Move Down" onClick={() => rowActionIcons("down", rowIndex)}>
                                            <svg className="eb-icon-svg" height={16} width={16} xmlns="http://www.w3.org/2000/svg" version="1.0" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50"  >
                                                <path className="st0" d="M11.1,31.7l13,13c0,0,0,0,0.1,0c0.1,0.1,0.2,0.2,0.3,0.2C24.7,45,24.8,45,25,45c0,0,0,0,0,0c0,0,0,0,0.1,0  c0.1,0,0.3,0,0.4-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1,0,0.1-0.1l13-13c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0L26.3,40.7V6.3  C26.3,5.6,25.7,5,25,5s-1.3,0.6-1.3,1.3v34.4L12.9,29.9c-0.2-0.2-0.6-0.4-0.9-0.4s-0.6,0.1-0.9,0.4C10.6,30.4,10.6,31.2,11.1,31.7z" />
                                            </svg>
                                        </span>
                                        <span className="cursor-pointer down-arrow powertip" title="Save Block" onClick={(e) => saveBlock(e, row, contextData.predefinedTemplates, contextData.setPredefindedTemplates)}>
                                            <svg className="eb-icon-svg" height={16} width={16} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                                                <g>
                                                    <path className="st0" d="M38.4,45c-0.2,0-0.5-0.1-0.7-0.3L24.8,32.1L12.3,44.7c-0.2,0.2-0.4,0.3-0.7,0.3c-1.7,0-3.1-1.4-3.1-3.1V8.1   C8.5,6.4,9.9,5,11.6,5h26.8c1.7,0,3.1,1.4,3.1,3.1v33.8C41.5,43.6,40.1,45,38.4,45z M24.8,29.8c0.2,0,0.5,0.1,0.7,0.3l13.2,13   c0.5-0.1,0.8-0.6,0.8-1.1V8.1c0-0.7-0.5-1.2-1.2-1.2H11.6c-0.7,0-1.2,0.5-1.2,1.2v33.8c0,0.5,0.4,1,0.8,1.1l12.9-13   C24.3,29.9,24.6,29.8,24.8,29.8z" />
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="cursor-pointer down-arrow powertip" title="Edit" onClick={(e) => editActiveElement(e, "section", row.id, true)}>
                                            <svg className="eb-icon-svg" height={16} width={16} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">

                                                <g>
                                                    <path className="st0" d="M44,21.8c-0.5,0-1,0.4-1,1v15.6c0,2.6-2.1,4.8-4.8,4.8H11.7c-2.6,0-4.8-2.1-4.8-4.8V11.7C6.9,9,9,6.9,11.7,6.9   h15.9c0.5,0,1-0.4,1-1c0-0.5-0.4-1-1-1H11.7C8,5,5,8,5,11.7v26.6C5,42,8,45,11.7,45h26.6c3.7,0,6.7-3,6.7-6.7V22.8   C45,22.2,44.6,21.8,44,21.8z" />
                                                    <path className="st0" d="M24.6,19.9l-1.3,5.8c-0.1,0.3,0,0.7,0.3,0.9c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.1,0,0.2,0l5.8-1.3   c0.2,0,0.3-0.1,0.5-0.3L43.8,12c1.6-1.6,1.6-4.2,0-5.8c-1.5-1.5-4.2-1.5-5.8,0L24.8,19.4C24.7,19.5,24.6,19.7,24.6,19.9z    M26.3,20.6l13-13c0.8-0.8,2.3-0.8,3.1,0c0.8,0.8,0.8,2.2,0,3.1l-13,13l-4,0.9L26.3,20.6z" />
                                                </g>
                                            </svg>                                            </span>
                                        <span  {...provided.dragHandleProps} className="drag-icon cursor-pointer powertip" title="Drag">
                                            <svg height={16} width={16} data-v-32a717ef="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><g> <g> <path className="st0" d="M24.8,42.9c-0.5,0-1-0.4-1-1V5.7c0-0.5,0.4-1,1-1s1,0.4,1,1V42C25.7,42.5,25.3,42.9,24.8,42.9z"></path> </g> <g> <path className="st0" d="M24.8,44.7c-0.2,0-0.5-0.1-0.7-0.3l-6.2-6.2c-0.4-0.4-0.4-1,0-1.3c0.4-0.4,1-0.4,1.3,0l5.5,5.5l5.5-5.5 c0.4-0.4,1-0.4,1.3,0c0.4,0.4,0.4,1,0,1.3l-6.2,6.2C25.3,44.6,25,44.7,24.8,44.7z"></path> </g> <g> <path className="st0" d="M18.6,12.8c-0.2,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.3L24.1,5c0.4-0.4,1-0.4,1.3,0l6.2,6.2 c0.4,0.4,0.4,1,0,1.3c-0.4,0.4-1,0.4-1.3,0L24.8,7l-5.5,5.5C19.1,12.7,18.8,12.8,18.6,12.8z"></path> </g> </g> <g> <g> <path className="st0" d="M43.8,25.7H7.5c-0.5,0-1-0.4-1-1s0.4-1,1-1h36.3c0.5,0,1,0.4,1,1S44.3,25.7,43.8,25.7z"></path> </g> <g> <path className="st0" d="M11.9,31.9c-0.2,0-0.5-0.1-0.7-0.3l-6.2-6.2c-0.4-0.4-0.4-1,0-1.3l6.2-6.2c0.4-0.4,1-0.4,1.3,0s0.4,1,0,1.3 l-5.5,5.5l5.5,5.5c0.4,0.4,0.4,1,0,1.3C12.4,31.8,12.2,31.9,11.9,31.9z"></path> </g> <g> <path className="st0" d="M37.6,31.9c-0.2,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.3l5.5-5.5L37,19.2c-0.4-0.4-0.4-1,0-1.3 c0.4-0.4,1-0.4,1.3,0l6.2,6.2c0.4,0.4,0.4,1,0,1.3l-6.2,6.2C38.1,31.8,37.9,31.9,37.6,31.9z"></path> </g> </g></svg>
                                        </span>

                                    </div>

                                </div>
                            )}
                        </Draggable>)
                    })}
                    {/* {provided.placeholder} */}
                    {snapshot.isDraggingOver && removeTransform ? (
                        <div className="placeholder-container" style={{
                            position: "absolute",
                            top: placeholderProps.clientY,
                            left: 0,
                            width: `${contextData.proposalTemplateJSON.proposalSettings.contentWidth}px`,
                            maxHeight: placeholderProps.clientHeight,
                            margin: "auto"
                        }}
                        >
                            <div className="position-relative">
                                <span className="placeholder-styles">Drop it here</span>
                            </div>
                        </div>
                    ) : <></>}
                    {snapshot.isDraggingOver && !removeTransform ? (
                        <div style={{
                            position: "absolute",
                            top: placeholderProps.clientY,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            opacity: "0.8"
                        }}
                        >
                            <div className="position-relative">
                                <div dangerouslySetInnerHTML={{ __html: getDraggedElement.toString() }} />
                            </div>
                        </div>
                    ) : <></>}
                </>
            ) : <>
                <div className="bg-white p-3 border-radius-1" style={{ maxWidth: `${contextData.proposalTemplateJSON.proposalSettings.contentWidth}px`, margin: "auto" }}>
                    {/* <div>{`${getDraggedElement}`}</div> */}
                    <div className="empty-pad-content section text-muted" >
                        Start by creating and designing awesome customized emails by dragging & dropping the components from the left hand side menu list.
                    </div>
                </div>

                {/* {provided.placeholder} */}
                {snapshot.isDraggingOver ? (
                    <div className="placeholder-container" style={{
                        position: "absolute",
                        top: placeholderProps.clientY,
                        left: 0,
                        width: `${contextData.proposalTemplateJSON.proposalSettings.contentWidth}px`,
                        // maxWidth: ,
                        margin: "auto",
                    }} >
                        <div className="position-relative">
                            <span className="placeholder-styles">Drop it here</span>
                        </div>
                    </div>
                ) : <></>}
            </>}

        </>
    )
}

export default Editor