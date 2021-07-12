import React from 'react'

interface IItemProps {

}

const Item: React.FC<IItemProps> = props => {
    return (
        <div className="virtual-item">
            {props.children}
        </div>
    )
}

export default Item
