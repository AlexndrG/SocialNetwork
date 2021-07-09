import {ActionsTypes} from './redux-store';


const initialState = {
    friends: [2, 4, 3] as Array<number>
}

export type SidebarStateType = typeof initialState


export const sidebarReducer = (state: SidebarStateType = initialState, action: ActionsTypes): SidebarStateType => {

    return state
}