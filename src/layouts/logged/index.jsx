import { Link, Outlet } from 'umi';

export default function Layout() {
    return (
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
    );
}
