import React from 'react';
import cls from './BackDrop.module.css'

const BackDrop = ({ close }) => {
    return (
        <div className={cls.backDrop}
            onClick={close}
        />
    );
};

export default BackDrop;