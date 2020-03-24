import Mock from 'mockjs';

/**
 *  login 模块
 **/
// 登录
Mock.mock('/mocks/security/user/login', {
    "successFlag": true,
    "status": 200,
    "result": /[a-z][0-9a-z]{30}/
});

// 获取用户信息
Mock.mock('/mocks/userInfo/currentUserInfo', {
    "successFlag": true,
    "status": 200,
    "result": {
        "activeFlag": true,
        "actualName": "宁波高校",
        "createAt": "2020-03-23 18:27:21",
        "id": 175,
        "idCard": "513436200003158637",
        "orgId": 210,
        "orgName": "宁波市广播电视大学",
        "phone": "15256653880",
        "target": "college",
        "updateAt": "2020-03-23 19:22:02",
        "userLevel": 1,
        "userName": "51885_ningbo",
        "userStatus": "active"
    }
});


/**
 *  ucenter 模块
 **/
// 普通表格
Mock.mock('/mocks/list', {
    "successFlag": true,
    "status": 200,
    "result": {
        "list|5": [{
            "busiTypeName|1": ["学习中心-登记", "学习中心-登记（补）", "学习中心-信息变更"],
            "busiType|1": ["platForm", "terEduExam", "serverCenterExam"],
            "flowNodes|1-2": [
                {"count": 0,
                    "flowNodeName": "待审核",
                    "flowNodeType": "examing",
                    "url": "/ucenter/auditInformation?status=examining"
                }
            ]
        }]
    }
});


// 普通表格
// Mock.mock('/mocks/list', {
//     "successFlag": true,
//     "status": 200,
//     "result": {
//         "list|5": [{
//             "id|+1": 1,
//             "userName": "@cname",
//             "sex|1-2": 1,
//             "state|1-5": 1,
//             "interest|1-8": 1,
//             "birthdays": "2000-01-01",
//             "isMarraied|0-1": 1,
//             "address": "北京市海淀区",
//             "time": "09：:00:00",
//         }],
//         "page": 1,
//         "page_size": 10,
//         "total": 100
//     }
// });


/**
 *  home 模块
 **/
