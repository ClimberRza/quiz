import React from 'react';
import cls from './ActiveQuiz.module.css'
import ActiveQuestion from './ActiveQuestion/ActiveQuestion';

const ActiveQuiz = ({ questions, num, }) => {
    return (
        <div className={cls.activeQuiz}>
                <ActiveQuestion
                    len={questions.length}
                    number={num + 1}
                    question={questions[num]}
                />
        </div>
    );
};

export default ActiveQuiz;