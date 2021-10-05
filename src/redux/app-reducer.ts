import {ActionsTypes, StateType} from './redux-store';
import {Dispatch} from 'redux';
import {getAuthUserData} from './auth-reducer';
import {ThunkAction} from 'redux-thunk';

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type AppStateType = {
    initialized: boolean
}

const initialState: AppStateType = {
    initialized: false,
}


export const appReducer = (state: AppStateType = initialState, action: ActionsTypes): AppStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

export const initializeApp = (): ThunkAction<void, StateType, unknown, ActionsTypes> => (dispatch) => {
    const promise = dispatch(getAuthUserData())
    // dispatch(somethingElse())
    // dispatch(somethingElse())
    // promise.then(()=>{
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}