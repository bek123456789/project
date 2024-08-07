import React from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const links = [
        { id: 1, link: "Home", path: "/" },
        { id: 2, link: "About me", path: "/about" },
        { id: 3, link: "Skills", path: "/lkk" },
        { id: 4, link: "Portfolio", path: "/lkk" },
        { id: 5, link: "Contacts", path: "/lkk" },
    ];

    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__links">
                        {links.map((el) => (
                            <Link
                                className={`header__link ${location.pathname === el.path ? 'active' : ''}`}
                                to={el.path}
                                key={el.id}
                            >
                                {el.link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
