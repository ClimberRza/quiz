import React, { useContext } from 'react';
import { quizContext } from '../../../../context/quizContext';

const AnswerResult = () => {
    const { answerState } = useContext(quizContext)
    if (!answerState.id) {
        return (
            <h2>
                <pre> </pre>
            </h2>
        )
    }
    return (
        <h2>
            {
                answerState.state === 'correct'
                    ? 'Правильно'
                    : 'Ошибка'
            }
        </h2>
    );
};

export default AnswerResult;