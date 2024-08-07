import React from 'react';
import cls from './Question.module.css'

const Question = ({ text, num, length }) => {
    return (
        <p className={cls.quest}>
            <span>
                <strong>
                    {num}.
                </strong>
                {text}
            </span>
            <small>
                {num} из {length}
            </small>
        </p>
    );
};

export default Question;