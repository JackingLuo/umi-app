import { Link, Outlet } from 'umi';
import HomeContextProvider from '../context/pageData';
import FormContextProvider from '../context/form';
// import styles from './index.less';

export default function Layout() {
    // const location = useLocation();
    // const isLogin = location.pathname === '/login';
    return (
        <HomeContextProvider>
            <FormContextProvider>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/docs">Docs</Link>
                        </li>
                        <li>
                            <a href="/login">login</a>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            </FormContextProvider>
        </HomeContextProvider>
    );
}
