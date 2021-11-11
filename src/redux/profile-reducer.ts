import {Dispatch} from 'redux';
import {ActionsTypes} from './redux-store';
import {authAPI, PhotoData, profileAPI, usersAPI} from '../api/api';
import {setAuthUserData} from './auth-reducer';

export const ADD_POST = 'ADD-POST'
export const DELETE_POST = 'DELETE-POST'
// export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'

export const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

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
    // newPostText: 'Hello, world!',
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
                // message: state.newPostText,
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                // newPostText: ''
            }

        case 'DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        // case UPDATE_NEW_POST_TEXT:
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }

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

        case SAVE_PHOTO_SUCCESS:
            console.log(action.photos)
            return {
                ...state,
                profile: {...state.profile, photos: action.photos.photos},
            }


        default:
            return state
    }
}

export const addPost = (postText: string) => ({type: ADD_POST, postText,} as const)
export const deletePost = (postId: number) => ({type: DELETE_POST, postId,} as const)
export const setUserProfile = (profile: ProfileDataType) => ({type: SET_USER_PROFILE, profile} as const)
export const savePhotoSuccess = (photos: PhotoData) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)


export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    const data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}


export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}


export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (+data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (image: File) => async (dispatch: Dispatch) => {
    const data = await profileAPI.savePhoto(image)
    if (+data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data))
    }
}