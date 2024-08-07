import React from 'react';
import cls from './ActiveQuestion.module.css'
import Question from './Question/Question';
import AnswerList from './Answers/AnswerList/AnswerList'
import AnswerResult from './Answers/AnswerResult/AnswerResult';

const ActiveQuestion = ({ number, question, len }) => {
    return (
        <div className={cls.activeQuest}>
            <Question text={question.text} num={number} length={len}/>
            <AnswerList answers={question.answers} quest={question}/>
            <AnswerResult/>
        </div>
    );
};

export default ActiveQuestion;