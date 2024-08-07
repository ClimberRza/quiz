import React, { useState } from 'react';
import cls from './Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import BackDrop from '../../components/UI/BackDrop/BackDrop';

const Layout = (props) => {
    const [open, setOpen] = useState(false)

    function onClickHandler() {
        setOpen(!open)
    }

    function closeMenu() {
        setOpen(false)
    }

    return (
        <div className={cls.Layout}>
            <Drawer
                close={closeMenu}
                isOpen={open}
            />
            <MenuToggle
                onToggle={onClickHandler}
                isOpen={open}
            />
            {open
                ? <BackDrop close={closeMenu} />
                : null
            }
                {props.children}
        </div>
    );
};

export default Layout;