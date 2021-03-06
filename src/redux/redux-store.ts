import {applyMiddleware, combineReducers, createStore} from 'redux';
import {addPost, profileReducer, setUserProfile, setStatus, deletePost, savePhotoSuccess} from './profile-reducer';
import {dialogsReducer, sendMessage} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollowSuccess,
    usersReducer
} from './users-reducer';
import {authReducer, setAuthUserData, setCaptchaUrl} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {appReducer, initializedSuccess} from './app-reducer';


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

//============================================================================

export type StateType = ReturnType<typeof reducers>

export type ActionsTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof deletePost> |
    // ReturnType<typeof updateNewPostText> |
    ReturnType<typeof sendMessage> |
    // ReturnType<typeof updateNewMessageBody> |
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof savePhotoSuccess> |
    ReturnType<typeof setStatus> |

    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof setCaptchaUrl> |

    ReturnType<typeof toggleFollowingInProgress> |

    ReturnType<typeof initializedSuccess>


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
