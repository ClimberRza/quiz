import React from 'react';
import cls from './MenuToggle.module.css'

const MenuToggle = ({ isOpen, onToggle }) => {
    const classes = [
        'fa',
        cls.menuToggle,
    ]

    if (isOpen) {
        classes.push('fa-times')
        classes.push(cls.open)
    } else {
        classes.push('fa-bars')
    }

    return (
        <i
            onClick={onToggle}
            className={classes.join(' ')}
        />
    );
};

export default MenuToggle;