import React, { forwardRef, useImperativeHandle, useState, useMemo, useRef } from 'react';
// import PropTypes from 'prop-types';
import { Popover, Button, message } from 'antd';
// import _ from 'lodash';
import { SearchCheckbox } from '@/components';

const Operation = forwardRef(({ columns, onColumnsChange }, ref) => {

    const [visible, setVisible] = useState(false);
    const [checkedList, setCheckedList] = useState(columns.filter(item => item.show).map(i => i.dataIndex));//选中的columns的dataIndex集合
    const savedCheckedList = useRef(columns.filter(item => item.show).map(i => i.dataIndex)); //已保存的选项

    //处理多选框修改
    const handleChange = (values) => {
        setCheckedList(values);
    };
    //还原values的默认配置
    const handleReduction = () => {
        const deafaultChecked = columns.filter(item => item.show).map(i => i.dataIndex);
        savedCheckedList.current = deafaultChecked;
        setCheckedList(deafaultChecked);
        onColumnsChange?.(deafaultChecked);
        setVisible(false);
    };
    //保存修改配置
    const handleSave = () => {
        if (!checkedList.length) {
            message.error('列表至少包含一列');
            return;
        }
        savedCheckedList.current = checkedList;
        //重新排序columns
        onColumnsChange?.(checkedList);
        setVisible(false);
    };
    //取消修改配置:还原至上一次的保存配置
    const handleCancel = () => {
        setCheckedList(savedCheckedList.current);
        setVisible(false);
    };

    const simulatedSelect = useMemo(() => {
        return (
            <>
                <SearchCheckbox options={columns} value={checkedList} onChange={handleChange} />
                <div className="opration-btns">
                    <Button type="primary" onClick={handleReduction}>默认</Button>
                    <Button type="primary" onClick={handleSave}>保存</Button>
                    <Button onClick={handleCancel}>取消</Button>
                </div>
            </>
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns, checkedList]);

    useImperativeHandle(ref, () => ({
        show: () => {
            // doSomething
        }
    }), []);

    return (
        <>
            <Popover
                content={simulatedSelect}
                trigger="click"
                arrowPointAtCenter
                placement="bottom"
                visible={visible}
            >
                <Button onClick={() => setVisible(true)}>自定义列</Button>
            </Popover>
        </>
    );

});

export default Operation;
