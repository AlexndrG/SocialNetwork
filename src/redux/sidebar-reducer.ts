import {ActionsTypes, SidebarType} from './store';

const initialState = {
    friends: [2, 4, 3]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {

    return state
}