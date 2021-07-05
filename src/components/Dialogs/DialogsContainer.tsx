import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import { ActionsTypes, DialogsPageType, ProfilePageType, SidebarType} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {EmptyObject, Store} from 'redux';
import {Dialogs} from './Dialogs';

type PropsType = {
    store:  Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType, sidebar: SidebarType}, ActionsTypes>
}

export const DialogsContainer = (props: PropsType) => {
    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs
            dialogsPage={state}
            sendMessage={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
        />
    )
}