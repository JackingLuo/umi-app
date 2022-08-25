import React, { createContext, useContext } from 'react';
import { Form } from 'antd';

const FormContext = createContext();

FormContext.displayName = 'FormContext';

export const usePageForm = ({ onValueChange }) => {
    const { form } = useContext(FormContext);
    form.onValueChange = onValueChange;
    return [form];
};

const FormContextProvider = ({ children }) => {
    const [form] = Form.useForm();

    const handleValuesChange = (...rest) => {
        //发布消息
        form.onValueChange?.(...rest);
    };

    //注册全局form
    return (
        <FormContext.Provider value={{ form }}>
            <Form form={form} onValuesChange={handleValuesChange}>
                {children}
            </Form>
        </FormContext.Provider>
    );
};

export default FormContextProvider;

// 使用
// const [form]  = usePageForm({
//     onValueChange: (value) => {
//         console.log(value);
//     }
// });