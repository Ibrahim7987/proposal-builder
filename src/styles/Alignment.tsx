import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { AlignmentProps } from "../models/ContentModels";

function Alignment(props: AlignmentProps) {
    const { adjustAlignment, alignment } = props
    return (
        <>
            <Accordion title="Alignment" accordionJSX={() => {
                return (
                    <>
                        <div className="alignment-buttons  d-flex flex-nowrap justify-content-center">
                            <button className={alignment === "left" ? "btn btn-primary active" : "btn btn-light"} onClick={() => adjustAlignment("left")}>Left</button>
                            <button className={alignment === "center" ? "btn btn-primary active" : "btn btn-light"} onClick={() => adjustAlignment("center")}>Center</button>
                            <button className={alignment === "right" ? "btn btn-primary active" : "btn btn-light"} onClick={() => adjustAlignment("right")}>Right</button>
                        </div>
                    </>
                )
            }} />
        </>
    );
}

export default Alignment;