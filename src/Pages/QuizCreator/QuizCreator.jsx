import React, { useState } from 'react';
import cls from './QuizCreator.module.css'
import MyButton from '../../components/UI/MyButton/MyButton';
import { createControl } from '../../formControl/CreateControl';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import MyInput from '../../components/UI/MyInput/MyInput';
import validateControl from '../../utils/validation';
import MySelect from '../../components/UI/MySelect/MySelect';
import { validateForm } from '../../utils/validateForm';

const QuizCreator = () => {
    const [formControls, setFormControls] = useState(createFormControls())
    const [isFormValid, setIsFormValid] = useState(false)
    const [quiz, setQuiz] = useState([])
    const [rightAnswerId, setRightAnswerId] = useState(1)

    function createOptionControl(number) {
        return createControl({
            label: `Вариант ответа ${number}`,
            type: 'text',
            errorMessage: 'Ответ не может быть пустым'
        }, { required: true })
    }

    function createFormControls() {
        return {
            question: createControl({
                label: 'Введите вопрос',
                type: 'text',
                errorMessage: 'Вопрос не может быть пустым',
            }, { required: true }),
            option1: createOptionControl(1),
            option2: createOptionControl(2),
            option3: createOptionControl(3),
            option4: createOptionControl(4),
        }
    }

    function controlChangeHandler(value, controlName) {
        const newControls = { ...formControls }
        const newCntrl = newControls[controlName]
        newCntrl.value = value
        newCntrl.touched = true
        newCntrl.valid = validateControl(newCntrl.value, newCntrl.validation)
        newControls[controlName] = newCntrl
        setIsFormValid(validateForm(newControls))
        setFormControls(newControls)
    }

    function inputFocusHandler(controlName) {
        const newControls = { ...formControls }
        newControls[controlName].unfocused = false
        setFormControls(newControls)
    }

    function inputBlurHandler(controlName) {
        const newControls = { ...formControls }
        newControls[controlName].unfocused = true
        setFormControls(newControls)
    }

    function renderControls() {
        return Object.keys(formControls).map((controlName, index) => {
            const control = formControls[controlName]
            return (
                <Auxilary key={index}>
                    <MyInput
                        value={control.value}
                        errorMessage={control.errorMessage}
                        type={control.type}
                        label={control.label}
                        valid={control.valid}
                        validation={control.validation}
                        unfocused={control.unfocused}
                        touched={control.touched}
                        shouldValidate={!!control.validation}
                        onChange={(e) => controlChangeHandler(e.target.value, controlName)}
                        onFocus={() => inputFocusHandler(controlName)}
                        onBlur={() => inputBlurHandler(controlName)}
                    />
                    {index === 0 ? <hr style={{ marginTop: 18, marginBottom: '9px' }}></hr> : null}
                </Auxilary>
            )
        })
    }

    function submitHandler(e) {
        e.preventDefault()
    }

    function addQuestionHandler(e) {
        const newQuiz = [...quiz]
        const index = newQuiz.length + 1
        const { question, option1, option2, option3, option4 } = formControls
        newQuiz.push({
            id: index,
            rightAnswerId,
            question: question.value,
            answers: [
                { text: option1.value, id: 1 },
                { text: option2.value, id: 2 },
                { text: option3.value, id: 3 },
                { text: option4.value, id: 4 },
            ]
        })
        setFormControls(createFormControls())
        setIsFormValid(false)
        setRightAnswerId(1)
        setQuiz(newQuiz)
    }

    function createTestHandler(e) {
        console.log(quiz);
    }

    function selectChangeHandler(value) {
        setRightAnswerId(+value)
    }

    return (
        <div className={cls.quizCreator}>
            <div>
                <h1>Создание теста</h1>
                <form onSubmit={submitHandler}>
                    {renderControls()}
                    <MySelect
                        onChange={selectChangeHandler}
                        value={rightAnswerId}
                        label='Выберите правильный ответ'
                        options={[
                            { text: '1', value: 1 },
                            { text: '2', value: 2 },
                            { text: '3', value: 3 },
                            { text: '4', value: 4 },
                        ]}
                    />
                    <MyButton
                        type='primary'
                        onClick={addQuestionHandler}
                        disabled={!isFormValid}
                    >
                        Добавить вопрос
                    </MyButton>
                    <MyButton
                        type='correct'
                        onClick={createTestHandler}
                        disabled={quiz.length === 0}
                    >
                        Создать тест
                    </MyButton>
                </form>
            </div>
        </div>
    );
};

export default QuizCreator;