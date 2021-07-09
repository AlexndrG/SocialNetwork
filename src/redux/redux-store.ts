import {combineReducers, createStore, EmptyObject, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {ActionsTypes, DialogsPageType, ProfilePageType, SidebarType } from './store';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(reducers)

//==============================================================
//==============================================================
//==============================================================
declare global {
    interface Window {
        // add you custom properties and methods
        store: Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }, ActionsTypes>
    }
}
window.store = store
//==============================================================
//==============================================================
//==============================================================
