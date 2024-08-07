import React from 'react';
import cls from './MySelect.module.css'

const MySelect = (props) => {
    const htmlFor = `${props.label}-${Math.random()}`
    return (
        <div className={cls.mySelect}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            >
                {props.options.map((option, index) => {
                    return (
                        <option
                            key={option.text + index}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    );
};

export default MySelect;