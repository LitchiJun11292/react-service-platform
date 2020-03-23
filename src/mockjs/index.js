import Mock from 'mockjs';

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
