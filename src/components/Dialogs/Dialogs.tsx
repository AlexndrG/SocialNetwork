import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validator';
import {Textarea} from '../common/FormsControl/FormsControl';

const maxLength50 = maxLengthCreator(50)

type AddMessageFormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*<textarea placeholder={'Enter your message'} cols={50} rows={7}/>*/}
                {/*<Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message...'}*/}
                <Field
                    autoFocus
                    component={Textarea} name={'newMessageBody'} placeholder={'Enter your message...'}
                    cols={50} rows={7}
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export const Dialogs = (props: DialogsPropsType) => {
    const addMessage = (values: AddMessageFormDataType) => {
        // console.log(values)
        props.sendMessageTC(values.newMessageBody)
    }

    const state = props.dialogsPage
    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} my={m.my}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

                <AddMessageFormRedux onSubmit={addMessage}/>

            </div>
        </div>
    )
}


/*

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

*/