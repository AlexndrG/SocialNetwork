import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    avatar: string
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <img className={s.avatar} src={props.avatar}/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
