
import React, { useState } from 'react'

const Accordion = (props: any) => {
    const [accordion, setAccordion] = useState(false);
    return (
        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="accordion-header mb-0" id="headingOne">
                <button
                    className="group relative flex w-full items-center border-0 bg-white px-4 py-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                    type="button"
                    aria-expanded="false"
                    onClick={() => { setAccordion(!accordion) }}
                    data-te-collapse-init
                >
                    <label className='block text-sm font-medium leading-6 text-gray-900'>{props.title} </label><span
                        className={`-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[${accordion ? "-" : ""}180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>                </button>
            </h2>
            <div
                aria-labelledby="settings"
                className={`!visible ${accordion ? "" : "hidden"}`}
                data-te-collapse-item
                data-te-collapse-show
                data-te-parent="#settings"
            >
                <div className="px-4 py-3">
                    {props.accordionJSX()}
                </div>
            </div>
        </div>
    )

}

export default Accordion