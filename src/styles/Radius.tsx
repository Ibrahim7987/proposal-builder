import { contentAccordion } from "../Utils";
import { RadiusProps } from "../models/ContentModels";

function Radius(props: RadiusProps) {
    const { radius, onChangeRadius } = props
    return (
        <>
            {contentAccordion("Radius", () => {
                return (
                    <>
                        <div className="form-group text-start">
                            <input className="form-range " onChange={(e) => onChangeRadius(Number(e.target.value))} value={radius} type="range" />
                        </div>
                    </>
                )
            }, "radiusAccordion", "radiuscollapsetarget")}
        </>

    );
}

export default Radius;