import { Dispatch } from 'redux';
import {ActionsTypes} from './redux-store';
import {profileAPI, usersAPI} from '../api/api';

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

export type ProfileDataType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

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
    newPostText: 'Hello, world!',
    profile: {} as ProfileDataType,
    status: '',
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

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }


        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostText = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}


export const setUserProfile = (profile: ProfileDataType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}



export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}


export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (+data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}
