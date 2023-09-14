import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { IconSizeProps } from "../models/ContentModels";

function Iconsize(props: IconSizeProps) {
    const { onChangeIconSize, iconSize } = props
    return (
        <>


            <Accordion title="Icon Size" accordionJSX={() => {
                return (
                    <>
                        <div className="form-group">
                            {/* <label className="form-label">Height</label> */}
                            <input className="form-control eb-form-control" type="number" min={0} value={iconSize} onChange={(e) => onChangeIconSize(e.target.value)} />
                        </div>
                    </>
                )
            }} />
        </>
    );
}

export default Iconsize;