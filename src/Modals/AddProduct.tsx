import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { PARENT, PRODUCT_SEARCH, PRODUCT_SEARCH_QUERY } from '../Globals'
import { getReq } from '../Requests'
const AddProduct = (props: any) => {
    const [open, setOpen] = useState(true)
    const [productsList, setProductsList] = useState([]);

    const cancelButtonRef = useRef(null)
    useEffect(() => {
        if (open) {
            fetchProductList();
        }
    }, [open])

    const fetchProductList = () => {
        getReq(PRODUCT_SEARCH, {}).then((response) => {
            console.log(response.data);
            setProductsList(response.data);
        })
    }

    const getSearchedProduct = (Event: React.ChangeEvent<HTMLInputElement>) => {
        const search = Event.target.value;
        getReq(PRODUCT_SEARCH_QUERY + "q=" + search + "&page_size=" + `${PARENT.CURRENT_USER_JSON.pageSize ? PARENT.CURRENT_USER_JSON.pageSize : '10'}` + "&sort_key=-created_time", {}).then((response) => {
            console.log(response.data);
            setProductsList(response.data);
        })
    }





    return (
        <Transition.Root show={props.addProductModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-end p-4 text-center sm:items-center sm:p-0flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                {productsList.length > 0 ?
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        <input type="text" onChange={getSearchedProduct} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Search' />
                                        <div className="mt-8 flow-root">
                                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                                    <table className="min-w-full divide-y divide-gray-300">

                                                        <tbody className="divide-y divide-gray-200 bg-white">
                                                            {productsList.map((product: any, index: number) => (
                                                                <tr key={product.id}>
                                                                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                                                        <div className="flex items-center">

                                                                            <div className="ml-4">
                                                                                <div className="font-medium text-gray-900">{product.name}</div>
                                                                                <div className="mt-1 text-gray-500">{product.description}</div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                                        <div className="text-gray-900">{`${product.display_price} | '-'`}</div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                                        {`${product.display_discount} | '-'`}
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{product.created_time}</td>

                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <></>}
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => { setOpen(false); props.setAddProductModal(false) }}
                                    >
                                        Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => { setOpen(false); props.setAddProductModal(false) }}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root >
    )
}



export default AddProduct