

import { useContext, useState } from "react"
import { ProposalBuilderContext, ProposalBuilderContextPayload, sidebarType } from "../models/GeneralModels"
import Content from "./sidebarContents";
import Blocks from "./Blocks";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

//import ComputerTemplates from "./PredesignedBlocks";

function Sidebar(props: sidebarType) {

    const setting: ProposalBuilderContextPayload = useContext(ProposalBuilderContext);
    const { showTabPane, setShowTabPane, handleTabComponents } = props
    const [open, setOpen] = useState(true)



    function hideEditModule() {
        const updateSettings = setting?.activeElement
        if (updateSettings) {
            updateSettings.elementEditingModule = false
            setting.setActiveElement({ ...updateSettings })
        }
    }



    return (
        <>
            {/* {!setting?.activeElement?.elementEditingModule ? ( */}


            <div className={`tab-content w-100 ${!showTabPane ? "hide" : ""}`}>
                <div className={`tab-pane ${handleTabComponents === "blocks" ? "show active" : ""}`} id="Appearance" role="tabpanel" aria-labelledby="home-tab"><Blocks setShowTabPane={setShowTabPane} /></div>
                <div className={`tab-pane ${handleTabComponents === "content" ? "show active" : ""}`} id="Blocks" role="tabpanel" aria-labelledby="profile-tab"><Content setShowTabPane={setShowTabPane} /></div>
                {/* <div className={`tab-pane ${handleTabComponents === "templates" ? "show active" : ""}`} id="computerTemplate" role="tabpanel" aria-labelledby="profile-tab"><ComputerTemplates /></div> */}
            </div >

        </>
    );
}

export default Sidebar;