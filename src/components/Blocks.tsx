import { Draggable, DraggableProvided, DraggableRubric, DraggableStateSnapshot, Droppable, DroppableStateSnapshot } from "react-beautiful-dnd";
import StaticColumns from "../json/StaticColumns"
import { ColumnPayload, ProposalBuilderContext, ProposalBuilderContextPayload, SectionPayload } from "../models/GeneralModels";
import React, { Dispatch, useContext } from "react";
import uuid from "react-uuid";
interface contentProps {
    setShowTabPane: Dispatch<boolean>
}


function Blocks(props: contentProps) {
    const { setShowTabPane } = props
    const setting: ProposalBuilderContextPayload = useContext(ProposalBuilderContext);
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    function addSection(sectionIndex: number) {
        const newElements = setting.proposalTemplateJSON.elements
        const addElement = StaticColumns[sectionIndex];
        addElement.id = uuid()
        const clone = JSON.parse(JSON.stringify(addElement))
        newElements.push(clone)
        setting.updateBuilderData(newElements, setting.proposalTemplateJSON.proposalSettings)
    }

    const getRenderItem = (cloneBlocks: any[]) => (provided: DraggableProvided, snapshot: DraggableStateSnapshot, rubric: DraggableRubric) => {
        const SectionClone = cloneBlocks[rubric.source.index];
        return (
            <>
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                //style={provided.draggableProps.style}


                // style={{ background: "red", minWidth: "100%", margin: "auto" }}
                >
                    <div
                    // style={cloneStyles}
                    >
                        <div className="grid-view-panel"
                            style={{ display: "flex", flexDirection: "row" }}>
                            {SectionClone.columns.map((col: ColumnPayload, index: number) => {
                                return (
                                    <div key={index} className={`border-dashed ${index == 0 ? 'border-2' : 'border-y-2 border-e-2'} border-gray-300 h-10`} style={{ width: `${col.columnWidthPercentage}%` }}>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </>
        );
    };


    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 gap-4  ">

                {

                    StaticColumns.map((column: any, index: any) => {
                        return (
                            <div key={index}>
                                <Droppable
                                    key={index}
                                    renderClone={getRenderItem(StaticColumns)}
                                    droppableId={"blocks-droppable"}
                                    isDropDisabled={true}
                                >
                                    {(provided, snapshot: DroppableStateSnapshot) => {
                                        const cloneId = `${column.columnType}-${index}`
                                        const shouldRenderClone = cloneId === snapshot.draggingFromThisWith
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                onClick={() => addSection(index)}
                                            >

                                                {shouldRenderClone ? (

                                                    <div className="react-beatiful-dnd-copy" >
                                                        <div
                                                            className=""
                                                            style={{ display: "flex", flexDirection: "row" }}
                                                        >
                                                            {column.columns.map((col: any, index1: number) => {
                                                                return (
                                                                    <div className={`border-dashed ${index1 == 0 ? 'border-2' : 'border-y-2 border-e-2'} border-gray-300 h-10`} key={index1} style={{ width: `${col.columnWidthPercentage}%` }}>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <Draggable draggableId={`${column.columnType}-${index}`} index={index} key={`${column.columnType}-${index}`}>
                                                        {(provided) => (
                                                            <div
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                ref={provided.innerRef}
                                                            >
                                                                <div className="grid-view-panel" style={{ display: "flex", flexDirection: "row" }}>
                                                                    {column.columns.map((col: any, index1: any) => {
                                                                        return (
                                                                            <div className={`border-dashed ${index1 == 0 ? 'border-2' : 'border-y-2 border-e-2'} border-gray-300 h-10`} style={{ width: `${col.columnWidthPercentage}%` }}>

                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                )}
                                                {/* {provided.placeholder} */}
                                            </div>
                                        )
                                    }
                                    }
                                </Droppable>
                            </div>

                        )
                    })
                }
            </div >
        </div >
    );
}

export default Blocks;