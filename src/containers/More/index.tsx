import React from 'react';

import image from '@/assets/images/2.jpg'

interface IMoreProps {

}

const More: React.FC<IMoreProps> = props => {


    return (
        <>
            更多 More
            <img src={image} alt=""/>
        </>
    );
}

export default More;
