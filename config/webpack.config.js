const path = require('path');

export default {
    // eslint-disable-next-line no-unused-vars
    chainWebpack(memo, { env, webpack }) {
        memo.resolve.alias.set('@Components', path.resolve(__dirname, '../src/components'));
        memo.resolve.alias.set('@Api', path.resolve(__dirname, '../src/services/api.js'));
        memo.resolve.alias.set('@Context', path.resolve(__dirname, '../src/context'));
    },
};