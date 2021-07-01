import {ActionsTypes, PostsDataType, ProfilePageType} from './state';

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

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