import {Dispatch} from 'redux';
import {ActionsTypes, StateType} from './redux-store';
import {authAPI, securityAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {stopSubmit} from 'redux-form';

export const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
export const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

export type AuthStateType = {
    id: string
    login: string
    email: string
    isAuth: boolean
    captchaUrl: string
}

const initialState: AuthStateType = {
    id: '',
    login: '',
    email: '',
    isAuth: false,
    captchaUrl: '',
}


export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        // case GET_CAPTCHA_URL_SUCCESS:
        //     return {
        //         ...state,
        //         captchaUrl: action.captchaUrl,
        //     }


        default:
            return state
    }
}


export const setAuthUserData = (id: string, login: string, email: string, isAuth: boolean) => (
    {type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth}} as const)

export const setCaptchaUrl = (captchaUrl: string) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const)


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


export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkAction<void, StateType, unknown, ActionsTypes | ReturnType<typeof stopSubmit>> =>
    async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)
        if (+data.resultCode === 0) {
            dispatch(setCaptchaUrl(''))
            dispatch(getAuthUserData())
        } else {
            if (+data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }

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

export const getCaptchaUrl = (): ThunkAction<void, StateType, unknown, ActionsTypes> => async (dispatch) => {
    const data = await securityAPI.getCapthaUrl()
    dispatch(setCaptchaUrl(data.url))
}
