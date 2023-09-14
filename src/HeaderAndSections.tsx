import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import DesignBuilder from './DesignBuilder'
import Settings from './proposal-sections/Settings'
import Email from './proposal-sections/Email'
import Insights from './proposal-sections/Insights'
import Save from './Modals/Save'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}



export default function HeaderAndSections() {
    const [saveModal, setSaveModal] = useState(false);
    return (
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

                                    <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border-1" title="Undo">
                                        <span>
                                            {/* <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                                                    <path d="M5.3,19.3L15,9.6c0.4-0.4,1-0.4,1.3,0s0.4,1,0,1.3L8.3,19h16.1C35.7,19,45,28.3,45,39.7c0,0.5-0.4,1-1,1  c-0.5,0-1-0.4-1-1c0-10.3-8.4-18.8-18.8-18.8H8.3l8.1,8.1c0.4,0.4,0.4,1,0,1.3c-0.2,0.2-0.4,0.3-0.7,0.3c-0.2,0-0.5-0.1-0.7-0.3  l-9.7-9.7C5.1,20.5,5,20.2,5,20C5,19.7,5.1,19.5,5.3,19.3z" />
                                                </svg> */}
                                            <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

                                                <path className="st0" d="M30.4,14.5H9.9l5.9-5.9c0.5-0.5,0.5-1.4,0-2s-1.4-0.5-2,0L5.4,15c-0.5,0.5-0.5,1.4,0,2l8.4,8.4  c0.3,0.3,0.6,0.4,1,0.4c0.4,0,0.7-0.1,1-0.4c0.5-0.5,0.5-1.4,0-2l-6.1-6.1h20.7c6.5,0,11.8,5.3,11.8,11.8c0,6.5-5.3,11.8-11.8,11.8  H17.8c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4h12.6c8.1,0,14.6-6.6,14.6-14.6S38.4,14.5,30.4,14.5z" />
                                            </svg>
                                        </span>
                                    </button>

                                    <button className="rounded-md bg-white ml-3 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border-1" title="Redo">
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
                <Route path='/' element={<DesignBuilder />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/email' element={<Email />} />
                <Route path='/insights' element={<Insights />} />
            </Routes>
        </BrowserRouter>
    )
}

