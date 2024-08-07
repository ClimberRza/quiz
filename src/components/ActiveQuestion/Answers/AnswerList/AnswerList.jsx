import React from 'react';
import AnswerItem from '../AnswerItem/AnswerItem'
import cls from './AnswerList.module.css'

const AnswerList = ({ answers, quest }) => {
    return (
        <ul className={cls.answerList}>
            {answers.map((answer, index) =>
                <AnswerItem
                    key={index}
                    answer={answer}
                    quest={quest}
                />
            )}
        </ul>
    );
};

export default AnswerList;