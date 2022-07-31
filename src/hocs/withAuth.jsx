import { Navigate } from 'umi';

const withAuth = (Comment) => () => {
    const { isLogin = true } = {};
    if (isLogin){
        return <Comment/>;
    } else {
        return <Navigate to="/login"/>;
    }
};

export default withAuth;