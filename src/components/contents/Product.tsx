import React, { useContext, useEffect } from 'react'
import TinyMCEEditor from '../../styles/TinyMCEEditor';
import { ProductProps, ProposalBuilderContext, ProposalBuilderContextPayload } from '../../models/GeneralModels';
import { createDynamicContent } from '../../json/DynamicContents';

const Product = (props: ProductProps) => {



    const { proposalProducts, totalAmount, content, updateContent, editActiveElement, contextData } = props

    useEffect(() => {
        if (proposalProducts?.proposal_products.length > 0)
            content.options.proposal_products = proposalProducts?.proposal_products;
        proposalProducts?.proposal_products.map((product: any, index: number) => (
            content.options.productContents.push(createDynamicContent(product))
        ))
    }, [proposalProducts?.proposal_products])

    const calculateProductActualAmountFromDiscount = (price: number, discount: number, discount_type: string, properties: any[], quantity: number) => {
        if (!discount || discount == 0)
            return price * quantity;

        if (!price)
            price = 0;

        var finalPrice = price

        if (discount_type && discount_type == "PERCENTAGE") {
            finalPrice = (price - (discount / 100) * price);
        } else {
            finalPrice = (price - discount);
        }

        // Get tax rate
        var taxRate = 0;
        try {
            properties.forEach(function (prop) {
                if (prop.field_type == 'TAX')
                    taxRate += Number(prop.value);
            });

            if (taxRate > 0) {
                finalPrice = finalPrice + ((taxRate / 100) * finalPrice);
            }

        } catch (e) {
        }

        return (Math.round(Number(finalPrice) * 100) / 100) * quantity;
    }

    const onChangeText0 = (value: string) => {
        content.options.innerConetents[0].options.text = value;
        updateContent(content);
        return value
    };

    const onChangeText1 = (value: string) => {
        content.options.innerConetents[1].options.text = value;
        updateContent(content);
        return value
    };

    const onChangeText2 = (value: string) => {
        content.options.innerConetents[2].options.text = value;
        updateContent(content);
        return value
    };

    const onChangeText3 = (value: string) => {
        content.options.innerConetents[3].options.text = value;
        updateContent(content);
        return value
    };

    const onChangeText4 = (value: string) => {
        content.options.innerConetents[4].options.text = value;
        updateContent(content);
        return value
    };

    const onChangeText5 = (value: string) => {
        content.options.innerConetents[5].options.text = value;
        updateContent(content);
        return value
    };

    const getCurrencySymbol = (currencyType: string) => {
        if (currencyType) {
            var arr = currencyType.split('-');

            var currecy = arr[1];
            if (currecy.toUpperCase() == 'DH' && arr[0] == 'AED')
                currecy = 'AED';

            return currecy;
        } else
            return "$";
    }


    return (
        <div>
            {content.options.proposal_products?.length > 0 ?
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                <div style={{
                                                    minWidth: "max-content"
                                                }}>
                                                    <TinyMCEEditor onChangeEditor={onChangeText0} content={content.options.innerConetents[0]} />
                                                </div>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                <div style={{
                                                    minWidth: "max-content"
                                                }}>
                                                    <TinyMCEEditor onChangeEditor={onChangeText1} content={content.options.innerConetents[1]} />
                                                </div>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                <div style={{
                                                    minWidth: "max-content"
                                                }}>
                                                    <TinyMCEEditor onChangeEditor={onChangeText2} content={content.options.innerConetents[2]} />
                                                </div>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                <div style={{
                                                    minWidth: "max-content"
                                                }}>
                                                    <TinyMCEEditor onChangeEditor={onChangeText3} content={content.options.innerConetents[3]} />
                                                </div>
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                <div style={{
                                                    minWidth: "max-content"
                                                }}>
                                                    <TinyMCEEditor onChangeEditor={onChangeText4} content={content.options.innerConetents[4]} />
                                                </div>                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                <div style={{
                                                    minWidth: "max-content"
                                                }}>
                                                    <TinyMCEEditor onChangeEditor={onChangeText5} content={content.options.innerConetents[5]} />
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {content.options.proposal_products?.map((proposal_product: any, index: number) => (
                                            <tr key={proposal_product.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">

                                                    <div className="flex items-center">
                                                        <div className={`${contextData.activeElement.elementId === proposal_product.id ? "selected-element active" : ""} h-11 w-11 flex-shrink-0`}
                                                            onMouseEnter={() => contextData.setOnHover({ ...contextData.onHover, onSectionHover: false, onContentHover: true })}
                                                            onMouseLeave={() => contextData.setOnHover({ ...contextData.onHover, onSectionHover: true, onContentHover: false })}
                                                            onClick={(e) => content.type === "forms" ? console.log("") : editActiveElement(e, "content", proposal_product.id, true)}>
                                                            <img className="h-11 w-11 rounded-full" src={proposal_product.image_url} alt="" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="font-medium text-gray-900 text-truncate" style={{
                                                                maxWidth: "10rem"
                                                            }}>{proposal_product.name}</div>
                                                            <div className="mt-1 text-gray-500" style={{
                                                                display: "-webkit-box",
                                                                WebkitLineClamp: "2",
                                                                WebkitBoxOrient: "vertical",
                                                                overflow: "hidden",
                                                                whiteSpace: "pre-line"
                                                            }}>{proposal_product.description}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                    <div className="text-gray-900">{`${proposal_product.quantity ? proposal_product.quantity : '-'}`}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                    <div className="text-gray-900">{`${proposal_product.price ? proposal_product.price : '-'}`}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                    {`${proposal_product.discount ? proposal_product.discount : '-'}`}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                    {`${proposal_product.tax_rate ? proposal_product.tax_rate : '-'}`}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                    {getCurrencySymbol(proposal_product.currency)}{calculateProductActualAmountFromDiscount(proposal_product.price, proposal_product.discount, proposal_product.discount_type, proposal_product.properties, proposal_product.quantity)}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>


                                        <tr>
                                            <th
                                                scope="row"
                                                colSpan={5}
                                                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                                            >
                                                Total
                                            </th>
                                            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
                                                Total
                                            </th>
                                            <td className="pl-3 pr-4 pt-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">$ {totalAmount}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </div >
    )
}

export default Product