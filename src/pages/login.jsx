import React, { useState } from 'react';
import { Button } from 'antd';
import imga from '../assets/111.jpeg';
import imgb from '../assets/222.jpeg';

const Test = ({

}) => {
    const [isPre, setPre] = useState(true);

    const handleSwitch = () => {
        setPre(!isPre);
    };

    return (
        <div className="img-box">
            <img src={imga} className={isPre ? '' : 'img-next'} />
            <img src={imgb} className={isPre ? 'img-next' : ''} />
            <Button onClick={handleSwitch}>切换</Button>
        </div>
    );

};

export default Test;