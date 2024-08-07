import React, { useState } from 'react';
import cls from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz';
import { questArray } from '../../utils/questArray';
import { quizContext } from '../../context/quizContext';
import FinisedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import { useMatch, useParams } from 'react-router-dom';

const Quiz = () => {

    const [questions, setQuestions] = useState(questArray)
    const [activeNumber, setActiveNumber] = useState(0)
    const [answerState, setAnswerState] = useState({})
    const [isQuizFinished, setIsQuizFinished] = useState(false)
    const [results, setResults] = useState({})

    function retryHandler() {
        setActiveNumber(0)
        setAnswerState({})
        setIsQuizFinished(false)
        setResults({})
    }

    function activeQuestionClick(pickedId) {
        //Проверка на последний вопрос
        const check = (activeNumber + 1 === questions.length)
        if (pickedId === questions[activeNumber].correctId) {
            setAnswerState({
                id: pickedId,
                state: 'correct',
            })
            setResults({
                ...results,
                [activeNumber + 1]: 'correct',
            })
            setTimeout(() => {
                setAnswerState({})
                if (!check) {
                    setActiveNumber(activeNumber + 1)
                }
                else {
                    setIsQuizFinished(true)
                }
            }, 1250)
        }
        else {
            setAnswerState({
                id: pickedId,
                state: 'error',
            })
            setResults({
                ...results,
                [activeNumber + 1]: 'error',
            })
            setTimeout(() => {
                setAnswerState({})
                if (!check) {
                    setActiveNumber(activeNumber + 1)
                }
                else {
                    setIsQuizFinished(true)
                }
            }, 1250)
        }

    }
    return (
        <quizContext.Provider value={{
            change: activeQuestionClick,
            answerState,
            correctId: questions[activeNumber].correctId,
        }}>
            <div className={cls.quiz}>
                <div className={cls.quizWrapper}>
                    {isQuizFinished
                        ? <FinisedQuiz
                            quiz={questions}
                            results={results}
                            retry={retryHandler}
                        />
                        : <>
                            <h1>Опрос по доте -_-</h1>
                            <ActiveQuiz
                                questions={questions}
                                num={activeNumber}
                            />
                        </>
                    }
                </div>
            </div>
        </quizContext.Provider>
    );
};

export default Quiz;