import React, {useState, useCallback, useEffect, useRef, ReactElement, ReactNode, ReactHTML} from 'react'
import Item from './Item'
import './List.scss'

/**
 * div 内容区上面缓冲区
 * List 为虚拟列表展示区（即实际看到的内容区）
 * Item 为虚拟列表的每一项
 * 
 * div 内容区下的缓冲区
 * 
 * 缓冲区用于撑开整个滚动列表区域
 */

/**
 * compute:
 * startIndex 虚拟列表开始截取索引
 * endIndex 虚拟列表结束索引
 */

interface IVirtualListProps {
    resources: any[]
}

// FIXME 默认每个 item 高度为 32px
const itemHeight = 32

const VirtualList: React.FC<IVirtualListProps> = props => {

    const { resources } = props // 数据列表

    const containerRef = useRef(null)
    const [scrollTop, setScrollTop] = useState(0) // 滚动条位置
    const [startIndex, setStartIndex] = useState(0) // 开始索引
    const [itemCount, setItemCount] = useState(0)
    const [endIndex, setEndIndex] = useState(0) // 结束索引

    const [positions, setPositions] = useState<any[]>([])

    const [listHeight, setListHeight] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)
    const [visibleData, setVisibleData] = useState<any[]>([]) // 内容区实际展示的数据列表

    const [items, setItems] = useState<any[]>([])
    // console.log(list)

    useEffect(() => {
        const positions = initPositionCache(itemHeight, resources.length)
        // debugger
        setPositions(positions)
        // @ts-ignore
        const height = containerRef.current.clientHeight // 可视区高度
        setClientHeight(height)
        const count = Math.ceil(height / itemHeight)
        setItemCount(count) // 展示内容的 item 数量
        setListHeight(positions[positions.length - 1]?.bottom) // 滚动区高度

        setEndIndex(count)
        getVisibleData()
    }, [])

    const computeRange = useCallback(() => {
        const startIndex = ~~(scrollTop / itemHeight)
        return {
            startIndex,
            endIndex: startIndex + itemCount
        }
    }, [itemCount, itemHeight, scrollTop])

    // console.log(positions)

    // setVisibleData(list.slice(startIndex, endIndex))

    const getVisibleData = useCallback(() => {
        const list = resources.slice(startIndex, endIndex)
        setVisibleData(list)
        setItems(getActualItems())
    }, [resources, startIndex, endIndex])

    const handleScroll = useCallback((e) => {
        const top = e.target.scrollTop
        
        setScrollTop(top)
        /**
         * 计算更新 startIndex
         */
        const {startIndex, endIndex} = computeRange()
        setStartIndex(startIndex)
        setEndIndex(endIndex)
        getVisibleData()
    }, [setStartIndex, setEndIndex, computeRange, getVisibleData, setScrollTop])

    const getActualItems = useCallback(() => {
        return visibleData.map(item => (<Item key={item.id}>{item.txt}</Item>))
    }, [visibleData])
    
    return (
        <div 
            className="virtual-container"
            onScroll={handleScroll}
            ref={containerRef}
        >
            {/* 滚动区域 */}
            {/* <div
                style={{
                    height: listHeight + 'px'
                }}
            > */}
            <div
                className="actual-content"
                style={{
                    height: clientHeight + 'px',
                    marginTop: scrollTop + 'px',
                    marginBottom: (listHeight - clientHeight - scrollTop + 'px')
                }}
            >
                {/* 实际内容显示区 */}
                {items}
            </div>
            {/* </div> */}
        </div>
    )
}

// function computeRange (
//     scrollTop: number,
//     itemHeight: number,
//     itemCount: number
// ) {
//     const startIndex = ~~(scrollTop / itemHeight)
//     return {
//         startIndex,
//         endIndex: startIndex + itemCount
//     }
// }

/**
 * 缓存列表的总体初始化高度
 * @param itemHeight 
 * @param len 
 */
function initPositionCache(
    itemHeight: number = 32,
    len: number = 0
) {
    let index = 0
    const positions = new Array(len)
    while (index < len) {
        positions[index] = {
            index,
            height: itemHeight,
            top: index * itemHeight,
            bottom: (++index) * itemHeight
        }
    }
    return positions
}

export default VirtualList
