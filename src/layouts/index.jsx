import { useLocation } from 'umi';
import HomeContextProvider from '../context/pageData';
import Logged from './logged';
import Login from './login';
// import styles from './index.less';

export default function Layout() {
    const location = useLocation();
    const isLogin = location.pathname === '/login';
    return (
        <HomeContextProvider>
            {isLogin ? <Login/> : <Logged/>}
        </HomeContextProvider>
    );
}
