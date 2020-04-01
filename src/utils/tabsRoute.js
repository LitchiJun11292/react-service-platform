import WorkHall from "../page/ucenter/workHall";
import CollegeInfo from "../page/ucenter/organization/collegeInfo";
import LCSite from "../page/ucenter/organization/LCSite";
import CRSPSite from "../page/ucenter/organization/CRSPSite";
import RegOrRcd from "../page/ucenter/regOrRcdCenter/regOrRcd";
import RegOrRcdPro from "../page/ucenter/regOrRcdCenter/regOrRcdPro";
import Contribute from "../page/ucenter/InfoManage/contribute";
import UserManage from "../page/ucenter/sysManage/userManage";
import RoleManage from "../page/ucenter/sysManage/roleManage";

export default [
    /*** 办事大厅 ***/
    {
        title: "办事大厅",
        url: "/ucenter/service/hall",
        name: 'WorkHall',
        component: WorkHall
    },
    /*** 组织架构 ***/
    {
        title: "高校信息",
        url: "/ucenter/organ/collectInformation",
        name: 'CollegeInfo',
        component: CollegeInfo
    },
    {
        title: "学习中心",
        url: "/ucenter/organ/learningCenter",
        name: 'LCSite',
        component: LCSite
    },
    {
        title: "函授站点",
        url: "/ucenter/organ/correspondence",
        name: 'CRSPSite',
        component: CRSPSite
    },
    /*** 登记备案中心 ***/
    {
        title: "登记备案",
        url: "/ucenter/regrec//registration",
        name: 'RegOrRcd',
        component: RegOrRcd
    },
    {
        title: "变更进度查询",
        url: "/ucenter/regrec//progressQuery",
        name: 'RegOrRcdPro',
        component: RegOrRcdPro
    },
    /*** 信息管理 ***/
    {
        title: "投稿管理",
        url: "/ucenter/Inform/contribute",
        name: 'Contribute',
        component: Contribute
    },
    {
        title: "用户管理",
        url: "/ucenter/system/userManagement",
        name: 'UserManage',
        component: UserManage
    },
    {
        title: "角色管理",
        url: "/ucenter/system/roleManagement",
        name: 'RoleManage',
        component: RoleManage
    }
]
