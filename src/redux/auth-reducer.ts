import {Dispatch} from 'redux';
import {ActionsTypes} from './redux-store';
import {authAPI, LoginDataType} from '../api/api';

export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type AuthStateType = {
    id: string
    login: string
    email: string
    isAuth: boolean
}

const initialState: AuthStateType = {
    id: '',
    login: '',
    email: '',
    isAuth: false,
}


export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: string, login: string, email: string) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {
            userId,
            email,
            login,
        },
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(data => {
            if (+data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
    }
}


export const login = (data: LoginDataType) => (dispatch: any) => {
    authAPI.login(data)
        .then(response => {
            dispatch(getAuthUserData())
        })

}