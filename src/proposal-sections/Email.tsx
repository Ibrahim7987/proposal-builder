import React, { Fragment, useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    { name: 'Wade Cooper', username: '@wadecooper' },
    { name: 'Arlene Mccoy', username: '@arlenemccoy' },
    { name: 'Devon Webb', username: '@devonwebb' },
    { name: 'Tom Cook', username: '@tomcook' },
    { name: 'Tanya Fox', username: '@tanyafox' },
    { name: 'Hellen Schmidt', username: '@hellenschmidt' },
    { name: 'Caroline Schultz', username: '@carolineschultz' },
    { name: 'Mason Heaney', username: '@masonheaney' },
    { name: 'Claudie Smitham', username: '@claudiesmitham' },
    { name: 'Emil Schaefer', username: '@emilschaefer' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}


const Email = () => {

    const [selected, setSelected] = useState(people[3])

    return (
        <div className="row  px-4 mt-3">
            <div className='col-12 col-lg-7 mx-auto'>
                <div className='card p-4 vh-100'>
                    <div className='mb-6'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                        <div className="flex">
                            <div className="flex items-center mr-4">
                                <input
                                    id="inline-radio"
                                    type="radio"
                                    defaultValue=""
                                    name="inline-radio-group"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="inline-radio"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Contacts
                                </label>
                            </div>
                            <div className="flex items-center mr-4">
                                <input
                                    id="inline-2-radio"
                                    type="radio"
                                    defaultValue=""
                                    name="inline-radio-group"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="inline-2-radio"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Companies
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className='mb-6'>
                        <Listbox value={selected} onChange={setSelected} >
                            {({ open }) => (
                                <>
                                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">From Email </Listbox.Label>
                                    <div className="relative mt-2">
                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                            <span className="inline-flex w-full truncate">
                                                <span className="truncate">{selected.name}</span>
                                                <span className="ml-2 truncate text-gray-500">{selected.username}</span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {people.map((person) => (
                                                    <Listbox.Option
                                                        key={person.username}
                                                        className={({ active }) =>
                                                            classNames(
                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                            )
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selected, active }) => (
                                                            <>
                                                                <div className="flex">
                                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                                                        {person.name}
                                                                    </span>
                                                                    <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                                                                        {person.username}
                                                                    </span>
                                                                </div>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active ? 'text-white' : 'text-indigo-600',
                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                        )}
                                                                    >
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From Name</label>
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Subject' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Email