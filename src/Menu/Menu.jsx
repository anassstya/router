import React from "react";
import './Menu.css';
import { data } from './data.js';
import { useLocation, Link } from "react-router-dom";

export default function Menu() {
    const location = useLocation();

    return (
        <nav >
            <ul className="headerMenu">
                {data.map((item) => (
                    <li
                        key={item.path}
                        className={`menu__item${location.pathname === item.path ? ' menu__item-active' : ''}`}
                    >
                        <Link to={`/menu${item.path}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to='/'>Назад</Link>
        </nav>
    );
}
