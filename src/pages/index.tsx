import { useLocation } from 'umi';
import { FC, useEffect } from 'react';
import { TestComponent } from '@/components';
import { testGet } from '@/api';
import yayJpg from '../assets/yay.jpg';

interface HomePageProps{
    name:string
}
const HomePage:FC<HomePageProps> = ({ name }) => {
    console.log('%c name 👉 ', 'font-size:16px;background-color:#fff;color:#000;', name);
    // const match = useMatch('');
    const location = useLocation();
    console.log('%c location 👉 ', 'font-size:16px;background-color:#fff;color:#000;', location);

    const init = async ()=>{
        const res = await testGet({ id:123 });
        console.log('%c res 👉 ', 'font-size:16px;background-color:#fff;color:#000;', res);
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div>
            <TestComponent/>
            <h2>Yay! Welcome to umi!</h2>
            <p>
                <img src={yayJpg} width="388" />
            </p>
            <p>蹦,瞎卡拉卡</p>
        </div>
    );
};

export default HomePage;