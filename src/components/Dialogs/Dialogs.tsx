import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {
    ActionsTypes, DialogsPageType, ProfilePageType, SidebarType,
    StoreType
} from '../../redux/store';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {EmptyObject, Store} from 'redux';

type PropsType = {
    // store: StoreType
    store:  Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType, sidebar: SidebarType}, ActionsTypes>
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: PropsType) => {
    const state = props.store.getState().dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message message={m.message} my={m.my}/>)
    const newMessageBody = state.newMessageBody

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
        newMessageElement.current?.focus()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {dialogsElements}

                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>*/}
                {/*<DialogItem name={dialogs[1].name} id={dialogs[1].id}/>*/}
            </div>
            <div className={s.messages}>

                {messagesElements}

                <div>
                    <textarea
                        placeholder={'Enter your message'}
                        ref={newMessageElement}
                        cols={50} rows={7}
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>

                {/*<Message message={messages[0].message}/>*/}
                {/*<Message message={messages[1].message}/>*/}
            </div>
        </div>
    )
}