import React from 'react';
import { useParams } from 'umi';
import { withAuth } from '@/hocs';

const Detail = () => {
    const params = useParams();
    console.log('%c params 👉 ', 'font-size:16px;background-color:#fff;color:#000;', params);
    return (
        <>
           详情
        </>
    );
   
};

export default withAuth(Detail);
