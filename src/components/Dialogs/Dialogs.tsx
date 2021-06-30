import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {ActionType, DialogsDataType, MessagesDataType} from '../../redux/state';

type PropsType = {
    dialogsPage: {
        dialogs: Array<DialogsDataType>
        messages: Array<MessagesDataType>
        newMessageText: string
    }
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} my={m.my}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        //props.addMessage()
        props.dispatch({type: 'ADD-MESSAGE'})
        newMessageElement.current?.focus()
    }

    const onMessageChange = () => {
        if (newMessageElement.current) {
            // props.updateNewMessageText(newMessageElement.current.value)
            const action: ActionType = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newMessageElement.current.value}
            props.dispatch(action)
        }
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
                        ref={newMessageElement}
                        cols={50} rows={7}
                        value={props.dialogsPage.newMessageText}
                        onChange={onMessageChange}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

                {/*<Message message={messages[0].message}/>*/}
                {/*<Message message={messages[1].message}/>*/}
            </div>
        </div>
    )
}