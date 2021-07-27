import {combineReducers, createStore} from 'redux';
import {addPost, profileReducer, setUserProfile, updateNewPostText} from './profile-reducer';
import {dialogsReducer, sendMessage, updateNewMessageBody} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
    usersReducer
} from './users-reducer';
import {authReducer, setAuthUserData} from './auth-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
export let store = createStore(reducers)

//============================================================================

export type StateType = ReturnType<typeof reducers>

export type ActionsTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> |
    ReturnType<typeof sendMessage> |
    ReturnType<typeof updateNewMessageBody> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> |


    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof toggleFollowingInProgress>


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
