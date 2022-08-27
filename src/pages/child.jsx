import React, { useState } from 'react';
// import _ from 'lodash';
import { Tabulation } from '@/components';
import { Select } from 'antd';

const Child = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([1, 3, 5]);

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
        <>
            <Tabulation
                rowKey="id"
                url="/api/getTableList"
                filterConfig={filterConfig}
                columns={columns}
                isShowSelections={true}
                selectedRowKeys={selectedRowKeys}
                onSelected={(keys, rows) => {
                    setSelectedRowKeys(keys);
                    console.log(rows);
                }}
            />
        </>
    );

};

export default Child;
