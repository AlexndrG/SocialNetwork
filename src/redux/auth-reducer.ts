import {Dispatch} from 'redux';
import {ActionsTypes, StateType} from './redux-store';
import {authAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';

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
                ...action.payload,
                // isAuth: true,
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: string, login: string, email: string, isAuth: boolean) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth,
        },
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(data => {
            if (+data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StateType, unknown, ActionsTypes> => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (+data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}

export const logout = (): ThunkAction<void, StateType, unknown, ActionsTypes> => (dispatch) => {
    authAPI.logout().then(data => {
        if (+data.resultCode === 0) {
            dispatch(setAuthUserData('', '', '', false))
        }
    })
}

