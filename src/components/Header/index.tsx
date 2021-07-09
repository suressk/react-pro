import React from "react";
import {Link} from 'react-router-dom'
import './Header.scss'
import logo from '@/assets/images/logo.svg'

interface IHeaderProps {

}

const nav = [
    {
        label: '首页',
        path: '/'
    },
    {
        label: '分类',
        path: '/sort'
    },
    {
        label: '更多',
        path: '/more'
    }
]

const navList = nav.map(item => (
    <Link to={item.path} key={item.label} className="nav-item">
        {item.label}
    </Link>
))

const Header: React.FC<IHeaderProps> = props => {

    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <img src={logo} alt=""/>
                </a>
            </div>

            <ul className="nav-container flex-center">
                <li className="nav flex-center">
                    {navList}
                </li>
                <li className="flex-center">
                    搜索
                </li>
                <li className="flex-center">
                    个人中心
                </li>
            </ul>
        </header>
    )
}

export default Header
