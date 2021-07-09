import React from "react";
import './Loading.scss'

interface ILoadingProps {
    active?: boolean
}

const Loading: React.FC<ILoadingProps> = props => {

    return (
        <div className="loading">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
        </div>
    )
}

export default Loading
