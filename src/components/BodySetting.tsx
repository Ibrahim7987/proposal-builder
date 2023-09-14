import BackgroundColor from "../styles/BackgroundColor";
import Padding from "../styles/padding";

import Border from "../styles/Border";
import { bodySettingOptionsProps, ProposalBuilderContext, ProposalBuilderContextPayload } from "../models/GeneralModels";

import { useContext } from "react";
import BackgroundImage from "../styles/BackgroundImage";
import LinkTo from "../styles/LinkTo";
import { contentAccordion, loadAnchorSettings, loadFontFamily } from "../Utils";
import Font from "../styles/Font";
import LineHeight from "../styles/LineHeight";
import {
    Collapse,
    initTE,
} from "tw-elements";
import Accordion from "../Accordion";
initTE({ Collapse });

function BodySetting(props: bodySettingOptionsProps) {
    const { proposalSettings } = props
    const setting: ProposalBuilderContextPayload = useContext(ProposalBuilderContext);


    function selectedWidth(value: string) {
        const tempBodySettingOptions = proposalSettings
        if (proposalSettings) {
            proposalSettings.contentWidth = value
        }
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)
    }

    function onchangePadding(value: string, side: number) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.padding[side] = value
        //No Number()
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)

        return value
    }



    function onChangeBackgroundColor(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.background.color = value
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)
    }



    function onChangeOuterBackgroundPosition(value: string, key: string) {
        const tempBodySettingOptions: any = proposalSettings
        tempBodySettingOptions.background[key] = value
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)
        return value
    }


    function onFileUpload(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.background.url = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)

        // setting.setBodySettingOptions({ ...proposalSettings })
    }

    function onchangeBgImgRepeat(value: boolean) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.background.noRepeat = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)

        // setting.setBodySettingOptions({ ...proposalSettings })
    }

    function onChangeBackgroundSize(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.background.size = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)

        // setting.setBodySettingOptions({ ...proposalSettings })
    }

    function onChangeTextDecoration(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.linkSettings.textDecoration = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)

        // setting.setBodySettingOptions({ ...proposalSettings })
        loadAnchorSettings(proposalSettings?.linkSettings)
        return value
    }


    function onChangeLinkColor(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.linkSettings.color = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)
        // setting.setBodySettingOptions({ ...proposalSettings })
        loadAnchorSettings(proposalSettings?.linkSettings)
        return value
    }


    function onChangeFontFamily(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.font.family = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)

        loadFontFamily(value);

        return value
    }

    function onchangeFontSize(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.font.size = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)
        return value
    }

    function onChangeLineHeight(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.lineHeight = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)
        return value
    }



    function onChangeFontColor(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.font.color = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)
        return value
    }

    function onChangeWeight(value: string) {
        const tempBodySettingOptions = proposalSettings
        tempBodySettingOptions.font.weight = value;
        setting.updateBuilderData(setting.proposalTemplateJSON.elements, tempBodySettingOptions)
        return value
    }


    return (
        <div className="builder-card-content position-relative">

            {/* <h6 className="py-3 m-0 text-start">Body settings</h6> */}
            {/* <FullWidth onChangeFullWidth={onChangeSwitch} fullWidth={proposalSettings.fullWidth} /> */}
            <div className="px-0">

                <div className="accordion block-properities" id="settings">



                    <Accordion title="Content Width" accordionJSX={() => {
                        return (
                            <div className="form-group text-start" >
                                {/* <label className="form-label">Content Width</label> */}
                                <select value={proposalSettings?.contentWidth} onChange={(e) => selectedWidth(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6" aria-label="Default select example">
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                    <option value="600">600</option>
                                    <option value="700">700</option>
                                    <option value="800">800</option>
                                    <option value="900">900</option>
                                    <option value="1000">1000</option>
                                </select>
                            </div>
                        )
                    }} />

                    {proposalSettings?.font ? (
                        <Font onChangeFontFamily={onChangeFontFamily} onchangeFontSize={onchangeFontSize} onChangeFontColor={onChangeFontColor} onChangeWeight={onChangeWeight} font={proposalSettings?.font} label={"Body Font"} />
                    ) : null}

                    <Padding paddingDirections={proposalSettings?.padding} onchangePadding={onchangePadding} accordionTitle={"Padding"} />

                    <BackgroundImage onChangeBackgroundColor={onChangeBackgroundColor} onChangeBackgroundPosition={onChangeOuterBackgroundPosition} background={proposalSettings?.background?.color} backgroundImage={proposalSettings?.background} onFileUpload={onFileUpload} onchangeBgImgRepeat={onchangeBgImgRepeat} onChangeBackgroundSize={onChangeBackgroundSize} accordionTitle={"Body Background"} />

                    <LinkTo onChangeLinkColor={onChangeLinkColor} color={proposalSettings?.linkSettings?.color} textDecoration={proposalSettings?.linkSettings?.textDecoration} onChangeTextDecoration={onChangeTextDecoration} />

                    {/* <LineHeight lineHeight={proposalSettings.font.lineHeight} onChangeLineHeight={onChangeLineHeight} /> */}
                </div>
            </div>

        </div>

    );
}

export default BodySetting;