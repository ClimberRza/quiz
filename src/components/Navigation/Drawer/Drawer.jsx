import React from 'react';
import cls from './Drawer.module.css'
import { NavLink } from 'react-router-dom';

const Drawer = ({ isOpen, close }) => {
    const links = [
        { to: '/', lable: 'QuizList', exact: true },
        { to: '/auth', lable: 'Auth', exact: false },
        { to: '/quiz-creator', lable: 'QuizCreator', exact: false },
    ]
    const classes = [cls.drawer]

    if (isOpen) {
        classes.push(cls.open)
    }

    return (
        <nav className={classes.join(' ')}>
            <ul>
                {links.map((link, index) =>
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            onClick={close}
                            className={({isActive}) => isActive ? cls.active : null}
                        >
                            {link.lable}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Drawer;