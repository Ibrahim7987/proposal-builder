import uuid from "react-uuid"

const DefaultColumnOptions = {
    backgroundColor: "transparent",
    innerBackgroundColor: 'transparent',
    padding: [0, 0, 0, 0],
    border: {
        size: 0,
        style: 'solid',
        applyTo: ['left', 'right', 'top', 'bottom'],
        color: 'transparent'
    },
    innerBorder: {
        size: 0,
        style: 'solid',
        applyTo: ['left', 'right', 'top', 'bottom'],
        color: '#DADFE1',
    },
    verticalAlign: 'top'
};

function getDefaultSectionOptions() {
    return {
        background: {
            url: '',
            noRepeat: false,
            size: 'cover',
            positionX: 'center',
            positionY: 'center',
            color: "#ffffff",
        },
        sectionBackground: {
            url: '',
            noRepeat: true,
            size: 'cover',
            positionX: 'center',
            positionY: 'center',
            color: 'transparent'
        },
        border: {
            size: 0,
            style: 'solid',
            color: '#DDDDDD',
            applyTo: ['left', 'right', 'top', 'bottom'],
        },
        padding: [10, 10, 10, 10],
        margin: [0, 0, 0, 0]

    }
}
const defaultColumns = [
    {
        id: uuid(),
        columnType: "BlockOneColumn",
        type: 'block',
        hovered: false,
        options: getDefaultSectionOptions(),
        columns: [{
            id: uuid(),
            columnWidthPercentage: 100,
            contents: [],
            options: DefaultColumnOptions
        }]
    },
    {
        id: uuid(),
        columnType: 'BlockTwoColumn',
        type: 'block',
        hovered: false,
        options: getDefaultSectionOptions(),
        columns: [{
            id: uuid(),
            columnWidthPercentage: 50,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 50,
            contents: [],
            options: DefaultColumnOptions
        }
        ]
    },

    {
        id: uuid(),
        columnType: 'BlockThreeColumn',
        type: 'block',
        hovered: false,
        options: getDefaultSectionOptions(),
        columns: [{
            id: uuid(),
            columnWidthPercentage: 33.3,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 33.3,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 33.3,
            contents: [],
            options: DefaultColumnOptions
        }
        ]
    },
    {
        id: uuid(),
        columnType: 'BlockFourColumn',
        type: 'block',
        hovered: false,
        options: getDefaultSectionOptions(),
        columns: [{
            id: uuid(),
            columnWidthPercentage: 25,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 25,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 25,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 25,
            contents: [],
            options: DefaultColumnOptions
        }
        ]
    },
    {
        id: uuid(),
        columnType: 'Block70X30Column',
        type: 'block',
        hovered: false,
        options: getDefaultSectionOptions(),
        columns: [{
            id: uuid(),
            columnWidthPercentage: 70,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 30,
            contents: [],
            options: DefaultColumnOptions
        },
        ]
    },
    {
        id: uuid(),
        columnType: 'Block30X70Column',
        type: 'block',
        hovered: false,
        options: getDefaultSectionOptions(),
        columns: [{
            id: uuid(),
            columnWidthPercentage: 30,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 70,
            contents: [],
            options: DefaultColumnOptions
        },
        ]
    },

    {
        id: uuid(),
        columnType: 'Block35X15X35X15Column',
        type: 'block',
        hovered: false,
        options: getDefaultSectionOptions(),
        columns: [{
            id: uuid(),
            columnWidthPercentage: 35,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 15,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 35,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 15,
            contents: [],
            options: DefaultColumnOptions
        }
        ]
    },

    {
        id: uuid(),
        columnType: 'Block15X35X15X35Column',
        type: 'block',
        hovered: false,
        options: getDefaultSectionOptions(),
        columns: [{
            id: uuid(),
            columnWidthPercentage: 15,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 35,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 15,
            contents: [],
            options: DefaultColumnOptions
        },
        {
            id: uuid(),
            columnWidthPercentage: 35,
            contents: [],
            options: DefaultColumnOptions
        },
        ]
    },
]

export default defaultColumns