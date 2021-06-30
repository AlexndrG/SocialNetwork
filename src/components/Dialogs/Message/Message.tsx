import React from 'react';
import s from './../Dialogs.module.css';

type MessagePropsType = {
    message: string
    my: boolean
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message + ' ' + (!props.my && s.messageRight)}>{props.message}</div>
    )
}