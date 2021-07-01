import {ActionsTypes, DialogsPageType} from './state';

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push(
                {
                    id: 7,
                    message: body,
                    my: true
                })
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText
            return state

        default:
            return state
    }
}

// export const addMessageActionCreator = (): addMessageActionType => {
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

// export const updateNewMessageTextActionCreator = (newText: string): updateNewMessageTextActionType => {
export const updateNewMessageBodyCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: text
    } as const
}