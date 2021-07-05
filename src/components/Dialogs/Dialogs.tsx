import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/store';


type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export const Dialogs = (props: PropsType) => {
    const state = props.dialogsPage
    const dialogsElements = state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message message={m.message} my={m.my}/>)
    const newMessageBody = state.newMessageBody

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const onSendMessageClick = () => {
        props.sendMessage()
        newMessageElement.current?.focus()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
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
            </div>
        </div>
    )
}