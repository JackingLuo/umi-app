import webpackConfig from './config/webpack.config';
import routes from './config/routes';

export default {
    npmClient: 'yarn',
    routes,
    ...webpackConfig
};