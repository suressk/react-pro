import React, {useState} from 'react';

import image from '../../assets/images/3.jpg'
interface ICountProps {

}

const Count: React.FC<ICountProps> = props => {

    const [count, setCount] = useState(0)

    return (
        <>
            App: {count}
            <img src={image} alt=""/>
            <p>
                <button onClick={() => { setCount(count + 1)}}>Count++</button>
            </p>
        </>
    );
}

export default Count;
