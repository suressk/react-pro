import React from 'react';

import image from '@/assets/images/1.jpg'

interface ISortProps {

}

const Sort: React.FC<ISortProps> = props => {

    return (
        <>
            排序 Sort
            <img src={image} alt=""/>
        </>
    );
}

export default Sort;
