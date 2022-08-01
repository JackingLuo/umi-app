/** 运行时配置 */
import { matchRoutes } from 'umi';
 
/** 在初始加载和路由切换时,设置标题 */
export function onRouteChange({ clientRoutes, location }) {
    const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
    if (route) {
        document.title = route.title || '';
    }
}