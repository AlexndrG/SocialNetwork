import {ActionsTypes} from './redux-store';
import {Dispatch} from 'redux';
import {reset} from 'redux-form';


export const SEND_MESSAGE = 'SEND-MESSAGE'
// export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

type DialogsDataType = {
    id: number
    name: string
    avatar: string
}

type MessagesDataType = {
    id: number
    message: string
    my: boolean
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png'},
        {
            id: 2,
            name: 'Andrey',
            avatar: 'https://3dtoday.ru/upload/users/avatars/sIN8UsnRj2kXjxP6aU6Qth56TKVsssiXdwYnaXNa.png'
        },
        {id: 3, name: 'Sveta', avatar: 'https://image.flaticon.com/icons/png/512/146/146005.png'},
        {
            id: 4,
            name: 'Sasha',
            avatar: 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png'
        },
        {id: 5, name: 'Victor', avatar: 'https://image.flaticon.com/icons/png/512/146/146007.png'},
        {
            id: 6,
            name: 'Valera',
            avatar: 'https://cdn.iconscout.com/icon/free/png-256/astonishes-boy-1129046.png'
        }
    ] as Array<DialogsDataType>,

    messages: [
        {id: 1, message: 'Hi', my: true},
        {id: 2, message: 'Hello, world!', my: false},
        {id: 3, message: 'Yo', my: true},
        {id: 4, message: 'Yo', my: false},
        {id: 5, message: 'Yo', my: false}
    ] as Array<MessagesDataType>,

    // newMessageBody: 'New message'
}

export type DialogsStateType = typeof initialState

export const dialogsReducer = (state: DialogsStateType = initialState, action: ActionsTypes): DialogsStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            // const body = state.newMessageBody

            return {
                ...state,
                // newMessageBody: '',
                messages: [
                    ...state.messages,
                    // {id: 7, message: body, my: true}
                    {id: 7, message: action.body, my: true}
                ]
            }

        // case UPDATE_NEW_MESSAGE_BODY:
        //     debugger
        //     return {
        //         ...state,
        //         newMessageBody: action.newText
        //     }

        default:
            return state
    }
}

// export const sendMessage = () => {
//     return {
//         type: SEND_MESSAGE
//     } as const
// }
export const sendMessage = (body: string) => ({type: SEND_MESSAGE, body,} as const)

export const sendMessageTC = (body: string) => (dispatch: Dispatch) => {
    dispatch(sendMessage(body))
    dispatch(reset('dialogAddMessageForm'))
}

// export const updateNewMessageBody = (text: string) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_BODY,
//         newText: text
//     } as const
// }