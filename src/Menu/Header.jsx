import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function Header() {
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        { name: 'Главная', path: '/' },
        { name: 'Дрифт-такси', path: '/drift' },
        { name: 'Time Attack', path: '/timeattack' },
        { name: 'Forza Karting', path: '/forza' }
    ];

    const handleClick = (e, path) => {
        e.preventDefault();
        history.push(path);
    };

    return (
        <nav className="menu">
            {menuItems.map((item) => (
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
