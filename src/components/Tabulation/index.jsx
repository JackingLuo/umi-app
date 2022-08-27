import React, { forwardRef, useImperativeHandle, useMemo, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
// import _ from 'lodash';
import { Table, Form, Pagination, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Filter from './components/Filters';
import http from '@/api/http.js';

const Tabulation = forwardRef(({
    form,
    rowKey,
    url,
    filterConfig,
    columns,
    dataSource,
    onSelected,
    isShowSelections,
    selectedRowKeys,
    isShowPagination,
    paginationConfig,
    ...rest
}, ref) => {

    const [filterForm] = Form.useForm();

    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
    const [dataList, setDataList] = useState(dataSource || []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const realForm = useMemo(() => (form || filterForm), [form]);

    const onFilter = useCallback(() => getTableData(), [getTableData]);

    useEffect(() => {
        //url的优先级高于dataSource
        if (url) {
            getTableData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //请求列表接口获取数据
    const getTableData = useCallback(async (params) => {
        const filterVals = realForm?.getFieldsValue() || {};
        try {
            const res = await http.post(url, { ...pagination, filters: filterVals, ...(params || {}) });
            //这里需要使用后端返回的current和pageSize,也方便处理切换时接口挂掉的情况
            const { total, current, pageSize, content = [] } = res?.data ?? {};
            setDataList(content);
            setPagination({ ...pagination, total, current, pageSize });
        } catch (error) {

        }
    }, [realForm, url, pagination]);

    //处理分页器的修改
    const handlePaginationChange = (current, pageSize) => {
        getTableData({ current, pageSize });
    };

    //增强columns
    const enhanceColumns = useMemo(() => {
        return columns;
    }, [columns]);

    //增强列表分页器
    const enhancePagination = useMemo(() => {
        return {
            showTotal: (total) => `共 ${total} 条`,
            pageSizeOptions: [10, 20, 50, 100],
            ...paginationConfig,
            ...pagination
        };
    }, [paginationConfig, pagination]);

    /** 列表选择项 */
    const rowSelection = useMemo(() => ({
        selectedRowKeys, //初始化之后不再受控,方便onSelected来处理逻辑
        onChange: (...arg) => onSelected?.(...arg)
    }), [onSelected, selectedRowKeys]);

    useImperativeHandle(ref, () => ({
        onFilter,
    }), [onFilter]);

    return (
        <ConfigProvider locale={zhCN}>
            <Filter form={realForm} filterConfig={filterConfig} onFilter={onFilter} />
            <Table
                pagination={false}
                rowKey={rowKey}
                rowSelection={isShowSelections ? rowSelection : null}
                {...rest}
                columns={enhanceColumns}
                dataSource={dataList}
            />
            {
                isShowPagination &&
                <Pagination {...enhancePagination} onChange={handlePaginationChange} />
            }
        </ConfigProvider>
    );

});

export default Tabulation;


Tabulation.propTypes = {

    /** form 实例 不传会默认创建一个form */
    form: PropTypes.object,

    /** filter配置项 */
    filterConfig: PropTypes.array,

    /** 渲染表行(dataSource)所需的key,默认id,需要后端配合 */
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,

    /** 列表数据的请求路径 */
    url: PropTypes.string,

    /** 表列的配置 */
    columns: PropTypes.arrayOf(PropTypes.shape({

        //字段名称
        dataIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,

        //表头名称
        title: PropTypes.string.isRequired,

        //是否默认展示该字段
        show: PropTypes.bool,

        //是否超出悬浮显示...
        overview: PropTypes.bool,

        //自渲染，(text,record,index) => {return reactNode}
        render: PropTypes.func,

    })).isRequired,

    /** 表的数据 */
    dataSource: PropTypes.array,

    /** pagination分页配置 */
    paginationConfig: PropTypes.object,

    /** 是否展示分页 */
    isShowPagination: PropTypes.bool,

    /** 是否显示selections */
    isShowSelections: PropTypes.bool,

    /** 暴露出去的已选项 */
    onSelected: PropTypes.func,

    /** 默认选中项的rowKey集合,需要配合onSelected使用 */
    selectedRowKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))

};

Tabulation.defaultProps = {
    rowKey: 'id',
    filterConfig: [],
    paginationConfig: {},
    isShowPagination: true,
    isShowSelections: false
};