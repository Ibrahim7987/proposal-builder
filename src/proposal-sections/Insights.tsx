import React from 'react'
import SettingsComponent from '../settings/SettingsComponent'
import GreetingsComponent from '../settings/GreetingsComponent'
import Invitations from '../Insights/Invitations'
import Opens from '../Insights/Opens'
import Views from '../Insights/Views'
import Engaged from '../Insights/Engaged'

const Insights = () => {
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

                                Email Invitations
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


                                Email Opens
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

                                Views
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

                                Engaged
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-sm-9'>
                <div className='card p-4 vh-100'>
                </div>
            </div>
        </div>
    )
}

export default Insights