export default {
    appName: "后台管理",
    GlobalEventHub: undefined,

    // fetchServerHostURL: "",
    fetchServerHostURL: "http://116.62.150.38:8080/ggmanager/",

    adminMenuItems: [
        {
            key: "group",
            display: "分组管理",
            icon: "account-group",
            desc: ""
        },
        {
            key: "account",
            display: "用户管理",
            icon: "account",
            desc: ""
        }
    ],

    operatorMenuItems: [
        {
            key: "device",
            display: "Device",
            icon: "account-group",
            desc: ""
        },
        {
            key: "page",
            display: "Page",
            icon: "account",
            desc: ""
        },
        {
            key: "resource",
            display: "Resource",
            icon: "account",
            desc: ""
        }
        ,
        {
            key: "qr",
            display: "Qr",
            icon: "account",
            desc: ""
        },
        {
            key: "message",
            display: "Message",
            icon: "account",
            desc: ""
        },
        {
            key: "live",
            display: "Live",
            icon: "account",
            desc: ""
        },
        {
            key: "publish",
            display: "Publish",
            icon: "account",
            desc: ""
        }
    ],


    parseError: function (error) {
        if (error && error.response && error.response.data) {
            return error.response.data.message;
        } else {
            return error;
        }
    },


};