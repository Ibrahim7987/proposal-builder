import React from "react";
import { contentAccordion } from "../Utils";
import { onChangeColumnWidth } from "../models/GeneralModels";
import Accordion from "../Accordion";
function ContentWidth(props: onChangeColumnWidth) {
    const { onChangeColumnWidth, columnWidth } = props
    return (
        <>

            <Accordion title="Column width" accordionJSX={() => {
                return (
                    <>
                        <div className="form-group d-flex align-items-center" >
                            <input className="form-range w-90" min={1} type="range" value={columnWidth} onChange={(e) => onChangeColumnWidth(e.target.value)} />
                            <span className="ms-1">{columnWidth}%</span>
                        </div>
                    </>
                )
            }} />
        </>
    );
}

export default ContentWidth;