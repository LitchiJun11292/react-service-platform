import * as constants from './constants';

let menuConfig = {
    // 高校角色
    [constants.COLLEGE]:[
        {
            title: "办事大厅",
            url: "/ucenter/service/hall"
        },
        {
            title: "组织架构",
            url: "",
            children: [
                {
                    title: "高校信息",
                    url: "/ucenter/collectInformation"
                },
                {
                    title: "学习中心",
                    url: "/ucenter/learningCenter"
                },
                {
                    title: "函授站点",
                    url: "/ucenter/correspondence"
                }
            ]
        },
        {
            title: "登记备案中心",
            url: "",
            children: [
                {
                    title: "登记备案",
                    url: "/ucenter/registration"
                },
                {
                    title: "变更进度查询",
                    url: "/ucenter/progressQuery"
                }
            ]
        },
        {
            title: "信息管理",
            url: "",
            children: [
                {
                    title: "投稿管理",
                    url: "/ucenter/contribute"
                }
            ]
        },
        {
            title: "系统管理",
            url: "",
            children: [
                {
                    title: "用户管理",
                    url: "/ucenter/userManagement"
                },
                {
                    title: "角色管理",
                    url: "/ucenter/roleManagement"
                }
            ]
        }
    ],
    // 教育机构角色
    [constants.ORGAN]:[
        {
            title: "办事大厅",
            url: "/ucenter/service/hall"
        },
        {
            title: "登记备案中心",
            url: "",
            children: [
                {
                    title: "登记备案",
                    url: "/ucenter/registration"
                },
                {
                    title: "登记备案变更",
                    url: "/ucenter/registrationChanges"
                },
                {
                    title: "高校信息变更",
                    url: "/ucenter/InformationChanges"
                }
            ]
        },
        {
            title: "机构查阅",
            url: "",
            children: [
                {
                    title: "已入档学习中心",
                    url: "/ucenter/intoFile_learningCenter"
                },
                {
                    title: "已入档函授站点",
                    url: "/ucenter/intoFile_correspondence"
                },
                {
                    title: "高校查阅",
                    url: "/ucenter/collegesView"
                }
            ]
        },
        {
            title: "监督管理",
            url: "",
            children: [
                {
                    title: "红黄名单",
                    url: "/ucenter/redyellowList"
                },
                {
                    title: "白名单查询",
                    url: "/ucenter/whiteList"
                },
                {
                    title: "入住监督",
                    url: "/ucenter/InSupervision"
                }
            ]
        },
        {
            title: "系统管理",
            url: "",
            children: [
                {
                    title: "用户管理",
                    url: "/ucenter/userManagement"
                },
                {
                    title: "角色管理",
                    url: "/ucenter/roleManagement"
                }
            ]
        }
    ],
    // 平台角色
    [constants.PLATEFORM]:[
        {
            title: "办事大厅",
            url: "/ucenter/service/hall"
        },
        {
            title: "登记备案中心",
            url: "",
            children: [
                {
                    title: "登记备案",
                    url: "/ucenter/registration"
                },
                {
                    title: "登记备案变更",
                    url: "/ucenter/registrationChanges"
                },
                {
                    title: "高校信息变更",
                    url: "/ucenter/InformationChanges"
                },
                {
                    title: "窗口期管理",
                    url: "/ucenter/windowManagement"
                }
            ]
        },
        {
            title: "监督管理",
            url: "",
            children: [
                {
                    title: "红黄名单",
                    url: "/ucenter/redyellowList"
                },
                {
                    title: "白名单查询",
                    url: "/ucenter/whiteList"
                },
                {
                    title: "入驻监督",
                    url: "/ucenter/InSupervision"
                }
            ]
        },
        {
            title: "信息管理",
            url: "",
            children: [
                {
                    title: "平台信息管理",
                    url: "/ucenter/InformationPlatform"
                },
                {
                    title: "文件管理",
                    url: "/ucenter/fileManagement"
                },
                {
                    title: "平台信息审核",
                    url: "/ucenter/auditInformation"
                },
                {
                    title: "高校投稿审核",
                    url: "/ucenter/collegeInformation"
                },
                {
                    title: "信息发布",
                    url: "/ucenter/informationPublish"
                },
                {
                    title: "Banner管理",
                    url: "/ucenter/bannerManagement"
                }
            ]
        },
        {
            title: "机构管理",
            url: "",
            children: [
                {
                    title: "已入档学习中心",
                    url: "/ucenter/intoFile_learningCenter"
                },
                {
                    title: "已入档函授站点",
                    url: "/ucenter/intoFile_correspondence"
                },
                {
                    title: "高校管理",
                    url: "/ucenter/collegesManagement"
                }
            ]
        },
        {
            title: "系统管理",
            url: "",
            children: [
                {
                    title: "用户管理",
                    url: "/ucenter/userManagement"
                },
                {
                    title: "角色管理",
                    url: "/ucenter/roleManagement"
                },
                {
                    title: "机构管理",
                    url: "/ucenter/institutionsManagement"
                },
                {
                    title: "属地管理",
                    url: "/ucenter/territorialManagement"
                },
                {
                    title: "操作日志",
                    url: "/ucenter/operationLog"
                }
            ]
        }
    ]
};


export default menuConfig;


