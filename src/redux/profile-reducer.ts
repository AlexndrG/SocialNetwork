import {ActionsTypes, PostsDataType, ProfilePageType} from './store';

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post!', likesCount: 20},
        {id: 3, message: 'Blabla', likesCount: 777},
        {id: 4, message: 'Dada', likesCount: 777},
        {id: 5, message: 'Yo, yo, yo!!!', likesCount: 777}
    ],
    newPostText: 'Hello, world!'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            const stateCopy = {...state}
            stateCopy.posts=[...state.posts]
            stateCopy.posts.unshift(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }

        default:
            return state
    }
}

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