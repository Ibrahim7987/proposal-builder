import { contentAccordion } from "../Utils";
import { LayoutPayload } from "../models/GeneralModels";

function ImageLayout(props: LayoutPayload) {
    const { onchangeLayout, layout } = props
    return (
        <>
            {contentAccordion("Image Layout", () => {
                return (
                    <>
                        <div className="d-flex">
                            <div className="form-group text-start mb-2 w-90 pe-2" >
                                <label className="form-label">Size</label>
                                <select className="form-select eb-form-control" onChange={(e) => onchangeLayout(e.target.value, "style")} value={layout}>
                                    <option value="inherit">Inherit</option>
                                    <option value="fixed-height">Fixed-height</option>
                                    <option value="responsive">Responsive</option>
                                    <option value="fixed">Responsive</option>
                                </select>
                            </div>
                            {/* <div className="d-flex align-items-center mt-2">{border.size}px</div> */}
                        </div>
                    </>
                )
            }, "borderAccordion", "bordercollapsetarget")}
        </>
    );
}

export default ImageLayout;