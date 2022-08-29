import _ from 'loadsh';

/**防抖 */
export const debounced = _.debounce((func, params) => {
    if (_.isFunction(func)) {
        func(params);
    }
}, 260);

/**
 * @variablea [any] 需要校验的变量
 * @type [string] 预期的类型结果,不传返回类型字符
 * @Description  获取变量的类型
 */
export const getVariableaType = (variablea, type) => {
    const variableaType = Object.prototype.toString.call(variablea);
    let typeDesc;
    switch (variableaType) {
        case '[object Object]':
            typeDesc = 'Object';
            break;
        case '[object Array]':
            typeDesc = 'Array';
            break;
        case '[object Function]':
            typeDesc = 'Function';
            break;
        case '[object Boolean]':
            typeDesc = 'Boolean';
            break;
        case '[object String]':
            typeDesc = 'String';
            break;
        case '[object Number]':
            typeDesc = 'Number';
            break;
        case '[object Undefined]':
            typeDesc = 'Undefined';
            break;
        case '[object Null]':
            typeDesc = 'Null';
            break;
        default:
            typeDesc = variableaType;
    }
    return type ? typeDesc === type : typeDesc;
};