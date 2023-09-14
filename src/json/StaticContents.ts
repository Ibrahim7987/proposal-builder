import uuid from "react-uuid";
import { LOGGED_IN_USER_SIGNTURE } from "../Globals";

const StaticContents = [
    {
        id: uuid(),
        columnType: "BlockOneColumn",
        type: "block",
        hovered: false,
        options: {},
        columns: [
            {
                columnWidthPercentage: 100,
                contents: [
                    {
                        id: uuid(),
                        type: "product_list",
                        options: {
                            align: "center",
                            padding: [15, 15, 15, 15],
                            backgroundColor: "transparent",
                            border: {
                                size: 1,
                                style: "solid",

                                color: "#DADFE1",
                            },
                            width: 200,
                            innerConetents: [
                                {
                                    id: uuid(),
                                    type: "product",
                                    options: {
                                        // align: 'left',
                                        padding: [10, 15, 10, 15],
                                        backgroundColor: "transparent",
                                        font: {
                                            family: "inherit",
                                        },
                                        // lineHeight: 22,
                                        text: '<p style="margin: 0;word-break: break-word;">Product</p>',
                                    },
                                },
                                {
                                    id: uuid(),
                                    type: "quantity",
                                    options: {
                                        // align: 'left',
                                        padding: [10, 15, 10, 15],
                                        backgroundColor: "transparent",
                                        font: {
                                            family: "inherit",
                                        },
                                        // lineHeight: 22,
                                        text: '<p style="margin: 0;word-break: break-word;">Quantity</p>',
                                    },
                                },
                                {
                                    id: uuid(),
                                    type: "price",
                                    options: {
                                        // align: 'left',
                                        padding: [10, 15, 10, 15],
                                        backgroundColor: "transparent",
                                        font: {
                                            family: "inherit",
                                        },
                                        // lineHeight: 22,
                                        text: '<p style="margin: 0;word-break: break-word;">Price</p>',
                                    },
                                },
                                {
                                    id: uuid(),
                                    type: "discount",
                                    options: {
                                        // align: 'left',
                                        padding: [10, 15, 10, 15],
                                        backgroundColor: "transparent",
                                        font: {
                                            family: "inherit",
                                        },
                                        // lineHeight: 22,
                                        text: '<p style="margin: 0;word-break: break-word;">Discount</p>',
                                    },
                                },
                                {
                                    id: uuid(),
                                    type: "tax_rate",
                                    options: {
                                        // align: 'left',
                                        padding: [10, 15, 10, 15],
                                        backgroundColor: "transparent",
                                        font: {
                                            family: "inherit",
                                        },
                                        // lineHeight: 22,
                                        text: '<p style="margin: 0;word-break: break-word;">Tax Rate</p>',
                                    },
                                },
                                {
                                    id: uuid(),
                                    type: "amount",
                                    options: {
                                        // align: 'left',
                                        padding: [10, 15, 10, 15],
                                        backgroundColor: "transparent",
                                        font: {
                                            family: "inherit",
                                        },
                                        // lineHeight: 22,
                                        text: '<p style="margin: 0;word-break: break-word;">Amount</p>',
                                    },
                                }],
                            productContents: []
                        },
                    },
                    {
                        id: uuid(),
                        type: "divider",
                        options: {
                            align: "center",
                            padding: [15, 15, 15, 15],
                            backgroundColor: "transparent",
                            border: {
                                size: 1,
                                style: "solid",

                                color: "#DADFE1",
                            },
                            width: 100,
                        },
                    },
                    {
                        id: uuid(),
                        type: "text",
                        options: {
                            // align: 'left',
                            padding: [10, 15, 10, 15],
                            backgroundColor: "transparent",
                            font: {
                                family: "inherit",
                            },
                            // lineHeight: 22,
                            text: '<p style="margin: 0;word-break: break-word;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
                        },
                    },
                    {
                        id: uuid(),
                        type: "html",
                        options: {
                            html: '<p style="font-size:13px;padding: 10px 10px;margin: 0;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
                        },
                    },
                    {
                        id: uuid(),
                        type: "image",
                        hovered: false,
                        options: {
                            align: "center",
                            padding: [15, 15, 15, 15],
                            image:
                                "https://d2p078bqz5urf7.cloudfront.net/cloud/email-builder/email-builder-icons/upload-image-2.png",
                            width: 205,
                            fullWidth: false,
                            fluidOnMobile: false,
                            // height: 100,
                            backgroundColor: "transparent",
                            altTag: "",
                            border: {
                                size: 0,
                                radius: 0,
                                color: "#3498DB",
                                style: "solid",
                            },
                            linkTo: {
                                type: "none",
                                typeOptions: ["link", "email", "none"],
                                link: "",
                            },
                            layout: "fixed"
                        },
                    },
                    {
                        id: uuid(),
                        type: "link-button",
                        options: {
                            align: "center",
                            padding: [10, 50, 10, 50],
                            margin: [15, 15, 15, 15],
                            buttonText: "Submit",
                            url: "#",
                            buttonBackgroundColor: "#FF5C35",
                            backgroundColor: "transparent",
                            border: {
                                size: 1,
                                radius: 5,
                                color: "#FFA500",
                                style: "solid",
                            },
                            fullWidth: false,
                            font: {
                                size: 15,
                                color: "#ffffff",
                                weight: "normal",
                                family: "inherit",
                            },
                            lineHeight: 22,
                        },
                    },
                    {
                        id: uuid(),
                        type: "space",
                        hovered: false,
                        options: {
                            height: 40,
                            backgroundColor: "transparent",
                        },
                    },
                    {
                        id: uuid(),
                        type: "video",
                        hovered: false,
                        options: {
                            videoLinkTo: {
                                type: "link",
                                templateId: "",
                                link: "",
                                thumbnail:
                                    "https://d2p078bqz5urf7.cloudfront.net/cloud/email-builder/email-builder-icons/upload-video-2.png",
                            },
                            align: "center",
                            padding: [15, 15, 15, 15],
                            width: 205,
                            fullWidth: false,
                            fluidOnMobile: true,
                            // height: 100,
                            backgroundColor: "transparent",
                            altTag: "",
                            border: {
                                size: 0,
                                radius: 0,
                                color: "#3498DB",
                                style: "solid",
                            },
                        },
                    },
                    {
                        id: uuid(),
                        type: "social",
                        options: {
                            align: "center",
                            padding: [10, 15, 10, 15],
                            backgroundColor: "#ffffff",
                            iconSize: "30",
                            iconMode: "horizontal",
                            iconSpacing: [2, 4, 2, 4],
                            socialLinks: [
                                {
                                    alt: "Facebook",
                                    icon: "https://d2p078bqz5urf7.cloudfront.net/cloud/email-builder/email-builder-icons/social-icons/facebook.png",
                                    link: "https://www.facebook.com/",
                                },
                                {
                                    alt: "Twitter",
                                    icon: "https://d2p078bqz5urf7.cloudfront.net/cloud/email-builder/email-builder-icons/social-icons/twitter.png",
                                    link: "https://twitter.com/",
                                },
                                {
                                    alt: "LinkedIn",
                                    icon: "https://d2p078bqz5urf7.cloudfront.net/cloud/email-builder/email-builder-icons/social-icons/linkedin.png",
                                    link: "https://www.linkedin.com/",
                                },
                                {
                                    alt: "Instagram",
                                    icon: "https://d2p078bqz5urf7.cloudfront.net/cloud/email-builder/email-builder-icons/social-icons/insta.png",
                                    link: "https://www.instagram.com/",
                                },
                                {
                                    alt: "Pinterest",
                                    icon: "https://d2p078bqz5urf7.cloudfront.net/cloud/email-builder/email-builder-icons/social-icons/pinterest.png",
                                    link: "https://in.pinterest.com/",
                                },
                                {
                                    alt: "Youtube",
                                    icon: "https://d2p078bqz5urf7.cloudfront.net/cloud/email-builder/email-builder-icons/social-icons/youtube.png",
                                    link: "https://www.youtube.com/",
                                },
                            ],
                        },
                    },
                    {
                        id: uuid(),
                        type: "rss",
                        options: {
                            padding: [10, 15, 10, 15],
                            backgroundColor: "transparent",
                            font: {
                                family: "inherit",
                            },
                            text: '<p style="margin: 0px; word-break: break-word; text-align: center;" data-mce-style="margin: 0px; word-break: break-word; text-align: center;"><span style="color: rgb(128, 128, 128); font-size: 11px;" data-mce-style="color: #808080; font-size: 11px;">Updates from <a data-mce-href="{{RSSFeed.link}}" href="{{RSSFeed.link}}">{{RSSFeed.link}}</a></span></p><h1 data-mce-style="margin: 0px; word-break: break-word; text-align: center;" style="margin: 0px; word-break: break-word; text-align: center;"><span style="line-height: 38px;" data-mce-style="line-height: 38px;">{{{RSSFeed.title}}}</span></h1><p style="margin: 0px; word-break: break-word; text-align: center;" data-mce-style="margin: 0px; word-break: break-word; text-align: center;"><span style="font-size: 14px; color: rgb(128, 128, 128);" data-mce-style="font-size: 14px; color: #808080;"> {{{RSSFeed.description}}}</span></p><p style="margin: 0; word-break: break-word;" data-mce-style="margin: 0; word-break: break-word;"><br data-mce-bogus="1"></p><p style="margin: 0; word-break: break-word;" data-mce-style="margin: 0; word-break: break-word;"> {{#RSSFeed.RSS_ITEMS}} </p><h2 data-mce-style="margin: 0; word-break: break-word;" style="margin: 0; word-break: break-word;"><span style="color: rgb(51, 51, 153);" data-mce-style="color: #333399;">{{title}}</span> </h2><p style="margin: 0; word-break: break-word;" data-mce-style="margin: 0; word-break: break-word;"><span style="font-size: 10px; color: rgb(153, 153, 153);" data-mce-style="font-size: 10px; color: #999999;">by {{author}} on {{pubDate}}</span><span style="font-size: 10px; color: rgb(153, 153, 153);" data-mce-style="font-size: 10px; color: #999999;"></span></p><p style="margin: 0; word-break: break-word;" data-mce-style="margin: 0; word-break: break-word;"><span style="font-size: 10px; color: rgb(153, 153, 153);" data-mce-style="font-size: 10px; color: #999999;"><br data-mce-bogus="1"></span></p><p style="margin: 0; word-break: break-word;" data-mce-style="margin: 0; word-break: break-word;"><span style="color: rgb(128, 128, 128);" data-mce-style="color: #808080;">{{{description}}}</span></p><p style="margin: 0; word-break: break-word;" data-mce-style="margin: 0; word-break: break-word;"><br data-mce-bogus="1"></p><p style="margin: 0; word-break: break-word;" data-mce-style="margin: 0; word-break: break-word;"><span style="font-size: 11px;" data-mce-style="font-size: 11px;"><a data-mce-href="{{link}}" href="{{link}}">Read on &gt;&gt;</a></span></p><p style="margin: 0; word-break: break-word;" data-mce-style="margin: 0; word-break: break-word;"><span style="font-size: 11px;" data-mce-style="font-size: 11px;"><br data-mce-bogus="1"></span></p><p style="margin: 0; word-break: break-word;" data-mce-style="margin: 0; word-break: break-word;"> {{/RSSFeed.RSS_ITEMS}}</p>',
                        },
                    },
                    {
                        id: uuid(),
                        type: "signature",
                        options: {
                            padding: [10, 15, 10, 15],
                            backgroundColor: "transparent",
                            font: {
                                family: "inherit",
                            },
                            text: '<p style="font-size:13px;margin: 0;">' + LOGGED_IN_USER_SIGNTURE + ' </p>',
                        },
                    },
                    {
                        id: uuid(),
                        type: "forms",
                        action: "http://test.engagebay.com/backend/amp/email",
                        target: "_top",
                        steps: [
                            {
                                id: uuid(),
                                index: "",
                                fields: [
                                    {
                                        id: uuid(),
                                        type: "input",
                                        subType: "text",
                                        name: "name",
                                        placeholder: "",
                                        label: "Label",
                                        fieldValue: "",
                                        helpText: "",
                                        errorText: "This field is required",
                                        required: true,
                                        fallBack: "",
                                        options: {
                                            margin: [
                                                10,
                                                10,
                                                10,
                                                10
                                            ],
                                            padding: [
                                                10,
                                                10,
                                                10,
                                                10
                                            ]
                                        },
                                        icon: "text",
                                        className: "form-control",
                                        primary_head: "Text"
                                    }
                                ],
                                buttons: [
                                    {
                                        type: "submit",
                                        label: "Submit",
                                        target: "nextStepId",
                                        id: uuid(),
                                        options: {
                                            align: "center",
                                            padding: [10, 15, 10, 15],
                                            margin: [0, 0, 0, 0],
                                            buttonBackgroundColor: "#0d6efd",
                                            border: {
                                                size: 1,
                                                radius: 3,
                                                color: "#3498DB",
                                                style: "solid",
                                            },
                                            fullWidth: true,
                                            font: {
                                                size: "15",
                                                color: "#ffffff",
                                                weight: "normal",
                                                family: "inherit",
                                            },
                                            lineHeight: "2",
                                        }
                                    },

                                    // {
                                    //     type: "previous",
                                    //     label: "prev",
                                    //     target: "prevStepId"
                                    // }
                                ]
                            },

                        ],
                        successTemplate: {
                            id: uuid(),
                            contents: [
                                {
                                    id: uuid(),
                                    type: "text",
                                    options: {
                                        // align: 'left',
                                        padding: [10, 15, 10, 15],
                                        backgroundColor: "transparent",
                                        font: {
                                            family: "Arial, Helvetica, sans-serif",
                                        },
                                        // lineHeight: 22,
                                        text: '<p style="margin: 0;word-break: break-word; text-align:center; font-size:25px; font-weight:600;color:green;">Form submitted successfully</p>',
                                    },
                                },
                            ]
                        },
                        failureTemplate: {
                            id: uuid(),
                            contents: [
                            ]
                        },
                        fallBack: {
                            id: uuid(),
                            contents: [
                            ]
                        },
                        // fallBack: "",
                        options: {
                            align: "center",
                            padding: [15, 15, 15, 15],
                            backgroundColor: "transparent",
                            // border: {
                            //     size: 1,
                            //     style: "solid",

                            //     color: "red",
                            // },
                            display: "flex",
                            verticalAlign: "middle",
                            width: 100,
                            inputStyles: {
                                border: {
                                    size: 1,
                                    style: "solid",
                                    color: "#DADFE1",
                                    radius: 0,
                                },
                                font: {
                                    color: "#000"
                                },
                                padding: [12, 6, 12, 6],
                                margin: [0, 12, 0, 0],
                                backgroundColor: "transparent",
                            },
                            labelStyles: {
                                font: {
                                    size: 14,
                                    color: "#000",
                                    weight: "normal",
                                },
                                align: "left",
                                padding: [10, 0, 10, 0]
                            }
                        },
                    }
                    // {
                    //     id: uuid(),
                    //     type: 'forms',
                    //     heading: "",
                    //     fields: [
                    //         {
                    //             id: uuid(),
                    //             fieldType: "text",
                    //             placeholder: "Hi Forms",
                    //             fieldlabel: "Name",
                    //             fieldValue: ""
                    //         },
                    //         // {
                    //         //     id: 123456789,
                    //         //     fieldType: "checkbox",
                    //         //     fieldlabel: "get notifications"
                    //         // },
                    //         // {
                    //         //     id: 123456789,
                    //         //     fieldType: "select",
                    //         //     fieldlabel: "name",
                    //         //     options: [{
                    //         //         optionName: "Firstname",
                    //         //         optionsValue: "first_name"
                    //         //     }]
                    //         // },
                    //     ],
                    //     options: {
                    //         padding: [10, 15, 10, 15],
                    //         backgroundColor: 'transparent',
                    //         font: {
                    //             color: "#000",
                    //             size: "14px",
                    //         },
                    //         border: {
                    //             size: 0,
                    //             radius: 0,
                    //             color: '#3498DB',
                    //             style: 'solid',
                    //         },
                    //     }
                    // }
                ],
                options: {},
            },
        ],
    },
];

export default StaticContents;
