import React from 'react'
import {EmptyObject, Store} from 'redux'
import {ActionsTypes, DialogsPageType, ProfilePageType, SidebarType} from './redux/store'

type StoreType2 = Store<EmptyObject & { profilePage: ProfilePageType, dialogsPage: DialogsPageType, sidebar: SidebarType }, ActionsTypes>

export const StoreContext = React.createContext({} as StoreType2)

export type ProviderType = {
    store: StoreType2
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
