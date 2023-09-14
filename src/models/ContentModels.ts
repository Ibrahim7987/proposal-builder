import { BorderPayload, FontPayload } from "./styleModels"
import { SectionPayload } from "./GeneralModels"
import { Dispatch } from "react"

export type ButtonContentOptions = {
    fullWidth?: boolean
    align: string | any,
    border?: BorderPayload,
    lineHeight?: string
    buttonBackgroundColor?: string
    padding: number[],
    backgroundColor?: string
    font?: FontPayload
    margin: number[],
    url?: string
    buttonText?: string
}

export type BackgroundColorProps = {
    onChangeBackgroundColor: Dispatch<string>,
    background: string,
    label: string
}

export type LineHeightProps = {
    lineHeight: string,
    onChangeLineHeight: (value: string) => {}
}

export type AlignmentProps = {
    adjustAlignment: Dispatch<string>,
    alignment: string
}

export type ImageUploadProps = {
    image: string,
    onChangeImage: (value: string) => {}
}

export type PaddingProps = {
    paddingDirections: string[],
    //string
    onchangePadding: (value: string, side: number) => {},
    accordionTitle: string
}

export type verticalAlignProps = {
    adjustAlignment: (value: string) => {},
    alignment: string
}

export type AltProps = {
    alt: string,
    onChangeAltText: (value: string) => {}
}

export type HtmlEditorProps = {
    onChangeHtml: (value: string) => {},
    html: string
}

export type URLProps = {
    onChangeUrl: (value: string) => {},
    url: string | undefined
}

export type BackgroundImageProps = {
    backgroundImage?: {
        noRepeat?: boolean,
        url?: string,
        fullWidth?: boolean,
        size?: string,
        positionY?: string | undefined,
        positionX?: string
    },
    onFileUpload: Dispatch<string>,
    onchangeBgImgRepeat: Dispatch<boolean>,
    onChangeBackgroundSize: Dispatch<string>
    onChangeBackgroundColor: Dispatch<string>,
    onChangeBackgroundPosition?: (value: string, key: string) => {}
    background: string,
    accordionTitle: string
}

export type WidthProps = {
    onChangeWidth: (value: string) => {},
    content: ContentPayload
    onChangeFullWidth: (value: boolean) => {},
    onChangeFullWidthMobile: (value: boolean) => {}
}

type TextContentOptions = {
    text: string
}

type URLContentOptionsPayload = {
    link?: string
    type?: string
}

export type ProductProposalsContentOptionsPayload = {
    createdTime: number
    created_time: number
    currency: string
    description?: string
    discount?: number
    discount_type?: string
    display_discount?: string
    display_price?: string
    display_price_after_discount?: string
    entiy_group_name: string
    folder_id?: number
    forceUpdate?: boolean
    id: number
    image_url?: string
    imported_entity?: boolean
    in_folder?: boolean
    name: string
    owner_id: number
    price: number
    price_after_discount?: number
    price_type?: string
    productSubscriptions?: any[]
    product_ids?: any[]
    product_type: string
    properties?: any[]
    quantity?: number
    source?: string
    syncIds?: any[]
    tax_rate?: number
}

type ProductProposalsContentOptions = {
    proposal_products: ProductProposalsContentOptionsPayload[],
    innerConetents: any[],
    productContents: any[],
}

type DividerContentOptions = {
    width: number,
    altTag?: string,
    linkTo?: URLContentOptionsPayload
}

export type IconSizeProps = {
    iconSize?: string,
    onChangeIconSize: (value: string) => {}
}

export type VideoProps = {
    videoLinkTo: VideoLinkContentOptionsPayload
    onChangeVideoType: (value: string) => {},
    onChangeVideoUrl: (value: string) => {},
    onChangeVideoThumbnail: (value: string) => {},

}

export type LinkTo = {
    linkto: URLContentOptionsPayload,
    onChangeLinkto: (value: string) => {},
    onChangeImageLink: (value: string) => {}
}

type VideoContentOptions = {
    videoLinkTo?: VideoLinkContentOptionsPayload
}

type RSSContentOptions = {

}

export type MarginProps = {
    margin: number[],
    //string
    onChangeMargin: (value: string, side: number) => {}
    accordionTitle: string
}

type HTMLContentOptions = {
    html: string
}

type VideoLinkContentOptionsPayload = {
    id?: string
    link?: string
    thumbnail?: string
    type?: string
    templateId: string
}

export type HeightProps = {
    height: string,
    onChangeHeight: (value: string) => {},
}

type ImageContentOptions = {
    image?: string,
    fluidOnMobile?: boolean,
    layout?: string
}

type SpaceContentOptions = {
    height: string
}

export type SocialContentOptions = {
    iconSize?: string,
    iconMode?: string,
    socialLinks?: socialLinks[],
    iconSpacing: number[]
}

export type socialLinks = {
    network?: string,
    icon?: string,
    link?: string,
    alt?: string
}

export type RadiusProps = {
    onChangeRadius: (value: number) => {},
    radius: number | string
}

type ContentCommonContentOptions = {
    className?: string,
    font?: FontPayload,
    inputStyles: contentContentOptions,
    labelStyles: contentContentOptions,
    display: string
    verticalAlign: string
    selectedState?: symbolStatus
}

export type symbolBackground = {
    url: string,
    color: string
}

export type symbolStatus = {
    background: symbolBackground
    font: FontPayload
}

export type FullWidthOnMobileProps = {
    fullWidthMobile: boolean,
    onChangeFullWidthMobile: (value: boolean) => {},
}

export type choicesPayload = {
    name: string,
    value: string
}

export type fieldsPayload = {
    type: string,
    subType: string,
    name: string,
    placeholder: string,
    label: string,
    helpText: string,
    errorText: string,
    required: boolean,
    fallBack?: string,
    maxRating?: number,
    options: contentContentOptions | any,
    id: string,
    fieldValue: string,
    choices?: choicesPayload[]
    primary_head?: string
    symbols?: Symbols[]
}

export type Symbols = {
    value: string
    type: string
    label: string

}

export type stepsPayload = {
    id: string,
    index: string,
    fields: fieldsPayload[],
    buttons: FormButtonpayload[]
}

export type FormButtonpayload = {
    type: string,
    label: string,
    target: string,
    id: string,
    options: ButtonContentOptions
}

export type failureTemplatePayload = {
    id: string,
    contents: ContentPayload[]
}
export type successTemplatePayload = {
    id: string,
    contents: ContentPayload[]
}

export type contentContentOptions = ButtonContentOptions & TextContentOptions & VideoContentOptions & DividerContentOptions & RSSContentOptions & HTMLContentOptions &
    ImageContentOptions & SpaceContentOptions & SocialContentOptions & ContentCommonContentOptions & ProductProposalsContentOptions;


export type ContentPayload = {
    id: string,
    type: string
    options: contentContentOptions
    steps: stepsPayload[]
    successTemplate: successTemplatePayload
    failureTemplate: failureTemplatePayload
    fallBack: string | any
    action: string,
    target: string,
}

export type predefinedTemplatePayload = {
    id?: string
    type: string;
    thumbnail: string;
    elements: SectionPayload[] | [],
}