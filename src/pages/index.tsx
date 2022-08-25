import { useLocation } from 'umi';
import { FC, useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { usePageForm } from '@/context/form';
import { testGet } from '@/api';
// import yayJpg from '../assets/yay.jpg';
import { DynamicTable } from '@/components';


interface HomePageProps{
    name:string
}


const HomePage:FC<HomePageProps> = ({ name }) => {
    // const match = useMatch('');
    // const location = useLocation();
    
    const [form] = usePageForm({
        onValueChange(value){
            console.log(value);
        }
    });
    // const [testNo, setTestNo] = useState<number>(0);

    const init = async ()=>{
        const res = await testGet({ id:123 });
        // console.log('%c res 👉 ', 'font-size:16px;background-color:#fff;color:#000;', res);
    };

    const columns = operation => {
        return [{
            title: '名字',
            dataIndex: 'name',
            render: (value, row) => {
                return (
                    <Form.Item {...row.yKey} name={[row.yKey.name, 'chargeType']} rules={[{ required: true, message: '请选择费用名称' }]}>
                        <Input/>
                    </Form.Item>
                );
            }
        }, {
            title: '操作',
            dataIndex: 'control',
            width: 120,
            editable: true,
            render: (__, record, index) => {
                return (
                    <>
                        <Button
                            onClick={() => {
                                operation.remove(index);
                            }}>
                            删除
                        </Button>
                        <Button
                            onClick={() => {
                                operation.copy(index, ['id']);
                            }}
                        >
                            复制
                        </Button>
                    </>
                );
            }
        }];
    };
    
    const handleClick = ()=>{
        // console.log(form.getFieldsValue());
        const value = [{
            chargeType:123
        }, {
            chargeType:456
        }];
        form.setFields([{ name:'dynamic-table', value:value }]);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div>
            <h2>Yay! Welcome to umi!</h2>
            {/* <img src={yayJpg} width="388" /> */}
            <Button onClick={handleClick}>设置列表</Button>
            <DynamicTable columns={columns} name="dynamic-table" form={form}/>
        </div>
    );
};

export default HomePage;