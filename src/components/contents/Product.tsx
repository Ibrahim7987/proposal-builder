import React, { useContext, useEffect } from 'react'
import TinyMCEEditor from '../../styles/TinyMCEEditor';
import { ProductProps, ProposalBuilderContext, ProposalBuilderContextPayload } from '../../models/GeneralModels';
import { createDynamicContent } from '../../json/DynamicContents';

const Product = (props: ProductProps) => {



    const { proposalProducts, totalAmount, content, updateContent, editActiveElement, contextData } = props

    const imgStyles = {
        width: '2.75rem',
        height: '2.75rem',
        borderRadius: '9999px',
        minWidth: 'max-content'
    }

    const descStyles: any = {
        color: 'rgba(107, 114, 128, 1)',
        marginTop: '0.25rem',
        display: '-webkit-box',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        whiteSpace: 'pre-line'
    }
    useEffect(() => {
        if (proposalProducts?.proposal_products.length > 0)
            content.options.proposal_products = proposalProducts?.proposal_products;
        proposalProducts?.proposal_products.map((product: any, index: number) => (
            content.options.productContents.push(createDynamicContent(product))
        ))
        content.options.currency = proposalProducts?.currency;
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

    const roundNumberBy2 = (totalAmount: number) => {
        try {
            if (!totalAmount) return totalAmount;

            return Math.round(Number(totalAmount) * 100) / 100;
        } catch (e) { }

        return totalAmount;
    }


    return (
        <div>
            {content.options.proposal_products?.length > 0 ?
                <div className="ppx-4 sm-ppx-6 lg-ppx-8">
                    <div className="-pmx-4 -pmy-2 overflow-px-auto sm--pmx-6 lg--pmx-8">
                        <div className="ring-1 ring-gray-300 d-inline-block min-w-100 ppy-2 v-align-middle sm-ppx-6 lg-ppx-8">
                            <table className="min-w-100 divide-py divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="ppx-3 ppy-3.5" style={{ fontWeight: 600, fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                            <div style={{
                                                minWidth: "max-content"
                                            }}>
                                                <TinyMCEEditor onChangeEditor={onChangeText0} content={content.options.innerConetents[0]} />
                                            </div>
                                        </th>
                                        <th scope="col" className="ppx-3 ppy-3.5" style={{ fontWeight: 600, fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                            <div style={{
                                                minWidth: "max-content"
                                            }}>
                                                <TinyMCEEditor onChangeEditor={onChangeText1} content={content.options.innerConetents[1]} />
                                            </div>
                                        </th>
                                        <th scope="col" className="ppx-3 ppy-3.5" style={{ fontWeight: 600, fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                            <div style={{
                                                minWidth: "max-content"
                                            }}>
                                                <TinyMCEEditor onChangeEditor={onChangeText2} content={content.options.innerConetents[2]} />
                                            </div>
                                        </th>
                                        <th scope="col" className="ppx-3 ppy-3.5 " style={{ fontWeight: 600, fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                            <div style={{
                                                minWidth: "max-content"
                                            }}>
                                                <TinyMCEEditor onChangeEditor={onChangeText3} content={content.options.innerConetents[3]} />
                                            </div>
                                        </th>
                                        <th scope="col" className="ppx-3 ppy-3.5" style={{ fontWeight: 600, fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                            <div style={{
                                                minWidth: "max-content"
                                            }}>
                                                <TinyMCEEditor onChangeEditor={onChangeText4} content={content.options.innerConetents[4]} />
                                            </div>                                            </th>
                                        <th scope="col" className="ppx-3 ppy-3.5" style={{ fontWeight: 600, fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                            <div style={{
                                                minWidth: "max-content"
                                            }}>
                                                <TinyMCEEditor onChangeEditor={onChangeText5} content={content.options.innerConetents[5]} />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-py divide-gray-200">
                                    {content.options.proposal_products?.map((proposal_product: any, index: number) => (
                                        <tr key={proposal_product.id}>
                                            <td className=" ppy-4 ppx-3 " style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}>

                                                <div style={{ alignItems: "center", display: "flex" }}>
                                                    <div className={`${contextData.activeElement.elementId === proposal_product.id ? "selected-element active" : ""}`} style={imgStyles}
                                                        onMouseEnter={() => contextData.setOnHover({ ...contextData.onHover, onSectionHover: false, onContentHover: true })}
                                                        onMouseLeave={() => contextData.setOnHover({ ...contextData.onHover, onSectionHover: true, onContentHover: false })}
                                                        onClick={(e) => content.type === "forms" ? console.log("") : editActiveElement(e, "content", proposal_product.id, true)}>
                                                        <img style={imgStyles} src={proposal_product.image_url} alt="" />
                                                    </div>
                                                    <div style={{ marginLeft: "1rem" }}>
                                                        <div style={{
                                                            maxWidth: "10rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                                                        }}>{proposal_product.name}</div>
                                                        <div style={descStyles}
                                                        >{proposal_product.description}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=" ppx-3 ppy-4 " style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                                <div style={{ width: "max-content" }}>{`${proposal_product.quantity ? proposal_product.quantity : '-'}`}</div>
                                            </td>
                                            <td className=" ppx-3 ppy-4 " style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                                <div style={{ width: "max-content" }}>{`${proposal_product.price ? proposal_product.price : '-'}`}</div>
                                            </td>
                                            <td className=" ppx-3 ppy-4 " style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                                <div style={{ width: "max-content" }}>{`${proposal_product.discount ? proposal_product.discount : '-'}`}</div>
                                            </td>
                                            <td className=" ppx-3 ppy-4 " style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                                <div style={{ width: "max-content" }}>{`${proposal_product.tax_rate ? proposal_product.tax_rate : '-'}`}</div>
                                            </td>
                                            <td className=" ppx-3 ppy-4 " style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}>
                                                <div style={{ width: "max-content" }}>{getCurrencySymbol(proposal_product.currency)} {calculateProductActualAmountFromDiscount(proposal_product.price, proposal_product.discount, proposal_product.discount_type, proposal_product.properties, proposal_product.quantity)}</div></td>

                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>


                                    <tr>
                                        <th
                                            scope="row"
                                            colSpan={5}
                                            className=" ppx-3 ppy-3 "
                                            style={{ textAlign: "right", fontWeight: 600, fontSize: "0.875rem", lineHeight: "1.25rem" }}
                                        >
                                            Total:
                                        </th>

                                        <td className=" ppx-3 ppy-3 "
                                            style={{ textAlign: "left", fontWeight: 600, fontSize: "0.875rem", lineHeight: "1.25rem" }}
                                        >
                                            <div style={{ width: "max-content" }}>{getCurrencySymbol(content.options.currency)} {roundNumberBy2(totalAmount)}</div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
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