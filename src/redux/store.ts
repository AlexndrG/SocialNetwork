import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from './profile-reducer';
import {sidebarReducer} from './sidebar-reducer';

export type DialogsDataType = {
    id: number
    name: string
    avatar: string
}

export type MessagesDataType = {
    id: number
    message: string
    my: boolean
}

export type PostsDataType = {
    message: string
    likesCount: number
    id: number
}

export type DialogsPageType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
    newMessageBody: string
}

export type ProfilePageType = {
    posts: Array<PostsDataType>
    newPostText: string
}

export type SidebarType = {
    friends: Array<number>
}


export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>



export type StoreType = {
    _state: StateType

    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void

    getState: () => StateType

    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // addMessage: () => void
    // updateNewMessageText: (newText: string) => void

    dispatch: (action: ActionsTypes) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post!', likesCount: 20},
                {id: 3, message: 'Blabla', likesCount: 777},
                {id: 4, message: 'Dada', likesCount: 777},
                {id: 5, message: 'Yo, yo, yo!!!', likesCount: 777}
            ],
            newPostText: 'Hello, world!'
        },

        dialogsPage: {
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
            ],

            messages: [
                {id: 1, message: 'Hi', my: true},
                {id: 2, message: 'Hello, world!', my: false},
                {id: 3, message: 'Yo', my: true},
                {id: 4, message: 'Yo', my: false},
                {id: 5, message: 'Yo', my: false}
            ],
            newMessageBody: 'New message'
        },

        sidebar: {
            friends: [2, 4, 3]
        }
    },


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    _callSubscriber(state) {
        console.log('State changed!')
    },

    // subscribe (observer: (state: StateType) => void) {
    subscribe(observer) {
        this._callSubscriber = observer
    },
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //===========================

    getState() {
        return this._state
    },
    //===========================

    dispatch(action) {
        store._state.profilePage = profileReducer(store._state.profilePage, action)
        store._state.dialogsPage = dialogsReducer(store._state.dialogsPage, action)
        store._state.sidebar = sidebarReducer(store._state.sidebar, action)

        this._callSubscriber(this._state)
    },


}


//==============================================================
//==============================================================
//==============================================================
declare global {
    interface Window {
        // add you custom properties and methods
        store: StoreType
    }
}
window.store = store
//==============================================================
//==============================================================
//==============================================================
