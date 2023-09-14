import Accordion from "../Accordion";
import { contentAccordion, customFontFamily, defaultWebFontFamily, googleFontFamily } from "../Utils";
import { FontProps } from "../models/GeneralModels";

function Font(props: FontProps) {

    const fontWeightOptions = ['bold', 'bolder', 'lighter', 'inherit', 'initial', 'normal', 100, 200, 300,
        400, 500, 600, 700, 800, 900];

    // const googleFontFamily = ['Raleway', 'Open Sans', 'Josefin Sans', 'Alegreya', 'B612', 'Muli', 'Titillium Web', 'Varela', 'Vollkorn', 'IBM Plex Serif', 'Crimson Text', 'Cairo', 'BioRhyme', 'Karla', 'Lora', 'Frank Ruhl Libre', 'Playfair Display', 'Archivo', 'Spectral', 'Fjalla One', 'Roboto', 'Montserrat', 'Rubik', 'Cardo', 'Cormorant', 'Work Sans', 'Rakkas', 'Concert One', 'Yatra One', 'Arvo', 'Lato', 'Abril Fatface', 'Ubuntu', 'PT Serif', 'Old Standard TT', 'Oswald', 'PT Sans', 'Poppins', 'Fira Sans', 'Nunito', 'Oxygen', 'Merriweather', 'Noto Sans', 'Source Sans Pro', 'Asap', 'Merriweather Sans']
    const { onChangeFontFamily, font, onchangeFontSize, onChangeFontColor, onChangeWeight, label } = props
    // console.log(font.family, "font.family");

    function filterFontFamily(value: string) {
        if (!value) return '';

        value = value.split(",")[0]
        value = value.split("'").join('').trim();
        return value.trim();
    }

    return (
        <>


            <Accordion title={label} accordionJSX={() => {
                return (
                    <>
                        {font.hasOwnProperty("size") ? (
                            <>
                                <div className="mb-2 text-start">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Font Size</label>
                                    <div className="mt-2">
                                        <input type="number" className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={font.size} onChange={(e) => onchangeFontSize && onchangeFontSize(e.target.value)} />
                                    </div>
                                </div>
                            </>
                        ) : <></>}
                        {font.hasOwnProperty("color") ? (<>
                            <div className="mb-2 text-start">
                                <label className="block text-sm font-medium leading-6 text-gray-900"> Color</label>
                                <div className="flex rounded-md shadow-sm color-picker mt-2" title="Using input value">
                                    <input type="text" className="block w-full rounded-none rounded-l-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeFontColor && onChangeFontColor(e.target.value)} value={font.color} />
                                    <input style={{ height: "36px" }} className="relative -ml-px inline-flex  items-center gap-x-1.5 rounded-r-md p-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-blue-600" type="color" onChange={(e) => onChangeFontColor && onChangeFontColor(e.target.value)} value={font.color} />
                                </div>
                            </div>
                        </>
                        ) : <></>}
                        {font.hasOwnProperty("weight") ? (
                            <>
                                <div className="mb-2 text-start">
                                    <label className="block text-sm font-medium leading-6 text-gray-900"> Weight</label>
                                    <div className="mt-2">
                                        <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6 text-capitalize" value={font.weight} onChange={(e) => onChangeWeight && onChangeWeight(e.target.value)}>

                                            {fontWeightOptions.map((fontWeight, index) => {
                                                return (
                                                    <option key={index} value={fontWeight}>{fontWeight}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </>
                        ) : <></>}
                        {font.hasOwnProperty("family") ? (
                            <>
                                <div className="mb-2 text-start">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Family</label>
                                    <div className="mt-2">
                                        <select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" onChange={(e) => onChangeFontFamily && onChangeFontFamily(e.target.value)} value={font.family}>
                                            {defaultWebFontFamily.map((font, index) => {
                                                if (label == "Body Font" && index === 0) {
                                                    <></>
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            {/* <option value="inherit">Inherit</option> */}
                                                            <option key={index} value={font}>{filterFontFamily(font)}</option>

                                                        </>
                                                    )
                                                }

                                            })}
                                            <optgroup label="Google Fonts">
                                                {googleFontFamily.map((font, i) => {
                                                    return (
                                                        <option key={i} value={font}>{font}</option>
                                                    )
                                                })}
                                            </optgroup>
                                            <optgroup label="Other Fonts">
                                                {customFontFamily.map((font, i) => {
                                                    return (
                                                        <option key={i} value={font}>{font}</option>
                                                    )
                                                })}
                                            </optgroup>

                                        </select>
                                    </div>
                                    <p className="mt-1 text-slate-400 text-sm">Note: If a contact's email client doesn't support the selected web font, our system will load a similar font</p>
                                </div>
                            </>
                        ) : <></>}
                    </>
                )
            }} />
        </>
    );
}

export default Font;