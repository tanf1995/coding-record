const Mock = require('mockjs');


Mock.setup({
    timeout: '1000-2000'
})

Mock.mock('/api/cards', 'get', function(options){
    let data = [
        {
            id: 1,
            setup: '你听过两只虫在赛道赛跑吗？',
            punchline: "打了平局。"
        },
        {
            id: 2,
            setup: '买了报废的车有什么高兴的？',
            punchline: "太讨厌了。"
        }
    ]
    return JSON.stringify(data);
})

Mock.mock('/api/urls', 'get', function(options){
    let data = [
        {
            id: 1,
            name: "百度",
            desc: "搜索网站",
            url: "https://www.baidu.com"
        },
        {
            id: 2,
            name: "淘宝",
            desc: "电商网站",
            url: "https://www.taobao.com"
        },
    ]
    return JSON.stringify(data);
})