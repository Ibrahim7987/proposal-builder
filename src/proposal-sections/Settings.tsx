import React from 'react'
import SettingsComponent from '../settings/SettingsComponent';
import GreetingsComponent from '../settings/GreetingsComponent';

// Initialization for ES Users
import {
    Tab,
    Input,
    initTE,
} from "tw-elements";

initTE({ Tab });

initTE({ Input });

const Settings = () => {
    return (
        <div className='row  px-4 mt-3'>
            <div className='col-sm-3'>
                <div className='card p-2 vh-100'>
                    <ul
                        className="flex list-none flex-col flex-wrap pl-0"
                        role="tablist"
                        data-te-nav-ref=""
                    >
                        <li role="presentation" className="flex-grow text-center">
                            <a
                                href="#tabs-home03"
                                className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                data-te-toggle="pill"
                                data-te-target="#tabs-home03"
                                data-te-nav-active=""
                                role="tab"
                                aria-controls="tabs-home03"
                                aria-selected="true"
                            >

                                Settings
                            </a>
                        </li>
                        <li role="presentation" className="flex-grow text-center">
                            <a
                                href="#tabs-profile03"
                                className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                                data-te-toggle="pill"
                                data-te-target="#tabs-profile03"
                                role="tab"
                                aria-controls="tabs-profile03"
                                aria-selected="false"
                            >

                                Greetings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-sm-9'>
                <div className='card p-4 vh-100'>
                    <div className="my-2">
                        <div
                            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-home03"
                            role="tabpanel"
                            aria-labelledby="tabs-home-tab03"
                            data-te-tab-active=""
                        >






                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"

                            >
                                Proposal Fav Icon
                            </label>
                            <input
                                className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="large_size"
                                type="file"
                            />
                            <p
                                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                id="file_input_help"
                            >
                                Suggested size is 16x16 pixels
                            </p>




                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Page Title</label>
                                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Page Title' />
                            </div>




                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-profile03"
                            role="tabpanel"
                            aria-labelledby="tabs-profile-tab03"
                        >
                            <div className="flex items-center mb-3">
                                <input
                                    id="default-radio-1"
                                    type="radio"
                                    defaultValue=""
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="default-radio-1"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Text
                                </label>
                            </div>
                            <div className="flex items-center mb-3">
                                <input
                                    defaultChecked
                                    id="default-radio-2"
                                    type="radio"
                                    defaultValue=""
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="default-radio-2"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Video
                                </label>
                            </div>
                            <div className="flex items-center mb-3">
                                <input
                                    defaultChecked
                                    id="default-radio-3"
                                    type="radio"
                                    defaultValue=""
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="default-radio-3"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    None
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings