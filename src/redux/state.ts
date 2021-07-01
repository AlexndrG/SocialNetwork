const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

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

export type StateType = {
    dialogsPage: {
        dialogs: Array<DialogsDataType>
        messages: Array<MessagesDataType>
        newMessageBody: string
    }

    profilePage: {
        posts: Array<PostsDataType>
        newPostText: string
    }

    sidebar: {
        friends: Array<number>
    }
}


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

    /*
        addPost() {
            const newPost: PostsDataType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        },

        updateNewPostText(newText) {
            this._state.profilePage.newPostText = newText
            this._callSubscriber(this._state)
        },
        //===========================

        addMessage() {
            const newMessage: MessagesDataType =
                {
                    id: 7,
                    message: this._state.dialogsPage.newMessageText,
                    my: true
                }

            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        },

        updateNewMessageText(newText) {
            this._state.dialogsPage.newMessageText = newText
            this._callSubscriber(this._state)
        },
    */
    //===========================

    getState() {
        return this._state
    },
    //===========================

    dispatch(action) { // action -> {type: 'ADD-POST'} или {type: 'UPDATE-NEW-POST-TEXT'} или ...
        if (action.type === ADD_POST) {
            const newPost: PostsDataType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push(
                {
                    id: 7,
                    message: body,
                    my: true
                })
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newText
            this._callSubscriber(this._state)
        }
    },

}


//
// type addPostActionType = {
//     type: 'ADD-POST'
// }
//
// можно переделать так, чтобы тип выбирался TypeScript'ом по данным возврата из функции
//
/////// type addPostActionType = ReturnType<typeof addPostActionCreator>


// type updateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
//
/////// type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>


// type addMessageActionType = {
//     type: 'ADD-MESSAGE'
// }
//
/////// type addMessageActionType = ReturnType<typeof addMessageActionCreator>

// type updateNewMessageTextActionType = {
//     type: 'UPDATE-NEW-MESSAGE-TEXT'
//     newText: string
// }
//
/////// type updateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>

//=======================================
/*
export type ActionsTypes =
    addPostActionType |
    updateNewPostTextActionType |
    addMessageActionType |
    updateNewMessageTextActionType
*/
export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>


// export const addPostActionCreator = (): addPostActionType => {
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

// export const updateNewPostTextActionCreator = (newText: string): updateNewPostTextActionType => {
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
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


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


/*
export const state: StateType = {
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
            {id: 6, name: 'Valera', avatar: 'https://cdn.iconscout.com/icon/free/png-256/astonishes-boy-1129046.png'}
        ],

        messages: [
            {id: 1, message: 'Hi', my: true},
            {id: 2, message: 'Hello, world!', my: false},
            {id: 3, message: 'Yo', my: true},
            {id: 4, message: 'Yo', my: false},
            {id: 5, message: 'Yo', my: false}
        ],
        newMessageText: 'New message'
    },

    sidebar: {
        friends: [2, 4, 3]
    }
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let rendererEntireTree = (state: StateType) => {
    console.log('Hello, world!')
}

export const subscribe = (observer: (state: StateType) => void) => {
    rendererEntireTree = observer
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



//===========================

export const addPost = () => {
    const newPost: PostsDataType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    rendererEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rendererEntireTree(state)
}

//===========================

export const addMessage = () => {
    const newMessage: MessagesDataType =
        {
            id: 7,
            message: state.dialogsPage.newMessageText,
            my: true
        }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rendererEntireTree(state)
}

export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    rendererEntireTree(state)
}

*/

