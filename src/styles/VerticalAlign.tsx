import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { verticalAlignProps } from "../models/ContentModels";
import React from "react"
function VerticalAlign(props: verticalAlignProps) {
    const { adjustAlignment, alignment } = props
    return (
        <>

            <Accordion title="Vertical Align" accordionJSX={() => {
                return (
                    <>
                        <div className="alignment-buttons text-center">
                            <button className={alignment === "top" ? "btn btn-primary active" : "btn btn-light"} onClick={() => adjustAlignment("top")}>Top</button>
                            <button className={alignment === "middle" ? "btn  btn-primary active" : "btn btn-light"} onClick={() => adjustAlignment("middle")}>Middle</button>
                            <button className={alignment === "bottom" ? "btn btn-primary active" : "btn btn-light"} onClick={() => adjustAlignment("bottom")}>Bottom</button>
                        </div>
                    </>
                )
            }} />
        </>
    );
}

export default VerticalAlign;