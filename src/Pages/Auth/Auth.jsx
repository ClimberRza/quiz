import React, { useState } from 'react';
import cls from './Auth.module.css'
import MyButton from '../../components/UI/MyButton/MyButton'
import MyInput from '../../components/UI/MyInput/MyInput';
import validateControl from '../../utils/validation';


const Auth = () => {
    const [controls, setControls] = useState({
        email: {
            type: 'email',
            label: 'Email',
            errorMessage: 'Введите корректный e-mail',
            value: '',
            valid: false,
            touched: false,
            unfocused: true,
            validation: {
                required: true,
                email: true,
            }
        },
        password: {
            type: 'password',
            label: 'Пароль',
            errorMessage: 'Введите корректный пароль',
            value: '',
            valid: false,
            touched: false,
            unfocused: true,
            validation: {
                required: true,
                minLength: 6,
            }
        },
    })
    const [isFormValid, setIsFormValid] = useState(false)
    function inputFocusHandler(controlName) {
        const newControls = { ...controls }
        newControls[controlName].unfocused = false
        setControls(newControls)
    }

    function inputBlurHandler(controlName) {
        const newControls = { ...controls }
        newControls[controlName].unfocused = true
        setControls(newControls)
    }

    function inputChangeHandler(e, controlName) {
        const newControls = { ...controls }
        const newControl = { ...newControls[controlName] }
        newControl.value = e.target.value
        newControl.touched = true
        newControl.valid = validateControl(newControl.value, newControl.validation)
        newControls[controlName] = newControl
        let validForm = true
        Object.keys(newControls).forEach(name => {
            validForm = newControls[name].valid && validForm
        })
        setIsFormValid(validForm)
        setControls(newControls)
    }

    function loginHandler() {

    }

    function registerHandler() {

    }

    function renderInputs() {
        return Object.keys(controls).map((controlName, index) => {
            const control = controls[controlName]
            return (
                <MyInput
                    key={controlName + index}
                    type={control.type}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    unfocused={control.unfocused}
                    onChange={(e) => inputChangeHandler(e, controlName)}
                    onFocus={() => inputFocusHandler(controlName)}
                    onBlur={() => inputBlurHandler(controlName)}
                />
            )
        })
    }

    return (
        <div className={cls.auth}>
            <div>
                <h1>Авторизация</h1>
                <form
                    className={cls.authForm}
                    onSubmit={(e) => e.preventDefault()}
                >
                    {renderInputs()}
                    <MyButton
                        onClick={loginHandler}
                        type='correct'
                        disabled={!isFormValid}
                    >
                        Войти
                    </MyButton>
                    <MyButton
                        onClick={registerHandler}
                        type='primary'
                        disabled={!isFormValid}
                    >
                        Зарегистрироваться
                    </MyButton>
                </form>
            </div>
        </div>
    );
};

export default Auth;