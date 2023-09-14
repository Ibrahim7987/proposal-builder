import { Dispatch, createContext } from "react"
import { ContentPayload, contentContentOptions, failureTemplatePayload, fieldsPayload, stepsPayload, successTemplatePayload } from "./ContentModels"
import { BorderPayload, FontPayload } from "./styleModels"
import { BodySettingOptionsPayload } from "./DesignModels"

export const ProposalBuilderContext = createContext({
    activeElement: {} as ActiveElementType,
    setActiveElement: () => { },
    onHover: {} as OnHoverPayload,
    setOnHover: () => { },
    updateBuilderData: () => { },
    setPredefindedTemplates: () => { },
    predefinedTemplates: [] as any,
    setProposalTemplateJSON: () => { },
    proposalTemplateJSON: {} as any,
    fallbackMode: true as boolean,
    confirmationModal: {} as any,
    setConfirmationModal: () => { }

} as ProposalBuilderContextPayload)


export type ProposalBuilderContextPayload = {
    activeElement: ActiveElementType,
    setActiveElement: Dispatch<ActiveElementType>,
    onHover?: OnHoverPayload | undefined,
    setOnHover: Dispatch<OnHoverPayload>
    updateBuilderData: any,
    setPredefindedTemplates: Dispatch<any>,
    predefinedTemplates: any,
    setProposalTemplateJSON: any,
    proposalTemplateJSON: any,
    fallbackMode: boolean,
    confirmationModal: any,
    setConfirmationModal: Dispatch<any>
}

export type borderProps = {
    onChangeBorder: (value: string, type: string) => {},
    border: BorderPayload,
    onchangeBorderSide?: (side: string) => {},
    label: string
    onChangeRadius?: (value: number) => {}
}

export type FullWidthProps = {
    onChangeFullWidth: (value: boolean) => {},
    fullWidth: boolean
}

export type RowTypes = {
    id: string,
    columnType: string,
    columns: ColumnPayload | any,
    hovered: boolean,
    options: SectionSetting | any,
    type: string,
}

export type bodySettingOptionsProps = {
    proposalSettings: BodySettingOptionsPayload
    setShowBodySetting: Dispatch<boolean>
    showBodySetting: boolean
}

export type SectionSetting = {
    backgroundColor: string
    backgroundImage: {}
    padding: []
}

export type buttonTextProps = {
    buttonText: string,
    onChangeButtonText: (value: string) => {}
}

export type FontProps = {
    onChangeFontFamily?: (value: string) => {},
    onchangeFontSize?: (value: string) => {},
    onChangeFontColor?: (value: string) => {},
    onChangeWeight?: (value: string) => {},
    font: FontPayload,
    label: string
}

export type ActiveElementType = {
    elementType: string | undefined,
    elementId: string | undefined,
    elementEditingModule: boolean | undefined,
    formSubComponentType: undefined | string,
    formSubComponent: undefined | any
}

export type sidebarType = {
    setShowTabPane: Dispatch<boolean>
    showTabPane: boolean
    handleTabComponents: any
}

export type linkToPayload = {
    onChangeTextDecoration: (value: string) => {}
    textDecoration: string,
    onChangeLinkColor: (value: string) => {}
    color: string
}

export type ButtonBackgroundProps = {
    onChangeButtonBackground: (value: string) => {},
    btnBackground: string,
}

export type ContentStyleEditorType = {
    elements: SectionPayload[] | [],
}

export type ContentType = {
    id: string,
    type: string,
    options: contentContentOptions,
    steps?: stepsPayload[]
    successTemplate?: successTemplatePayload
    failureTemplate?: failureTemplatePayload
    fallBack?: string
    action?: string,
    target?: string,
}

export type EditorContentprops = {
    cloneContent: (rowIndex: number, columnIndex: number, contentIndex: number) => {},
    columnIndex: number,
    content: ContentPayload,
    contentIndex: number,
    contextData: ProposalBuilderContextPayload,
    rowIndex: number,
    editActiveElement: (event: any, type: string, id: string, isEditingModule: boolean, formSubComponent?: fieldsPayload, formSubComponentType?: string) => {},
    deleteContent: (rowIndex: number, columnIndex: number, contentIndex: number) => {},
    handleContentType: (content: ContentPayload) => {},

}

export type ColumnTypes = {
    id: string,
    columnWidthPercentage: number,
    contents: ContentType[],
    options: {}
}


export type PlaceholderProps = {
    clientHeight: undefined | number
    clientWidth: undefined | number
    clientX: undefined | number
    clientY: undefined | number
}

export type ServerResponseObj = {
    message: string,
    success: string,
    error: string
}

export type EditorArray = {
    placeholderProps: PlaceholderProps,
    previewDevicetype: string,
    snapshot: DroppableSnapshot
    setShowRightSettings: Dispatch<string>
    setShowBodySetting: Dispatch<boolean>
    removeTransform: boolean
    getDraggedElement: string
    proposalProducts: contentContentOptions;
    totalAmount: number
}

export type SectionPayload = {
    options: {
        className?: string,
        // backgroundColor: string,
        background: {
            noRepeat: boolean,
            url: string | undefined,
            fullWidth?: boolean,
            size: string,
            positionY: string,
            positionX: string,
            color: string,
        },
        sectionBackground: {
            noRepeat: boolean,
            url: string | undefined,
            size: string,
            positionY: string,
            positionX: string,
            color: string
        }
        margin: number[],
        //string
        padding: number[],
        //string
        border: BorderPayload,
    },
    columns: ColumnPayload[]
    id: string,
    columnType: string,
    type: string,
    hovered: boolean
}

export type ColumnPayload = {
    id: string
    options: {
        className?: string,
        verticalAlign: string,
        border: BorderPayload,
        innerBorder: BorderPayload,
        padding: number[],
        //string
        backgroundColor: string,
        innerBackgroundColor: string
    },
    contents: ContentPayload[],
    columnWidthPercentage: number
}

export type OnHoverPayload = {
    onSectionHover: boolean,
    onContentHover: boolean
}

export type LayoutPayload = {
    layout: string,
    onchangeLayout: (value: string, style: string) => {}
}

export type DefaultHover = {
    onSectionHover: boolean,
    onContentHover: boolean
}

export type DroppableSnapshot = {
    draggingFromThisWith: undefined,
    draggingOverWith: undefined | any,
    isDraggingOver: boolean,
    isUsingPlaceholder: boolean
}

export type VideoProps = {
    contentVideo: ContentPayload
    updateContent: (content: ContentPayload) => {},
}

export type TextProps = {
    content: ContentPayload,
    updateContent: (content: ContentPayload) => {},
    // editActiveElement: (event: any, type: string, id: string, isEditingModule: boolean) => {},
}

export type ProductProps = {
    content: ContentPayload,
    proposalProducts: contentContentOptions,
    totalAmount: number,
    updateContent: (content: ContentPayload) => {},
    editActiveElement: (event: any, type: string, id: string, isEditingModule: boolean) => {},
    contextData: ProposalBuilderContextPayload,
}

export type ContentsProps = {
    content: ContentPayload
    updateContent?: (content: ContentPayload) => {}
    editActiveElement?: (event: any, type: string, id: string, isEditingModule: boolean) => {}
    // onChangeText: (value: string, contentId: string) => {},
}

export type onChangeColumnWidth = {
    onChangeColumnWidth: (value: string) => {}
    columnWidth: number
}