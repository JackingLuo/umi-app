import { useLocation } from 'umi';
import { useEffect } from 'react';
import { TestComponent } from 'Components';
import { testGet } from 'Api';
import yayJpg from '../assets/yay.jpg';


export default function HomePage() {
    // const match = useMatch('');
    const location = useLocation();
    console.log('%c location 👉 ', 'font-size:16px;background-color:#fff;color:#000;', location);

    useEffect(() => {
        init();
    }, []);

    const init = async ()=>{
        const res = await testGet({ id:123 });
        console.log('%c res 👉 ', 'font-size:16px;background-color:#fff;color:#000;', res);
    };

    return (
        <div>
            <TestComponent/>
            <h2>Yay! Welcome to umi!</h2>
            <p>
                <img src={yayJpg} width="388" />
            </p>
            <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
            </p>
        </div>
    );
}
