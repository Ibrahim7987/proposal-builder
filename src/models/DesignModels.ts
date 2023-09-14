import { ContentPayload } from "./ContentModels"
import { BorderPayload, FontPayload, LinkSettings } from "./styleModels"


export type ProposalObjectPayload = {
    proposalSettings: BodySettingOptionsPayload,
    elements: SectionPayload[],
    name?: string
}

export type BodySettingOptionsPayload = {
    // backgroundColor: string,

    contentWidth: number | string,
    font: FontPayload,
    lineHeight: string,
    padding: string[],
    //string
    linkSettings: LinkSettings,
    background: {
        color: string,
        noRepeat: boolean,
        url: string,
        size: string,
        positionY: string,
        positionX: string
    }
}


export type SectionPayload = {
    options: {
        classNames?: string,
        backgroundColor: string,
        background?: {
            noRepeat: boolean,
            url: string,
            fullWidth: boolean,
            size: string,
            positionY: string,
            positionX: string
            color: string
        },
        border: BorderPayload,
        padding: number[]
    },
    columns: ColumnPayload[]
}

export type ColumnPayload = {
    options: ColumnOptionsPayload,
    contents: ContentPayload[],
    columnWidthPercentage: number
}

export type ColumnOptionsPayload = {
    className?: string,
    verticalAlign: string,
    border?: BorderPayload,
    padding?: number[],
    backgroundColor?: string
}



