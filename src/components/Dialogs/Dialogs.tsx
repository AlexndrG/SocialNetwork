import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';


export const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage
    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} my={m.my}/>)
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

    // if (!props.isAuth) return <Redirect to={'/login'}/>

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