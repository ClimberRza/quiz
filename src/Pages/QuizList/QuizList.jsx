import React from 'react';
import cls from './QuizList.module.css'
import { NavLink } from 'react-router-dom';

const QuizList = () => {

    const tests = [1, 2, 3]

    return (
        <div className={cls.quizList}>
            <div>
                <h1>Список тестов</h1>
                <ul>
                    {tests.map((test, index) =>
                        <li
                            key={index}
                        >
                            <NavLink
                                to={'/quiz/' + test}
                            >
                                Тест № {test}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default QuizList;