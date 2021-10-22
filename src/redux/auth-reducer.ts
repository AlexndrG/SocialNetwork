import {Dispatch} from 'redux';
import {ActionsTypes, StateType} from './redux-store';
import {authAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {stopSubmit} from 'redux-form';

export const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'

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

export const setAuthUserData = (id: string, login: string, email: string, isAuth: boolean) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth,
        },
    } as const
}

/*
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        return authAPI.me().then(data => {
            if (+data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
    }
}
*/

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const data = await authAPI.me()
    if (+data.resultCode === 0) {
        const {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, StateType, unknown, ActionsTypes | ReturnType<typeof stopSubmit>> =>
    async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe)
        if (+data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            const message = data.messages ? data.messages[0] : 'Some error!'
            const action = stopSubmit('login', {_error: message})
            dispatch(action)
        }
    }

export const logout = (): ThunkAction<void, StateType, unknown, ActionsTypes> => async (dispatch) => {
    const data = await authAPI.logout()
    if (+data.resultCode === 0) {
        dispatch(setAuthUserData('', '', '', false))
    }
}

