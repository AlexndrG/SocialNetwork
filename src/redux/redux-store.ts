import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

const reducers = combineReducers({
    // profileReducer: profileReducer,
    // dialogsReducer: dialogsReducer,
    // sidebarReducer: sidebarReducer
    //
    // или аналогичная (упрощенная) запись для описания объекта:
    //
    // profileReducer,
    // dialogsReducer,
    // sidebarReducer

    // на самом деле нужно создать объект с ключами = названиями разделов стора и значениями = названиями редьюсеров:
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(reducers)
