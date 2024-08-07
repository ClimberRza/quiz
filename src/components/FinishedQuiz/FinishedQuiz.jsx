import React from 'react';
import cls from './FinishedQuiz.module.css'
import MyButton from '../UI/MyButton/MyButton';
import { Link } from 'react-router-dom';

const FinishedQuiz = ({ results, quiz, retry }) => {

    const count = Object.keys(results).reduce((cnt, key) => {
        if (results[key] === 'correct') {
            cnt++
        }
        return cnt
    }, 0)

    return (
        <div className={cls.finishedQuiz}>
            <ul>
                {quiz.map((quizItem, index) => {
                    const classes = [
                        'fa',
                        results[index + 1] === 'correct'
                            ? 'fa-check'
                            : 'fa-times',
                        cls[results[index + 1]],
                    ]
                    return (
                        <li key={index}>
                            <strong>
                                {index + 1}.
                            </strong>
                            {quizItem.text}
                            <i className={classes.join(' ')} />
                        </li>
                    )
                })}
            </ul>
            <p>Правильно: {count} из {quiz.length}</p>
            <div>
                <MyButton
                    onClick={retry}
                    type={'primary'}
                >
                    Повторить
                </MyButton>
                <Link
                    to='/'
                >
                    <MyButton
                        type={'correct'}
                    >
                        Перейти к другим тестам
                    </MyButton>
                </Link>
                <MyButton
                    type={'error'}
                >
                    Отправить отчёт об ошибке
                </MyButton>
            </div>
        </div>
    );
};

export default FinishedQuiz;