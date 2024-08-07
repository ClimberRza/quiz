import React from 'react';
import cls from './MyInput.module.css'

const MyInput = (props) => {

    function isInvalid({valid, shouldValidate, touched, unfocused}) {
        return !valid && shouldValidate && touched && unfocused
    }
    
    const inputType = props.type || 'text'
    const htmlFor = `${props.type}-${Math.random()}`
    const classes = [cls.myInput]
    if (isInvalid(props)) {
        classes.push(cls.invalid)
    }

    return (
        <div className={classes.join(' ')}>
            <label
                htmlFor={htmlFor}
            >
                {props.label}
            </label>
            <input
                value={props.value}
                type={inputType}
                id={htmlFor}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
            />
            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Введите правильное значение'}</span>
                    : null
            }
        </div>
    );
};

export default MyInput;