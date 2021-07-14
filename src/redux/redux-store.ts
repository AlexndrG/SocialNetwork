import {combineReducers, createStore} from 'redux';
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from './profile-reducer';
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, usersReducer} from './users-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})
export let store = createStore(reducers)

//============================================================================

export type StateType = ReturnType<typeof reducers>

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC>

export type DispatchType = (action: ActionsTypes) => void


//==============================================================
//==============================================================
//==============================================================
declare global {
    interface Window {
        // add you custom properties and methods
        store: typeof store
    }
}
window.store = store
//==============================================================
//==============================================================
//==============================================================
