import React, { useContext } from 'react';
import cls from './AnswerItem.module.css'
import { quizContext } from '../../../../context/quizContext';

const AnswerItem = ({ answer }) => {
    const { change, answerState, correctId } = useContext(quizContext)

    const classes = [cls.answerItem]
    if (answerState.id !== answer.id && answerState.state) {
        classes.push(cls.notActive)
    }
    if (answerState.id === correctId && answerState.id === answer.id) {
        classes.push(cls.correct)
    }
    else if (answerState.id !== correctId && answerState.id === answer.id) {
        classes.push(cls.error)
    }

    return (
        <li
            className={
                !answerState.id
                    ? [...classes, cls.mouseOn].join(' ')
                    : classes.join(' ')
            }
            onClick={() => {
                if (answerState.id) {
                    return
                }
                change(answer.id)
            }}
            >
            {answer.text}
        </li>
    );
};

export default AnswerItem;