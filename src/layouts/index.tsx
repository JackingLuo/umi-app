import { useLocation } from 'umi';
import Logged from './logged';
import Login from './login';
// import styles from './index.less';

export default function Layout() {
    const location = useLocation();
    const isLogin = location.pathname === '/login';
    return isLogin ? <Login/> : <Logged/>;
}
