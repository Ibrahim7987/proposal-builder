import React, { useEffect, useState } from 'react'
import StaticColumns from "./json/StaticColumns";
import { DragDropContext, DragUpdate, Droppable, DroppableProvided, DropResult } from 'react-beautiful-dnd'
import { ActiveElementType, DefaultHover, DroppableSnapshot, PlaceholderProps, ProposalBuilderContext, SectionPayload } from './models/GeneralModels';
import uuid from "react-uuid";
import defaultProposalSetting from "./json/proposalSettings.json";
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';
import ContentStyleEditor from './components/ContentStyleEditor';
import BodySetting from './components/BodySetting';
import { BodySettingOptionsPayload } from './models/DesignModels';
import { updateProposalTemplateJson } from './Utils';
import { Disclosure } from '@headlessui/react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Settings from './proposal-sections/Settings'
import Email from './proposal-sections/Email'
import Insights from './proposal-sections/Insights'
import Save from './Modals/Save'

import * as ReactDOMServer from 'react-dom/server';
import {
    Offcanvas,
    Ripple,
    Dropdown,
    Collapse,
    initTE,
} from "tw-elements";

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import StaticContents from './json/StaticContents';
import AddProduct from './Modals/AddProduct';
import EditAndSaveProducts from './Modals/EditAndSaveProducts';
import { PARENT } from './Globals';
import { contentContentOptions } from './models/ContentModels';
import designedBlocks from './json/PredefinedBlocks';
import { getReq } from './Requests';

initTE({ Offcanvas, Ripple, Dropdown, Collapse });

const DesignBuilder = () => {

    const editorJson: any = [
        { "id": "8780e57f-cc60-9480-2f17-e6f9a6960eb6", "columnType": "BlockOneColumn", "type": "block", "hovered": false, "options": { "background": { "url": "", "noRepeat": false, "size": "cover", "positionX": "center", "positionY": "center", "color": "#ffffff" }, "sectionBackground": { "url": "", "noRepeat": true, "size": "cover", "positionX": "center", "positionY": "center", "color": "transparent" }, "border": { "size": 0, "style": "solid", "color": "#DDDDDD", "applyTo": ["left", "right", "top", "bottom"] }, "padding": [10, 10, 10, 10], "margin": [0, 0, 0, 0] }, "columns": [{ "id": "b09accf2-56a0-2305-7be0-c87706a08162", "columnWidthPercentage": 100, "contents": [], "options": { "backgroundColor": "transparent", "innerBackgroundColor": "transparent", "padding": [0, 0, 0, 0], "border": { "size": 1, "style": "solid", "color": "transparent" }, "innerBorder": { "size": 0, "style": "solid", "applyTo": ["left", "right", "top", "bottom"], "color": "#DADFE1" }, "verticalAlign": "middle" } }] }, { "id": "id1614841174008RAND3404", "component": "blockTemplate", "columns": [{ "contents": [{ "component": "textTemplate", "options": { "padding": ["5", 15, "5", 15], "backgroundColor": "transparent", "text": "<p style=\"margin: 0px; word-break: break-word; line-height: 1.6; text-align: center;\"><span style=\"color: #8899a6; font-size: 12px;\">Don't want to get emails like this? <a class=\"eb-unsubscribe-link\" style=\"text-decoration: none;\" href=\"{{JSONObject.unsubscribe_link}}\" target=\"_blank\" rel=\"noopener\">Unsubscribe</a> from our emails</span></p>", "font": { "family": "inherit" } }, "id": "id1614841176767RAND30514", "hovered": false, "type": "text" }, { "component": "textTemplate", "options": { "padding": ["5", 15, "5", 15], "backgroundColor": "transparent", "className": "eb-address-container", "text": "<p style=\"margin: 0px; word-break: break-word; line-height: 1.6; text-align: center;\"><span style=\"color: #8899a6; font-size: 12px;\">{{Domain.street}}, {{Domain.city}}, {{Domain.state}}, {{Domain.zip}}, {{Domain.country}}</span></p>", "font": { "family": "inherit" } }, "id": "id1614841512688RAND23779", "hovered": false, "type": "text" }], "options": { "border": { "size": 0, "styleOptions": ["solid", "dashed", "dotted"], "color": "#DADFE1", "style": "solid", "applyTo": ["left", "right", "top", "bottom"] }, "verticalAlign": "top", "backgroundColor": "transparent", "innerBackgroundColor": "transparent", "innerBorder": { "size": 0, "style": "solid", "color": "#dddddd", "applyTo": ["left", "right", "top", "bottom"] }, "padding": [0, 0, 0, 0] }, "columnWidthPercentage": 100 }], "options": { "padding": [30, 10, 0, 10], "className": "eb-footer-container", "sectionBackground": { "url": "", "noRepeat": false, "size": "auto", "positionX": "center", "positionY": "center", "color": "" }, "background": { "color": "transparent", "url": "", "noRepeat": true, "size": "cover", "positionX": "center", "positionY": "center" }, "border": { "size": 0, "style": "solid", "color": "#dddddd", "applyTo": ["left", "right", "top", "bottom"] }, "margin": [0, 0, 0, 0] }, "hovered": false, "type": "block" }
    ]

    const [open, setOpen] = useState(true)
    const [rightOpen, setRightOpen] = useState(true)

    const { proposalSettings } = defaultProposalSetting

    const defaultHover = {
        onSectionHover: false,
        onContentHover: false
    }

    const initialHistory = {
        elements: JSON.stringify(editorJson),
        proposalSettings: JSON.stringify(proposalSettings)
    }

    const initialActiveElement = {
        elementType: undefined,
        elementId: undefined,
        elementEditingModule: false,
        formSubComponentType: undefined,
        formSubComponent: undefined
    }

    const initialProposalTemplateJSON = {
        elements: editorJson,
        proposalSettings: proposalSettings,
        AMPMode: false,
        AMPElements: editorJson,
        AMPProposalSettings: proposalSettings
    }

    const initialPlaceholderProps = {
        clientHeight: undefined,
        clientWidth: undefined,
        clientX: undefined,
        clientY: undefined,
    }

    const initialConfirmationModal = {
        showModal: false,
        modalMessage: "Are you sure?",
        btnText: "Save",
        callBack: () => { },
        modalTitle: "Save Proposal Template"
    }

    const [predefinedTemplates, setPredefindedTemplates] = useState<any>(designedBlocks)
    const [addProductModal, setAddProductModal] = useState(false);
    const [editProductsModal, setEditProductsModal] = useState(false);
    const [placeholderProps, setPlaceholderProps] = useState<PlaceholderProps>(initialPlaceholderProps);
    const [activeElement, setActiveElement] = useState<ActiveElementType>(initialActiveElement)
    const [handleTabComponents, sethandleTabComponents] = useState<string>("content")
    const [onHover, setOnHover] = useState<DefaultHover>(defaultHover);
    const [previewDevicetype, setPreviewDeviceType] = useState<string>("LAPTOP")
    const [removeTransform, setRemoveTransform] = useState<boolean>(false);
    const [showTabPane, setShowTabPane] = useState(true);
    const [actionHistory, setHistroy] = useState<any>([]);
    const [showBodySetting, setShowBodySetting] = useState(false);
    const [saveModal, setSaveModal] = useState(false);
    const [fallbackMode, setFallbackMode] = useState<boolean>(false)
    const [showRightSettings, setShowRightSettings] = useState<string>("styles");
    const [getDraggedElement, setDraggedElement] = useState<string>("")
    const [confirmationModal, setConfirmationModal] = useState<any>(initialConfirmationModal);
    const [proposalProducts, setProposalProducts] = useState<contentContentOptions>(Object);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [histroyPosition, setHistroyPosition] = useState<number>(-1)
    const [proposalTemplateJSON, setProposalTemplateJSON] = useState<any>(initialProposalTemplateJSON)


    function handleUndo() {

        if (histroyPosition <= 0) {
            return;
        }
        const prevState = actionHistory[histroyPosition - 1];
        if (!prevState)
            return;

        let newPos = histroyPosition - 1;
        // this.currentIndex--;
        setHistroyPosition(newPos);
        updateProposalTemplateJson("elements", JSON.parse(actionHistory[newPos].elements), proposalTemplateJSON, setProposalTemplateJSON)
        updateProposalTemplateJson("proposalSettings", JSON.parse(actionHistory[newPos].proposalSettings), proposalTemplateJSON, setProposalTemplateJSON)
        setActiveElement(initialActiveElement)
    }

    const droppableStyles: any = {
        // when full width is true or turn on
        lineHeight: proposalTemplateJSON.proposalSettings?.font.lineHeight,
        fontFamily: ` ${proposalTemplateJSON.proposalSettings?.font.family}, sans-serif`,
        fontSize: `${proposalTemplateJSON.proposalSettings?.font?.size}px`,
        fontWeight: proposalTemplateJSON.proposalSettings?.font?.weight,
        color: proposalTemplateJSON.proposalSettings?.font.color,
        paddingTop: `${proposalTemplateJSON.proposalSettings?.padding && proposalTemplateJSON.proposalSettings?.padding[0]}px`,
        paddingRight: `${proposalTemplateJSON.proposalSettings?.padding && proposalTemplateJSON.proposalSettings?.padding[1]}px`,
        paddingBottom: `${proposalTemplateJSON.proposalSettings?.padding && proposalTemplateJSON.proposalSettings?.padding[2]}px`,
        paddingLeft: `${proposalTemplateJSON.proposalSettings?.padding && proposalTemplateJSON.proposalSettings?.padding[3]}px`,
        background: proposalTemplateJSON.proposalSettings?.background && proposalTemplateJSON.proposalSettings?.background.color,
        backgroundImage: `url("${proposalTemplateJSON.proposalSettings?.background && proposalTemplateJSON.proposalSettings?.background?.url}")`,
        backgroundRepeat: (proposalTemplateJSON.proposalSettings?.background && proposalTemplateJSON.proposalSettings?.background?.noRepeat) ? 'no-repeat' : 'repeat',
        backgroundSize: proposalTemplateJSON.proposalSettings.background && proposalTemplateJSON.proposalSettings.background?.size,
        backgroundPositionX: proposalTemplateJSON.proposalSettings.background && proposalTemplateJSON.proposalSettings.background?.positionX,
        backgroundPositionY: proposalTemplateJSON.proposalSettings.background && proposalTemplateJSON.proposalSettings.background?.positionY,
        minHeight: "100%",
        // position: "relative",
        // height: "calc(100vh - 50px)",
        // overflowY: "scroll",
        // overflow: "hidden"
    }

    function handleRedo() {
        if (histroyPosition === actionHistory.length - 1) {
            return;
        }
        const currentPosition = histroyPosition + 1
        setHistroyPosition(currentPosition)
        updateProposalTemplateJson("elements", JSON.parse(actionHistory[currentPosition].elements), proposalTemplateJSON, setProposalTemplateJSON)
        updateProposalTemplateJson("proposalSettings", JSON.parse(actionHistory[currentPosition].proposalSettings), proposalTemplateJSON, setProposalTemplateJSON)
        setActiveElement(initialActiveElement)
    }


    function hideEditModule() {
        const updateSettings = activeElement
        if (updateSettings) {
            updateSettings.elementEditingModule = false
            setActiveElement({ ...updateSettings })
        }
    }

    function updateHistroy(elements: SectionPayload[], bodySettingData: BodySettingOptionsPayload) {

        let actionHistoryNewObj = [...actionHistory];
        if (histroyPosition + 1 < actionHistoryNewObj.length) {
            actionHistoryNewObj.splice(histroyPosition + 1);
        }

        let clone = {
            elements: "",
            proposalSettings: ""
        };
        clone.elements = JSON.stringify(elements);
        clone.proposalSettings = JSON.stringify(bodySettingData);
        actionHistoryNewObj.push(clone);

        setHistroy([...actionHistoryNewObj]);

        let newIndexPos = histroyPosition + 1;
        setHistroyPosition(newIndexPos);

        // this.currentIndex++;

        // Check undo redo allowed steps size
        var allowedHistorySize = 20;
        if (actionHistoryNewObj.length > allowedHistorySize) {
            setHistroy(actionHistoryNewObj.splice(actionHistoryNewObj.length - allowedHistorySize));
            setHistroyPosition(newIndexPos - 1)
        }

        clone = initialHistory

    }

    function updateBuilderData(elementsData: SectionPayload[], bodySettingData: BodySettingOptionsPayload) {
        updateProposalTemplateJson("elements", elementsData, proposalTemplateJSON, setProposalTemplateJSON)
        updateProposalTemplateJson("proposalSettings", bodySettingData, proposalTemplateJSON, setProposalTemplateJSON)
        updateHistroy(elementsData, bodySettingData)
        return elementsData;
    }



    const onDragUpdate = (update: DragUpdate) => {
        if (update.source.droppableId === "blocks-droppable" || update.source.droppableId === "predefined-blocks-droppable") {
            setRemoveTransform(true)
        }
        setOnHover({ ...onHover, onSectionHover: false, onContentHover: false })
        if (!update.destination) {
            return;
        }
        const draggableId = update.destination.droppableId;
        const destinationIndex = update.destination.index;
        const draggableElementId = `[data-rbd-draggable-id='${update.draggableId}']`
        const draggableElement: Element | null = document.querySelector(draggableElementId);
        if (draggableElement !== null)
            setDraggedElement(draggableElement.innerHTML)
        const queryAttr = "data-rbd-droppable-id";
        const domQuery = `[${queryAttr}='${draggableId}']`;
        const draggedDOM: any = document.querySelector(domQuery);

        if (!draggedDOM) {
            return;
        }
        const { clientHeight, clientWidth } = draggedDOM;

        let childrenEle = draggedDOM.children;

        let clientY
        if (draggedDOM.children[0].className === 'empty-pad-content') {
            clientY = "20px"
        }
        else {
            clientY = parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) + [...childrenEle]
                .slice(0, destinationIndex)
                .reduce((total, curr) => {
                    const style = curr.currentStyle || window.getComputedStyle(curr);
                    const marginBottom = parseFloat(style.marginBottom);
                    return total + curr.clientHeight + marginBottom;
                }, 0);
        }
        setPlaceholderProps({
            clientHeight, clientWidth, clientY, clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft)
        });
    };

    const onDragEnd = (results: DropResult) => {
        console.log(results);
        const getDroppedDetails: string[] | any = results.destination?.droppableId.split("-");
        const getSourceDetails: string[] | any = results.source.droppableId.split("-")
        setOnHover({ ...onHover, onSectionHover: false, onContentHover: false })

        // For Dropping row from sibebar
        if ((results.destination?.droppableId === "editor" || results.destination?.droppableId === "block") && results.source.droppableId === "blocks-droppable") {
            const newElements = proposalTemplateJSON.elements
            const addElement = StaticColumns[results.source.index];
            addElement.id = uuid()
            const clone = JSON.parse(JSON.stringify(addElement))
            newElements.splice(results.destination?.index, 0, clone)
            updateBuilderData(newElements, proposalTemplateJSON.proposalSettings)
        }

        // For dropping content from sidebar
        if (results.source.droppableId === "content-droppable" && results.type === "content") {
            if (results.draggableId === "column-0-product_list-0" && getDroppedDetails) {
                PARENT.Engagebay_Proposal_Router_Utils.addEditProducts(
                    undefined, function (updatedProposalJSON: contentContentOptions) {
                        setProposalProducts(updatedProposalJSON);
                        console.log(updatedProposalJSON);

                        dropContents(results, getDroppedDetails)

                        //fillProductList($container);
                        // Fetch proposla amount
                        getReq("/rest/api/panel/proposals/get-amount", {
                            'product_details': JSON.stringify(updatedProposalJSON?.proposal_products),
                            'currency': PARENT.currentUserPrefs.get("currency"),
                        }).then((response: any) => {

                            console.log(response.data.total_amount)
                            setTotalAmount(response.data.total_amount);


                        }).catch((e) => {
                            // setLoading(false);
                        });
                        // $
                        //     .ajax({
                        //         type: "GET",
                        //         data: {
                        //             'product_details': JSON.stringify(PROPOSAL_JSON.proposal_products),
                        //             'currency': PROPOSAL_JSON.currency,
                        //             'discount': PROPOSAL_JSON.proposal_products.discount
                        //         },
                        //         dataType: 'json',
                        //         url: "/rest/api/panel/proposals/get-amount",
                        //         success: function (response) {

                        //             $container
                        //                 .find('#calculatedProposalTotalAmount')
                        //                 .html(
                        //                     PROPOSAL_JSON.currency.split('-')[1]
                        //                     + (Math
                        //                         .round(response.total_amount * 100) / 100));

                        //         },
                        //         error: function (error) {
                        //             console.log("error");
                        //         }

                        //     });
                    });
                return;

            }
            dropContents(results, getDroppedDetails)
        }

        // For shuffleing content in rows
        if (results.type === "content" && getDroppedDetails) {
            if (getDroppedDetails[4] === "contentDropping" && getSourceDetails[4] === "contentDropping") {
                const newElements = proposalTemplateJSON.elements
                const addContent = newElements[getSourceDetails[1]].columns[getSourceDetails[3]].contents[results.source.index];
                newElements[getSourceDetails[1]].columns[getSourceDetails[3]].contents.splice(results.source.index, 1)
                newElements[getDroppedDetails[1]].columns[getDroppedDetails[3]].contents.splice(results.destination?.index, 0, addContent)
                console.log(newElements, "shuffleing successfull ");
                updateBuilderData(newElements, proposalTemplateJSON.proposalSettings)


            }
        }


        // For Row Shuffleing in editor
        if (results.source.droppableId === "editor" && results.destination?.droppableId === "editor") {
            const newElements = proposalTemplateJSON.elements
            const addRow = newElements[results.source.index]
            newElements.splice(results.source.index, 1)
            newElements.splice(results.destination?.index, 0, addRow)
            console.log(newElements, "rows shuffleing successfull ");
            updateBuilderData(newElements, proposalTemplateJSON.proposalSettings)
        }
    }

    function dropContents(results: DropResult, getDroppedDetails: string[] | any) {
        const newElements = proposalTemplateJSON.elements
        const addContent = StaticContents[0].columns[0].contents[results.source.index]
        addContent.id = uuid()
        const clone = JSON.parse(JSON.stringify(addContent))
        if (getDroppedDetails)
            newElements[getDroppedDetails[1]].columns[getDroppedDetails[3]].contents.splice(results.destination?.index, 0, clone)
        updateBuilderData(newElements, proposalTemplateJSON.proposalSettings)
    }

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>

            {addProductModal == true ? <AddProduct addProductModal={addProductModal} setAddProductModal={setAddProductModal} editProductsModal={editProductsModal} setEditProductsModal={setEditProductsModal} /> : <></>}


            {editProductsModal == true ? <EditAndSaveProducts addProductModal={addProductModal} setAddProductModal={setAddProductModal} editProductsModal={editProductsModal} setEditProductsModal={setEditProductsModal} /> : <></>}



            {/* </div>
            </DragDropContext > */}
            <BrowserRouter>
                <Disclosure as="header" className="bg-white shadow">
                    {({ open }) => (
                        <>
                            <div className=" px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                                <div className="relative flex h-16 justify-between">
                                    <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                        <span className="relative mr-4 flex-shrink-0">
                                            <span title="Back" className="" >
                                                {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" ><path className="st0" d="M42.5,22.5H14.7l10.9-10.9c1-1,1-2.6,0-3.6c-1-1-2.6-1-3.6,0L5,25l17,17c0.5,0.5,1.1,0.7,1.8,0.7 s1.3-0.2,1.8-0.7c1-1,1-2.6,0-3.6L14.7,27.5h27.7c1.4,0,2.5-1.1,2.5-2.5C45,23.6,43.9,22.5,42.5,22.5z"></path>
                        </svg> */}
                                                <svg className="eb-icon-svg" style={{ width: "16px", height: "16px" }} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

                                                    <g>
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <path className="st0" d="M22.6,10.9c0,0.3-0.2,0.9-0.5,1.2L9,25.3L21.7,38c0.7,0.7,0.7,1.7,0,2.2c-0.7,0.7-1.7,0.7-2.2,0l-14-14      c-0.7-0.7-0.7-1.7,0-2.2L19.8,9.7c0.7-0.7,1.7-0.7,2.2,0C22.4,10.1,22.6,10.4,22.6,10.9z" />
                                                                </g>
                                                                <g>
                                                                    <path className="st0" d="M45,25.1c0,0.9-0.7,1.7-1.7,1.7H8.8c-0.9,0-1.7-0.7-1.7-1.7c0-1,0.7-1.7,1.7-1.7h34.7      C44.3,23.4,45,24.2,45,25.1z" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                        </span>
                                        <div className="flex flex-shrink-0 items-center">
                                            <img style={{ height: "23px" }} src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png" width="auto" alt="Logo" className="h-8 w-auto" />
                                        </div>
                                    </div>


                                    <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center top-bar-right-section">

                                        <button disabled={histroyPosition < 1} onClick={() => handleUndo()} className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border-1" title="Undo">
                                            <span>
                                                {/* <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                                                    <path d="M5.3,19.3L15,9.6c0.4-0.4,1-0.4,1.3,0s0.4,1,0,1.3L8.3,19h16.1C35.7,19,45,28.3,45,39.7c0,0.5-0.4,1-1,1  c-0.5,0-1-0.4-1-1c0-10.3-8.4-18.8-18.8-18.8H8.3l8.1,8.1c0.4,0.4,0.4,1,0,1.3c-0.2,0.2-0.4,0.3-0.7,0.3c-0.2,0-0.5-0.1-0.7-0.3  l-9.7-9.7C5.1,20.5,5,20.2,5,20C5,19.7,5.1,19.5,5.3,19.3z" />
                                                </svg> */}
                                                <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

                                                    <path className="st0" d="M30.4,14.5H9.9l5.9-5.9c0.5-0.5,0.5-1.4,0-2s-1.4-0.5-2,0L5.4,15c-0.5,0.5-0.5,1.4,0,2l8.4,8.4  c0.3,0.3,0.6,0.4,1,0.4c0.4,0,0.7-0.1,1-0.4c0.5-0.5,0.5-1.4,0-2l-6.1-6.1h20.7c6.5,0,11.8,5.3,11.8,11.8c0,6.5-5.3,11.8-11.8,11.8  H17.8c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4h12.6c8.1,0,14.6-6.6,14.6-14.6S38.4,14.5,30.4,14.5z" />
                                                </svg>
                                            </span>
                                        </button>

                                        <button disabled={histroyPosition === actionHistory.length - 1} onClick={() => handleRedo()} className="rounded-md bg-white ml-3 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border-1" title="Redo">
                                            <span>
                                                {/* <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                                                    <path d="M5.3,19.3L15,9.6c0.4-0.4,1-0.4,1.3,0s0.4,1,0,1.3L8.3,19h16.1C35.7,19,45,28.3,45,39.7c0,0.5-0.4,1-1,1  c-0.5,0-1-0.4-1-1c0-10.3-8.4-18.8-18.8-18.8H8.3l8.1,8.1c0.4,0.4,0.4,1,0,1.3c-0.2,0.2-0.4,0.3-0.7,0.3c-0.2,0-0.5-0.1-0.7-0.3  l-9.7-9.7C5.1,20.5,5,20.2,5,20C5,19.7,5.1,19.5,5.3,19.3z" />
                                                </svg> */}
                                                <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">

                                                    <path className="st0" d="M19.6,14.5h20.5l-5.9-5.9c-0.5-0.5-0.5-1.4,0-2c0.5-0.5,1.4-0.5,2,0l8.4,8.4c0.5,0.5,0.5,1.4,0,2l-8.4,8.4  c-0.3,0.3-0.6,0.4-1,0.4s-0.7-0.1-1-0.4c-0.5-0.5-0.5-1.4,0-2l6.1-6.1H19.6c-6.5,0-11.8,5.3-11.8,11.8c0,6.5,5.3,11.8,11.8,11.8  h12.6c0.8,0,1.4,0.6,1.4,1.4c0,0.8-0.6,1.4-1.4,1.4H19.6C11.6,43.8,5,37.2,5,29.1S11.6,14.5,19.6,14.5z" />
                                                </svg>
                                            </span>
                                        </button>

                                        <div className="rounded-md bg-white px-3 ml-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border-1" title="Preview">
                                            <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                                                <g id="g549" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                                                    <g id="g551">
                                                        <g>
                                                            <g id="g553">
                                                                <g id="g559" transform="translate(497,196)">
                                                                    <g id="path561">
                                                                        <path d="M-478.3,284c-8.1,0-14.5,8.7-14.8,9.1c-0.3,0.4-0.3,0.9,0,1.2c0.3,0.4,6.7,9.1,14.8,9.1c8.1,0,14.5-8.7,14.8-9.1        c0.3-0.4,0.3-0.9,0-1.2C-463.7,292.8-470.1,284-478.3,284z M-490.9,293.8c1.6-1.9,6.7-7.6,12.6-7.6c5.9,0,11.1,5.7,12.6,7.6        c-1.6,1.9-6.7,7.6-12.6,7.6C-484.1,301.4-489.3,295.7-490.9,293.8z" />
                                                                    </g>
                                                                </g>
                                                                <g id="g563" transform="translate(256,466)">
                                                                    <g id="path565">
                                                                        <path d="M-237.3,34.9c-0.6,0-1,0.5-1,1v3.5c0,0.6,0.5,1,1,1s1-0.5,1-1v-3.5C-236.2,35.4-236.7,34.9-237.3,34.9z" />
                                                                    </g>
                                                                </g>
                                                                <g id="g567" transform="translate(136,436)">
                                                                    <g id="path569">
                                                                        <path d="M-122.8,63.8c-0.4,0-0.8,0.2-0.9,0.6l-1.4,2.8c-0.3,0.5,0,1.1,0.5,1.4c0.5,0.3,1.1,0,1.4-0.5l1.4-2.8        c0.3-0.5,0-1.1-0.5-1.4C-122.5,63.8-122.6,63.8-122.8,63.8z" />
                                                                    </g>
                                                                </g>
                                                                <g id="g571" transform="translate(376,436)">
                                                                    <g id="path573">
                                                                        <path d="M-351.7,63.8c-0.2,0-0.3,0-0.5,0.1c-0.5,0.3-0.7,0.9-0.5,1.4l1.4,2.8c0.3,0.5,0.9,0.7,1.4,0.5        c0.5-0.3,0.7-0.9,0.5-1.4l-1.4-2.8C-351,64-351.3,63.8-351.7,63.8z" />
                                                                    </g>
                                                                </g>
                                                                <g id="g575" transform="translate(46,376)">
                                                                    <g id="path577">
                                                                        <path d="M-37.4,121.2c-0.3,0-0.5,0.1-0.7,0.3l-2,2c-0.4,0.4-0.4,1.1,0,1.5c0.4,0.4,1.1,0.4,1.5,0l2-2c0.4-0.4,0.4-1.1,0-1.5        C-36.9,121.3-37.2,121.2-37.4,121.2z" />
                                                                    </g>
                                                                </g>
                                                                <g id="g579" transform="translate(466,376)">
                                                                    <g id="path581">
                                                                        <path d="M-437.1,121.2c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1.1,0,1.5l2,2c0.4,0.4,1.1,0.4,1.5,0c0.4-0.4,0.4-1.1,0-1.5l-2-2        C-436.5,121.3-436.8,121.2-437.1,121.2z" />
                                                                    </g>
                                                                </g>
                                                                <g id="g583" transform="translate(346,196)">
                                                                    <g id="path585">
                                                                        <path d="M-327.3,288.2c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6S-324.1,288.2-327.3,288.2z M-327.3,297.5        c-2.1,0-3.7-1.7-3.7-3.7s1.7-3.7,3.7-3.7s3.7,1.7,3.7,3.7S-325.2,297.5-327.3,297.5z" />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>

                                        <button
                                            type="button"
                                            className="rounded-md bg-blue-600 ml-3 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                            onClick={() => setSaveModal(true)}
                                        >
                                            save
                                        </button>




                                    </div>
                                </div>

                                <nav className="hidden lg:flex lg:space-x-8 lg:py-2 justify-center" aria-label="Global">

                                    <a

                                        className={classNames(
                                            //  item.current ? 'bg-gray-100 text-gray-900' : 
                                            'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                            'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium'
                                        )}
                                    //aria-current={item.current ? 'page' : undefined}
                                    >
                                        <Link to="/">Design</Link>
                                    </a>

                                    <a

                                        className={classNames(
                                            //  item.current ? 'bg-gray-100 text-gray-900' : 
                                            'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                            'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium'
                                        )}
                                    //aria-current={item.current ? 'page' : undefined}
                                    >
                                        <Link to="/settings">Settings</Link>
                                    </a>

                                    <a

                                        className={classNames(
                                            //  item.current ? 'bg-gray-100 text-gray-900' : 
                                            'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                            'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium'
                                        )}
                                    //aria-current={item.current ? 'page' : undefined}
                                    >
                                        <Link to="/email">Email</Link>
                                    </a>

                                    <a

                                        className={classNames(
                                            //  item.current ? 'bg-gray-100 text-gray-900' : 
                                            'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                            'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium'
                                        )}
                                    //aria-current={item.current ? 'page' : undefined}
                                    >
                                        <Link to="/insights">Insights</Link>
                                    </a>

                                </nav>

                                {saveModal == true ? <Save saveModal={saveModal} setSaveModal={setSaveModal} /> : <></>}


                            </div>


                        </>
                    )}
                </Disclosure>

                <Routes>
                    <Route path='/' />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/email' element={<Email />} />
                    <Route path='/insights' element={<Insights />} />
                </Routes>
            </BrowserRouter>
            <ProposalBuilderContext.Provider value={{ confirmationModal, setConfirmationModal, fallbackMode, proposalTemplateJSON, predefinedTemplates, setPredefindedTemplates, setProposalTemplateJSON, updateBuilderData, activeElement, setActiveElement, onHover, setOnHover }}>
                <DragDropContext
                    onDragEnd={onDragEnd}
                    onDragUpdate={onDragUpdate}                >
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-1 vh-100">
                            <div className="hidden sm:block">
                                <div className="border-b border-gray-200">
                                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">

                                        <a
                                            onClick={() => { setShowTabPane(true); hideEditModule(); sethandleTabComponents("content") }}

                                            className={classNames(
                                                (handleTabComponents == "content")
                                                    ? 'border-blue-500 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                ' border-b-2 py-4 px-1 flex items-center text-center text-sm font-medium'
                                            )}
                                        >
                                            <span className="me-1">
                                                <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><g> <g> <path d="M20.5,40.1h-9.6c-3.2,0-5.9-2.6-5.9-5.9v-21c0-3.2,2.6-5.9,5.9-5.9h21c3.2,0,5.9,2.6,5.9,5.9V21c0,0.8-0.6,1.4-1.4,1.4 S35,21.8,35,21v-7.8c0-1.7-1.4-3.1-3.1-3.1h-21c-1.7,0-3.1,1.4-3.1,3.1v21c0,1.7,1.4,3.1,3.1,3.1h9.6c0.8,0,1.4,0.6,1.4,1.4 C21.8,39.5,21.2,40.1,20.5,40.1z"></path> </g> <g> <path d="M29.5,19H13.3c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h16.2c0.8,0,1.4,0.6,1.4,1.4C30.8,18.4,30.2,19,29.5,19z"></path> </g> <g> <path d="M22.5,26.5h-9.2c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4h9.2c0.8,0,1.4,0.6,1.4,1.4C23.9,25.9,23.3,26.5,22.5,26.5z"></path> </g> <g> <path d="M40.2,42.6c-0.9,0-1.8-0.4-2.5-1.1l-8.9-8.9c-0.4-0.4-0.7-0.9-0.9-1.4L26.7,26c-0.1-0.5,0-1,0.4-1.3 c0.3-0.3,0.8-0.5,1.3-0.4l5.1,1.1c0.7,0.2,1.2,0.5,1.6,0.9l8.9,8.9c0.7,0.7,1.1,1.6,1.1,2.5c0,1-0.4,1.9-1.1,2.5l-1.2,1.2 C42,42.3,41.1,42.6,40.2,42.6z M30.6,30.5c0,0,0.1,0.1,0.2,0.2l8.9,8.9c0.3,0.3,0.8,0.3,1.1,0l1.2-1.2c0,0,0,0,0,0 c0.2-0.2,0.2-0.4,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6l-8.9-8.9c-0.1-0.1-0.2-0.2-0.3-0.2l-2.9-0.6L30.6,30.5L30.6,30.5z"></path> </g> </g></svg>
                                            </span>
                                            <span>Content</span>
                                        </a>

                                        <a
                                            onClick={() => { setShowTabPane(true); hideEditModule(); sethandleTabComponents("blocks") }}

                                            className={classNames(
                                                (handleTabComponents == "blocks")
                                                    ? 'border-blue-500 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                ' border-b-2 flex items-center py-4 px-1 text-center text-sm font-medium'
                                            )}
                                        >
                                            <span className="me-1">
                                                <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><g> <path d="M17.7,5.3H9.8C7.2,5.3,5,7.4,5,10.1V18c0,2.7,2.2,4.8,4.8,4.8h7.9c2.7,0,4.8-2.2,4.8-4.8v-7.9C22.5,7.4,20.4,5.3,17.7,5.3z M19.7,18c0,1.1-0.9,2-2,2H9.8c-1.1,0-2-0.9-2-2v-7.9c0-1.1,0.9-2,2-2h7.9c1.1,0,2,0.9,2,2V18z"></path> <path d="M40.2,5.3h-7.9c-2.7,0-4.8,2.2-4.8,4.8V18c0,2.7,2.2,4.8,4.8,4.8h7.9c2.7,0,4.8-2.2,4.8-4.8v-7.9C45,7.4,42.8,5.3,40.2,5.3 z M42.2,18c0,1.1-0.9,2-2,2h-7.9c-1.1,0-2-0.9-2-2v-7.9c0-1.1,0.9-2,2-2h7.9c1.1,0,2,0.9,2,2V18z"></path> <path d="M17.7,27.2H9.8C7.2,27.2,5,29.4,5,32v7.9c0,2.7,2.2,4.8,4.8,4.8h7.9c2.7,0,4.8-2.2,4.8-4.8V32 C22.5,29.4,20.4,27.2,17.7,27.2z M19.7,39.9c0,1.1-0.9,2-2,2H9.8c-1.1,0-2-0.9-2-2V32c0-1.1,0.9-2,2-2h7.9c1.1,0,2,0.9,2,2V39.9z"></path> <path d="M40.2,27.2h-7.9c-2.7,0-4.8,2.2-4.8,4.8v7.9c0,2.7,2.2,4.8,4.8,4.8h7.9c2.7,0,4.8-2.2,4.8-4.8V32 C45,29.4,42.8,27.2,40.2,27.2z M42.2,39.9c0,1.1-0.9,2-2,2h-7.9c-1.1,0-2-0.9-2-2V32c0-1.1,0.9-2,2-2h7.9c1.1,0,2,0.9,2,2V39.9z"></path> </g></svg>
                                            </span>
                                            <span>Columns</span>
                                        </a>
                                        <a
                                            onClick={() => { setShowTabPane(true); hideEditModule(); sethandleTabComponents("templates") }}

                                            className={classNames(
                                                (handleTabComponents == "templates")
                                                    ? 'border-blue-500 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                ' border-b-2 py-4 px-1 text-center text-sm font-medium flex items-center'
                                            )}
                                        >
                                            <span className="me-1">
                                                <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="eb-icon-svg"><path d="M42.6,19.2c-1.7-1.7-3.5-3.5-5.2-5.2l-1.7-1.7c-0.1-0.1-0.2-0.2-0.4-0.3l-0.1-0.1c-0.6-0.5-1.4-0.5-1.9,0.1L31.1,14 c-1.3,1.3-2.6,2.6-3.9,3.9c-0.3,0.3-0.7,0.3-1,0c-0.2-0.1-0.2-0.3-0.2-0.5c0-0.2,0.1-0.4,0.3-0.6c1.3-1.3,2.6-2.6,3.9-3.9l2.1-2.1 c0.5-0.5,0.5-1.4,0-2l-0.5-0.5c-0.4-0.4-0.7-0.7-1-1c-3.2-3.1-7.9-3-11,0.1c-1.4,1.4-2.9,2.9-4.3,4.3l-4.7,4.7c0,0,0,0.1-0.1,0.1 c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.2-0.3,0.4c0,0,0,0,0,0c-2.1,2.5-2.4,6.3-0.7,9c0.6,0.9,1.4,1.7,2.1,2.4l0.5,0.5 c0.1,0.1,0.1,0.2,0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2l-0.2,0.2c-1.2,1.3-2.7,2.3-4.1,3.1C6.3,33.5,5.3,35,5,36.7 c-0.2,1.7,0.3,3.4,1.6,4.7c0.6,0.7,1.3,1.4,2,2c1.1,1,2.5,1.6,4,1.6c0.2,0,0.4,0,0.7,0c1.7-0.2,3.2-1.2,4.2-2.7 c0.7-1.1,1.5-2.3,2.3-3.3c0.3-0.4,0.8-0.8,1.3-1.2c0.6,0.6,1.2,1.2,1.8,1.7c1.5,1.4,3.2,2.1,5.2,2.1c0,0,0.1,0,0.1,0 c2.1,0,3.9-0.8,5.5-2.2c0,0,0,0,0,0c0,0,0,0,0,0l8.8-8.8C45.8,27.3,45.8,22.5,42.6,19.2z M28.1,38.9c-1.3,0-2.4-0.5-3.4-1.4 c-0.7-0.7-1.4-1.4-2.1-2.1c-0.9-0.9-2-0.8-2.7-0.3c-0.2,0.1-0.4,0.3-0.6,0.4c-0.6,0.5-1.3,0.9-1.8,1.6c-1,1.2-1.8,2.4-2.5,3.6 c-0.5,0.8-1.3,1.3-2.2,1.5c-0.8,0.1-1.7-0.2-2.4-0.8c-0.6-0.6-1.3-1.2-1.9-1.9c-0.6-0.7-0.9-1.5-0.8-2.4c0.1-0.9,0.6-1.6,1.4-2.1 c1.6-1,3.3-2.1,4.8-3.8c0,0,0.1-0.2,0.2-0.2c1.4-1.6,1.4-2.6-0.1-4.2l-0.6-0.6c-0.7-0.7-1.3-1.3-1.7-2c-0.9-1.4-0.9-3.3-0.1-4.8 l18.8,18.8C29.8,38.7,29.1,38.9,28.1,38.9z M40.6,28.6l-7.8,7.8L13.6,17.3l3.7-3.7c1.4-1.4,2.8-2.9,4.3-4.3c2-2,5.1-2,7.1,0 c0.2,0.2,0.3,0.3,0.5,0.5l-1.1,1.1c-1.3,1.3-2.6,2.6-3.9,3.9c-0.7,0.7-1.1,1.6-1.1,2.5c0,0.9,0.4,1.8,1.1,2.5c1.4,1.4,3.5,1.4,5,0 c1.3-1.3,2.6-2.6,3.9-3.9l1.2-1.2l1.2,1.2c1.7,1.7,3.5,3.5,5.2,5.2C42.8,23.4,42.8,26.4,40.6,28.6z"></path></svg>
                                            </span>
                                            <span>Blocks</span>
                                        </a>
                                    </nav>
                                </div>
                            </div>

                            <Droppable droppableId="sidebar">
                                {(provided, snapshotDroppable: DroppableSnapshot) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        <Sidebar handleTabComponents={handleTabComponents} showTabPane={showTabPane} setShowTabPane={setShowTabPane} />
                                    </div>
                                )}
                            </Droppable>
                        </div>
                        <div className="col-span-3 vh-100">
                            <div className={removeTransform ? "section-container landingpage-builder-content remove-transform" : "section-container landingpage-builder-content"} style={droppableStyles}>
                                <Droppable droppableId="editor">
                                    {(provided: DroppableProvided, snapshotDroppable: DroppableSnapshot) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            <Editor setShowRightSettings={setShowRightSettings} removeTransform={removeTransform} previewDevicetype={previewDevicetype} snapshot={snapshotDroppable} getDraggedElement={getDraggedElement} placeholderProps={placeholderProps} setShowBodySetting={setShowBodySetting} proposalProducts={proposalProducts} totalAmount={totalAmount} />
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </div>
                        <div className="col-span-1 vh-100">
                            <div className="hidden sm:block">
                                <div className="border-b border-gray-200">
                                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">

                                        <a
                                            onClick={() => setShowRightSettings("contents")}
                                            className={classNames(
                                                (showRightSettings == "contents")
                                                    ? 'border-blue-500 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                ' border-b-2 py-4 px-1 flex items-center text-center text-sm font-medium'
                                            )}
                                        >

                                            <span>{activeElement.elementType ? activeElement.elementType : "Content"}</span>
                                        </a>

                                        <a
                                            onClick={() => setShowRightSettings("styles")}
                                            className={classNames(
                                                (showRightSettings == "styles")
                                                    ? 'border-blue-500 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                ' border-b-2 py-4 px-1 text-center text-sm font-medium flex items-center'
                                            )}
                                        >

                                            <span>Styles</span>
                                        </a>
                                    </nav>
                                    <div className="tab-content lp-tab-content-container left-panel-scroll" id="nav-tabContent">
                                        <div className={showRightSettings === "contents" ? "lp-tab-content tab-pane fade show active" : "tab-pane fade show"} id="editorSettings" role="tabpanel" aria-labelledby="nav-home-tab">
                                            <div className="bg-white pb-0">
                                                <ContentStyleEditor setShowBodySetting={setShowBodySetting} showBodySetting={showBodySetting} />
                                            </div>
                                        </div>
                                        <div className={showRightSettings === "styles" ? "lp-tab-content tab-pane fade show active" : "tab-pane fade show"} id="bodySettings" role="tabpanel" aria-labelledby="nav-profile-tab">
                                            <BodySetting proposalSettings={proposalTemplateJSON.proposalSettings} setShowBodySetting={setShowBodySetting} showBodySetting={showBodySetting} />
                                        </div>
                                    </div>
                                    {/* <div id="accordionExample5">
                                        <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                            <h2 className="mb-0" id="headingOne5">
                                                <button
                                                    className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                                    type="button"
                                                    data-te-collapse-init=""
                                                    data-te-target="#collapseOne5"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne5"
                                                >
                                                    Accordion Item #1
                                                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="h-6 w-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne5"
                                                className="!visible"
                                                data-te-collapse-item=""
                                                data-te-collapse-show=""
                                                aria-labelledby="headingOne5"
                                            >
                                                <div className="px-5 py-4">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                                    default, until the collapse plugin adds the appropriate classes that we
                                                    use to style each element. These classes control the overall appearance,
                                                    as well as the showing and hiding via CSS transitions. You can modify
                                                    any of this with custom CSS or overriding our default variables. It's
                                                    also worth noting that just about any HTML can go within the{" "}
                                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                            <h2 className="mb-0" id="headingTwo5">
                                                <button
                                                    className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                                    type="button"
                                                    data-te-collapse-init=""
                                                    data-te-collapse-collapsed=""
                                                    data-te-target="#collapseTwo5"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo5"
                                                >
                                                    Accordion Item #2
                                                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="h-6 w-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo5"
                                                className="!visible hidden"
                                                data-te-collapse-item=""
                                                aria-labelledby="headingTwo5"
                                            >
                                                <div className="px-5 py-4">
                                                    <strong>This is the second item's accordion body.</strong> It is hidden
                                                    by default, until the collapse plugin adds the appropriate classes that
                                                    we use to style each element. These classes control the overall
                                                    appearance, as well as the showing and hiding via CSS transitions. You
                                                    can modify any of this with custom CSS or overriding our default
                                                    variables. It's also worth noting that just about any HTML can go within
                                                    the <code>.accordion-body</code>, though the transition does limit
                                                    overflow.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                            <h2 className="mb-0" id="headingThree5">
                                                <button
                                                    className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                                                    type="button"
                                                    data-te-collapse-init=""
                                                    data-te-collapse-collapsed=""
                                                    data-te-target="#collapseThree5"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree5"
                                                >
                                                    Accordion Item #3
                                                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="h-6 w-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree5"
                                                className="!visible hidden"
                                                data-te-collapse-item=""
                                                aria-labelledby="headingThree5"
                                            >
                                                <div className="px-5 py-4">
                                                    <strong>This is the third item's accordion body.</strong> It is hidden
                                                    by default, until the collapse plugin adds the appropriate classes that
                                                    we use to style each element. These classes control the overall
                                                    appearance, as well as the showing and hiding via CSS transitions. You
                                                    can modify any of this with custom CSS or overriding our default
                                                    variables. It's also worth noting that just about any HTML can go within
                                                    the <code>.accordion-body</code>, though the transition does limit
                                                    overflow.
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}


                                </div>
                            </div>
                        </div>
                    </div>
                </DragDropContext>
            </ProposalBuilderContext.Provider>
        </>

    )
}

export default DesignBuilder