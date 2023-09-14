import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { WidthProps } from "../models/ContentModels";
import { Switch } from '@headlessui/react'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
function Width(props: WidthProps) {
    const { onChangeWidth, content, onChangeFullWidth, onChangeFullWidthMobile } = props
    return (

        <>


            <Accordion title="Dimensions" accordionJSX={() => {
                return (
                    <>
                        {content.type !== "divider" ? <>
                            <Switch.Group as="div" className="flex items-center justify-between">
                                <span className="flex flex-grow flex-col">
                                    <Switch.Label as="span" className="text-sm leading-6 text-gray-900" passive>
                                        Full Width
                                    </Switch.Label>
                                    <Switch.Description as="span" className="mb-2 text-xs text-gray-500">
                                        Occupies full column width
                                    </Switch.Description>
                                </span>
                                <Switch
                                    checked={content.options.fullWidth}
                                    onChange={(e) => onChangeFullWidth(!content.options.fullWidth)}
                                    id="flexSwitchCheckChecked"
                                    className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                                >
                                    <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            content.options.fullWidth ? 'bg-blue-600' : 'bg-gray-200',
                                            'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
                                        )}
                                    />
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            content.options.fullWidth ? 'translate-x-5' : 'translate-x-0',
                                            'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out'
                                        )}
                                    />
                                </Switch>
                            </Switch.Group>

                            {content.options.fullWidth ? <></> :
                                // <div className="d-flex">
                                //     <div className="form-group w-90" >
                                //         <input type="number" className="form-control eb-form-control"  value={content.options.width} onChange={(e) => onChangeWidth(e.target.value)} />
                                //     </div>
                                //     <div className="d-flex align-items-center mb-2 ms-1">px</div>
                                // </div>
                                <div className="flex rounded-md shadow-sm mb-2 mt-2">
                                    <input type="number" className="block w-full rounded-none rounded-l-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 " disabled={content.options.fullWidth} value={content.options.width} onChange={(e) => onChangeWidth(e.target.value)} />
                                    <span className=" bg-slate-200 rounded-r-md p-2 text-sm fs-7 ring-1 ring-inset ring-gray-300">px</span>
                                </div>
                            }

                            {/* <div className="form-check form-switch custom-switch">
                                <input disabled={content.options.fullWidth} checked={content.options.fluidOnMobile} onChange={(e) => onChangeFullWidthMobile(e.target.checked)} className="form-check-input cursor-pointer fs-16" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label mb-0">
                                    Full Width On Mobile</label>
                                <p className="help-text" style={{ margin: "0px", fontSize: "10px" }}>Occupies full width on mobile</p>
                            </div> */}
                            <Switch.Group as="div" className="flex items-center justify-between">
                                <span className="flex flex-grow flex-col">
                                    <Switch.Label as="span" className="text-sm leading-6 text-gray-900" passive>
                                        Full Width On Mobile
                                    </Switch.Label>
                                    <Switch.Description as="span" className="text-xs text-gray-500">
                                        Occupies full width on mobile
                                    </Switch.Description>
                                </span>
                                <Switch
                                    checked={content.options.fluidOnMobile}
                                    disabled={content.options.fullWidth}
                                    onChange={(e) => onChangeFullWidthMobile(!content.options.fluidOnMobile)}
                                    id="flexSwitchCheckChecked"
                                    className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                                >
                                    <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            content.options.fluidOnMobile ? 'bg-blue-600' : 'bg-gray-200',
                                            'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
                                        )}
                                    />
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            content.options.fluidOnMobile ? 'translate-x-5' : 'translate-x-0',
                                            'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out'
                                        )}
                                    />
                                </Switch>
                            </Switch.Group>
                        </> :
                            <>
                                <div className="flex align-items-center">
                                    <div className="text-start w-full pe-2" >
                                        <input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" value={content.options.width} onChange={(e) => onChangeWidth(e.target.value)} />
                                    </div>
                                    <div className="flex align-items-center text-sm">{content.options.width}px</div>
                                </div>
                            </>
                        }
                    </>

                )
            }} />
        </>
    );
}

export default Width;