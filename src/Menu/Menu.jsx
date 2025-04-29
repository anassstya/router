import React from "react";
import './Menu.css';
import { data } from './data.js';
import { useNavigate, useLocation } from "react-router-dom";

export default function Menu() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e, path) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <nav className="headerMenu">
            {data.map((item) => (
                <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handleClick(e, item.path)}
                    className={`menu__item${location.pathname === item.path ? ' menu__item-active' : ''}`}
                >
                    {item.name}
                </a>
            ))}
        </nav>
    );
}
