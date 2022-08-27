#### 1.使用示例
    const Child = () => {

        const filterConfig = [{
            name: 'name',
            label: '名字',
            render: (...rest) => {
                console.log('%c Here 👉 ', 'font-size:16px;background-color:#fff;color:#000;', rest);
                return (<Select options={[{ label: 'zs', value: 1 }, { label: 'ls', value: 2 }]} />);
            }
        }, {
            name: 'age',
            label: '年龄',
            required: true,
        }];

        const columns = [{
            title: '名字',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }];

        return (
            <Tabulation
                rowKey="id"
                url="/api/getTableList"
                filterConfig={filterConfig}
                columns={columns}
                isShowSelections={true}
                selectedRowKeys={[1, 3, 5]}
                onSelected={(...arg) => (console.log(arg))}
            />
        );

    };

    export default Child;

#### 2.说明
* 1.配置url之后,dataSource将不生效;
* 2.antd的API的优先级高于Tabulation中的配置,如果使用antd的API,Tabulation提供的一些功能可能不再生效;如rowSelection;

#### 3.一份后端的列表数据

{
    total: 500,
    current: current,
    pageSize: pageSize,
    sort: [],
    content:[{
            id: 11,
            name: '张三',
            age: 18
        }, {
            id: 12,
            name: '李四',
            age: 17
        }]
}