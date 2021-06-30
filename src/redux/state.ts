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
        newMessageText: string
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

    addPost: () => void
    updateNewPostText: (newText: string) => void

    addMessage: () => void
    updateNewMessageText: (newText: string) => void

    getState: () => StateType
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
                {id: 2, name: 'Andrey', avatar: 'https://3dtoday.ru/upload/users/avatars/sIN8UsnRj2kXjxP6aU6Qth56TKVsssiXdwYnaXNa.png'},
                {id: 3, name: 'Sveta', avatar: 'https://image.flaticon.com/icons/png/512/146/146005.png'},
                {id: 4, name: 'Sasha', avatar: 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png'},
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
    },


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    _callSubscriber(state: StateType) {
        console.log('State changed!')
    },

    // subscribe (observer: (state: StateType) => void) {
    subscribe (observer) {
        this._callSubscriber = observer
    },
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    addPost() {
debugger
        const newPost: PostsDataType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText: string) {
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

    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },
    //===========================

    getState() {
        return this._state
    }
}


//==============================================================
declare global {
    interface Window {
        // add you custom properties and methods
        store: StoreType
    }
}
window.store = store
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

