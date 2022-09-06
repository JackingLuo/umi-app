import React from 'react';
import { Form, Input, Button } from 'antd';
import { FuzzySelect, CustomSelect } from '@/components';
import { usePageForm } from '@/context/form';
import Child from './child';
// import _ from 'lodash';

const Docs = () => {

    const [form] = usePageForm({
        onValueChange: (value) => {
            console.log(value);
        }
    });



    return (
        <>
            <Form.Item name="testSelect">
                {/* <FuzzySelcect url="/api/get/options" urlParams={{ abc: [] }} isMemo={false} /> */}
                <CustomSelect url="/api/get/options" urlParams={{ abc: [] }} />
            </Form.Item>
            <Button onClick={() => {
                form.setFields([{
                    name: 'testSelect',
                    value: {
                        label: 'DDDD',
                        value: 909
                    }
                }]);
            }}>
                修改select
            </Button>
            <Form.Item name="testInput">
                <Input />
            </Form.Item>
            <Child />
        </>

    );

};

export default Docs;
