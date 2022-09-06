// mock数据不可在运行时使用
export default {
    '/api/getLoginInfo': (req, res) => {
        // 添加跨域请求头
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(JSON.stringify([{ a: 1 }]));
    },
    'POST /api/islogin': (req, res) => {
        const { isLogin } = req.body;
        res.end(JSON.stringify({ isLogin: !isLogin }));
    },
    'POST /api/user/get': {
        name: 'zs'
    },
    'POST /api/get/options': {
        other: null,
        content: [{
            value: 1,
            label: 'AAAAA'
        }, {
            value: 2,
            label: 'BBBBB'
        }, {
            value: 3,
            label: 'CCCC'
        }]
    },
    'POST /api/getTableList': (req, res) => {
        const { current, pageSize } = req.body;
        res.end(JSON.stringify({
            total: 500,
            current: current,
            pageSize: pageSize,
            sort: [],
            content: current === 2
                ?
                [{
                    id: 11,
                    name: '张三',
                    age: 18
                }, {
                    id: 12,
                    name: '李四',
                    age: 17
                }]
                :
                [{
                    id: 1,
                    name: '张三',
                    age: 18
                }, {
                    id: 2,
                    name: '李四',
                    age: 17
                }, {
                    id: 3,
                    name: '张三',
                    age: 18
                }, {
                    id: 4,
                    name: '李四',
                    age: 17
                }, {
                    id: 5,
                    name: '张三',
                    age: 18
                }, {
                    id: 6,
                    name: '李四',
                    age: 17
                }, {
                    id: 7,
                    name: '张三',
                    age: 18
                }, {
                    id: 8,
                    name: '李四',
                    age: 17
                }, {
                    id: 9,
                    name: '张三',
                    age: 18
                }, {
                    id: 10,
                    name: '李四',
                    age: 17
                }]
        }));

    }
};