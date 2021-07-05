import React, {ChangeEvent} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    const onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return (
                        <Dialogs
                            dialogsPage={state}
                            sendMessage={onSendMessageClick}
                            updateNewMessageBody={onNewMessageChange}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}