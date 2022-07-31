import { useState } from 'react';

const DocsPage = () => {
    const [num, setNum] = useState(1);
    return (
        <div>
            <p onClick={()=>{
                setNum(num + 1);
            }}>This is umi docs.
            </p>
            <p className="test">{num}</p>
        </div>
    );
};

export default DocsPage;
