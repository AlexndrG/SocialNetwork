import {ActionsTypes} from './redux-store';

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostsDataType = {
    message: string
    likesCount: number
    id: number
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post!', likesCount: 20},
        {id: 3, message: 'Blabla', likesCount: 777},
        {id: 4, message: 'Dada', likesCount: 777},
        {id: 5, message: 'Yo, yo, yo!!!', likesCount: 777}
    ] as Array<PostsDataType>,
    newPostText: 'Hello, world!'
}

export type ProfileStateType = typeof initialState

export const profileReducer = (state: ProfileStateType = initialState, action: ActionsTypes): ProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                // id: state.posts[state.posts.length-1].id + 1,
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}