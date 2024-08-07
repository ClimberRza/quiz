import React from 'react';
import cls from './MyButton.module.css'

const MyButton = (props) => {

    const classes = [
        cls.myButton,
        cls[props.type]
    ]
    
    return (
        <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={classes.join(' ')}
        >
            {props.children}
        </button>
    );
};

export default MyButton;