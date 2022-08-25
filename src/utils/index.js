import _ from 'loadsh';

/**防抖 */
export const debounced = _.debounce((func, params) => {
    if (_.isFunction(func)) {
        func(params);
    }
}, 300);