import { useState, useEffect } from 'react';
import { usePageData } from '@Context/pageData';

const DocsPage = () => {
    const [num, setNum] = useState(1);
    const { store, dispatch } = usePageData();

    useEffect(()=>{
        return ()=> {
            console.log('%c 卸载了 👉 ', 'font-size:16px;background-color:#fff;color:#000;', num);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <p onClick={()=>{
                setNum(num + 1);
            }}>This is umi docs.
            </p>
            <p className="test" onClick={()=>{
                dispatch({ type:'userInfo.change', payload:{ name:'张三', age:18 } });
            }}>{num}
            </p>
            <h1>{JSON.stringify(store)}</h1>
        </div>
    );
};

export default DocsPage;
