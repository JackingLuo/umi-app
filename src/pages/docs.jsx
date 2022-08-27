import React from 'react';
import { Form, Input } from 'antd';
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
            <Form.Item name="testInput">
                <Input />
            </Form.Item>
            <Child />
        </>

    );

};

export default Docs;
