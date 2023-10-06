import { useContext, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { ContentPayload, socialLinks } from "../models/ContentModels";
import { ColumnPayload, ContentStyleEditorType, ProposalBuilderContext, ProposalBuilderContextPayload, SectionPayload } from "../models/GeneralModels";
import { contentAccordion, selectImage } from "../Utils";
import Accordion from "../Accordion";
import { Menu } from "@headlessui/react";
import Dropdown from "../Dropdown";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function SocialNetworks(props: ContentStyleEditorType) {
    const { elements } = props
    const defaultSocialLinks = [
        {
            link: "https://www.facebook.com/",
            alt: "Facebook"
        },
        {
            link: "https://twitter.com/",
            alt: "Twitter"
        },
        {
            link: "https://www.linkedin.com/",
            alt: "Linkedin"
        },
        {
            link: "https://www.instagram.com/",
            alt: "Instagram"
        },
        {
            link: "https://in.pinterest.com/",
            alt: "Pinterest"
        }, {
            link: "https://www.youtube.com/",
            alt: "Youtube"
        },
    ]
    const defaultEditModal = {
        networkIndex: -1,
        showModal: false
    }
    const contextData = useContext<ProposalBuilderContextPayload>(ProposalBuilderContext);

    const [showEditmodelSetting, setShowEditModel] = useState(defaultEditModal)


    function ondragEnd(results: DropResult) {
        const tempElements = elements
        tempElements.map((section: SectionPayload, rowIndex: number) => {
            return section.columns.map((column: ColumnPayload, columnIndex: number) => {
                return column.contents.map((content: ContentPayload, contentIndex: number) => {
                    if (content.type === "social" && content.options.socialLinks) {

                        const addNetwork = content.options.socialLinks[results.source.index];
                        content.options.socialLinks?.splice(results.source.index, 1);
                        if (results.destination) {
                            content.options.socialLinks?.splice(results.destination.index, 0, addNetwork);
                        }
                        contextData.updateBuilderData(tempElements, contextData.proposalTemplateJSON.proposalSettings)
                    }
                    return content
                })
            })
        })


    }



    function onChangeSocialMediaIcon(rowIndex: number, columnIndex: number, contentIndex: number, socialNetworkIndex: number, value: string) {

        const network = elements

        let links = network[rowIndex].columns[columnIndex].contents[contentIndex].options.socialLinks;

        if (links) {
            links[socialNetworkIndex].icon = value
            contextData.updateBuilderData(network, contextData.proposalTemplateJSON.proposalSettings)

        }

    }

    function onChangeSocialLink(rowIndex: number, columnIndex: number, contentIndex: number, socialNetworkIndex: number, value: string) {
        const network = elements

        let links = network[rowIndex].columns[columnIndex].contents[contentIndex].options.socialLinks;

        if (links) {
            links[socialNetworkIndex].link = value
            contextData.updateBuilderData(network, contextData.proposalTemplateJSON.proposalSettings)

        }

    }

    function onChangeSocialName(rowIndex: number, columnIndex: number, contentIndex: number, socialNetworkIndex: number, value: string) {
        const network = elements

        let links = network[rowIndex].columns[columnIndex].contents[contentIndex].options.socialLinks;

        if (links) {
            links[socialNetworkIndex].alt = value
            contextData.updateBuilderData(network, contextData.proposalTemplateJSON.proposalSettings)

        }

    }

    function removeNetwork(rowIndex: number, columnIndex: number, contentIndex: number, socialNetworkIndex: number) {

        const confirmationModalObj = {
            showModal: true,
            modalMessage: "Are you sure ?",
            btnText: "Delete",
            callBack: () => {
                const network = elements
                let links = network[rowIndex].columns[columnIndex].contents[contentIndex].options.socialLinks;
                if (links) {
                    links.splice(socialNetworkIndex, 1)
                }
                contextData.updateBuilderData(network, contextData.proposalTemplateJSON.proposalSettings)
                contextData.setConfirmationModal({ ...contextData.confirmationModal, showModal: false })
                return;

            },
            modalTitle: "Delete Network"
        }
        contextData.setConfirmationModal({ ...confirmationModalObj })


    }

    function addNewNetwork() {
        const elements = contextData.proposalTemplateJSON.elements
        const newNetwork = {
            alt: 'Facebook',
            icon: 'https://d2p078bqz5urf7.cloudfront.net/cloud/email-builder/email-builder-icons/social-icons/facebook.png',
            link: 'https://www.facebook.com/',
        }
        if (contextData && contextData.activeElement?.elementType === "content") {
            return elements.map((section: SectionPayload, rowIndex: number) => {
                return section.columns.map((column: ColumnPayload, columnIndex: number) => {
                    return column.contents.map((content: ContentPayload, contentIndex: number) => {
                        if (content.id === contextData.activeElement?.elementId && content.options.socialLinks) {
                            content.options.socialLinks.push(newNetwork)
                            contextData.updateBuilderData(elements, contextData.proposalTemplateJSON.proposalSettings)
                        }
                    })
                })
            })
        }
    }

    const selectRepoImage = (rowIndex: number, columnIndex: number, contentIndex: number, socialNetworkIndex: number) => {

        selectImage(['png',
            'jpg', 'jpeg', 'gif', 'bmp'], function (file: any) {

                const network = elements

                let links = network[rowIndex].columns[columnIndex].contents[contentIndex].options.socialLinks;

                if (links) {
                    links[socialNetworkIndex].icon = file.url
                    contextData.updateBuilderData(network, contextData.proposalTemplateJSON.proposalSettings)

                }
            });


    }

    return (
        < >


            <Accordion title="Social Networks" accordionJSX={() => {
                return (<DragDropContext onDragEnd={(results) => ondragEnd(results)}>
                    <div className=" flex justify-between">
                        <div className="text-sm leading-6">
                            Socials Links
                        </div>
                        <div onClick={() => addNewNetwork()} className="text-sm leading-6 text-primary cursor-pointer">
                            + Add Network
                        </div>
                    </div>
                    <Droppable droppableId="SocialNetworks">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="py-2"
                            >
                                {elements.map((section: SectionPayload, rowIndex: number) => {
                                    return section.columns.map((column: ColumnPayload, columnIndex: number) => {
                                        return column.contents.map((content: ContentPayload, contentIndex: number) => {
                                            if (content.type === "social" && content.id === contextData.activeElement?.elementId) {
                                                return content.options.socialLinks?.map((social: socialLinks, socialNetworkIndex: number) => {
                                                    return (
                                                        <>
                                                            <Draggable draggableId={`${socialNetworkIndex}`} index={socialNetworkIndex}>
                                                                {(provided) => (
                                                                    <div
                                                                        {...provided.draggableProps}
                                                                        ref={provided.innerRef}
                                                                    >
                                                                        <div className="text-start p-2 bg-slate-50 mb-2 relative">
                                                                            <div className="flex items-center">
                                                                                <span {...provided.dragHandleProps}>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48"><title>drag-arrow</title><g id="Layer_2" data-name="Layer 2"><g id="invisible_box" data-name="invisible box"><rect width="48" height="48" fill="none"></rect></g><g id="icons_Q2" data-name="icons Q2"><path d="M45.4,22.6l-5.9-6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L39.2,22H26V8.8l2.6,2.6a1.9,1.9,0,0,0,3-.2,2.1,2.1,0,0,0-.2-2.7l-6-5.9a1.9,1.9,0,0,0-2.8,0l-6,5.9a2.1,2.1,0,0,0-.2,2.7,1.9,1.9,0,0,0,3,.2L22,8.8V22H8.8l2.6-2.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-5.9,6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L8.8,26H22V39.2l-2.6-2.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7l6,5.9a1.9,1.9,0,0,0,2.8,0l6-5.9a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2L26,39.2V26H39.2l-2.6,2.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l5.9-6A1.9,1.9,0,0,0,45.4,22.6Z"></path></g></g></svg>
                                                                                </span>
                                                                                {social.icon ? (
                                                                                    <img className="ms-2" height={"auto"} width={30} src={social.icon} alt={social.alt} />
                                                                                ) : <></>}  <span className="ms-1 text-sm"> {social.alt}</span>
                                                                                <span className="flex  items-center absolute gap-1" style={{ right: "10px", top: "12px" }}>
                                                                                    <span className="cursor-pointer" onClick={() => setShowEditModel({ ...showEditmodelSetting, networkIndex: socialNetworkIndex, showModal: !showEditmodelSetting.showModal })}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                                                            <g id="style=linear">
                                                                                                <g id="edit">
                                                                                                    <path id="vector" d="M18.4101 3.6512L20.5315 5.77252C21.4101 6.6512 21.4101 8.07582 20.5315 8.9545L9.54019 19.9458C9.17774 20.3082 8.70239 20.536 8.19281 20.5915L4.57509 20.9856C3.78097 21.072 3.11061 20.4017 3.1971 19.6076L3.59111 15.9898C3.64661 15.4803 3.87444 15.0049 4.23689 14.6425L3.70656 14.1121L4.23689 14.6425L15.2282 3.6512C16.1068 2.77252 17.5315 2.77252 18.4101 3.6512Z" stroke="#000000" stroke-width="1.5" />
                                                                                                    <path id="vector_2" d="M15.2282 3.6512C16.1068 2.77252 17.5315 2.77252 18.4101 3.6512L20.5315 5.77252C21.4101 6.6512 21.4101 8.07582 20.5315 8.9545L18.7283 10.7576L13.425 5.45432L15.2282 3.6512Z" stroke="#000000" stroke-width="1.5" />
                                                                                                </g>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </span>
                                                                                    <span className="cursor-pointer" onClick={() => removeNetwork(rowIndex, columnIndex, contentIndex, socialNetworkIndex)}>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="16" height="16" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            {showEditmodelSetting.networkIndex === socialNetworkIndex && showEditmodelSetting.showModal ? (

                                                                                <div className="mt-2">


                                                                                    <Accordion title="Social" accordionJSX={() => {
                                                                                        return (
                                                                                            <>

                                                                                                <div className="mb-2 text-start">
                                                                                                    <div className=" flex justify-between items-center">
                                                                                                        <label className="block text-sm leading-6 text-gray-900">Link</label>
                                                                                                        {/* <button className="btn btn-link text-decoration-none p-0 dropdown-toggle float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">Options</button> */}

                                                                                                        <Dropdown title="Options" >
                                                                                                            {
                                                                                                                () => {
                                                                                                                    return (
                                                                                                                        defaultSocialLinks.map((socialLink: any) => {
                                                                                                                            return (
                                                                                                                                <Menu.Item>
                                                                                                                                    {({ active }) => (
                                                                                                                                        <a
                                                                                                                                            href="#"
                                                                                                                                            onClick={() => onChangeSocialLink(rowIndex, columnIndex, contentIndex, socialNetworkIndex, socialLink.link)}
                                                                                                                                            className={classNames(
                                                                                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                                                                                'block px-4 py-2 text-sm'
                                                                                                                                            )}
                                                                                                                                        >
                                                                                                                                            {socialLink.alt}
                                                                                                                                        </a>
                                                                                                                                    )}
                                                                                                                                </Menu.Item>
                                                                                                                            )
                                                                                                                        })
                                                                                                                    )
                                                                                                                }
                                                                                                            }
                                                                                                        </Dropdown>
                                                                                                    </div>
                                                                                                    {/* <ul className="dropdown-menu dropdown-menu-end">
                                                                                                            {defaultSocialLinks.map((socialLink: any) => {
                                                                                                                return (
                                                                                                                    <li onClick={() => onChangeSocialLink(rowIndex, columnIndex, contentIndex, socialNetworkIndex, socialLink.link)}><a className="dropdown-item">{socialLink.alt}</a></li>
                                                                                                                )
                                                                                                            })}
                                                                                                        </ul> */}
                                                                                                    <div className="mt-2">
                                                                                                        <input value={social.link} className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeSocialLink(rowIndex, columnIndex, contentIndex, socialNetworkIndex, e.target.value)} />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="text-start mb-2">
                                                                                                    <label className="block text-sm leading-6 text-gray-900">Alt</label>
                                                                                                    <div className="mt-2">
                                                                                                        <input className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeSocialName(rowIndex, columnIndex, contentIndex, socialNetworkIndex, e.target.value)} value={social.alt} />
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="upload">
                                                                                                    <div className="current-image">
                                                                                                        <img src={social.icon} alt={social.alt} />
                                                                                                    </div>
                                                                                                    <div className="upload-image">
                                                                                                        {/* <input className="form-control eb-form-control"
                                                                                                            // type="file" 
                                                                                                            onChange={(e) => onChangeSocialMediaIcon(rowIndex, columnIndex, contentIndex, socialNetworkIndex, e.target.value)} /> */}
                                                                                                        <button className="btn btn-primary mb-2" onClick={(e) => selectRepoImage(rowIndex, columnIndex, contentIndex, socialNetworkIndex)} >Upload Image</button>
                                                                                                        <input value={social.icon} className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeSocialMediaIcon(rowIndex, columnIndex, contentIndex, socialNetworkIndex, e.target.value)} placeholder="url" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </>
                                                                                        )
                                                                                    }} />
                                                                                </div>
                                                                            ) : <></>}


                                                                        </div>

                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        </>

                                                    )
                                                })
                                            }
                                        })
                                    })
                                })}
                                {provided.placeholder}
                            </div>
                        )
                        }

                    </Droppable>
                </DragDropContext>)
            }} />


        </>
    );
}

export default SocialNetworks;