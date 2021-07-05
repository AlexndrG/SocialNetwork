import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, DialogsPageType, ProfilePageType, SidebarType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {EmptyObject, Store} from 'redux';

type PropsType = {
    store:  Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType, sidebar: SidebarType}, ActionsTypes>
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts*/}
            {/*    posts={props.profilePage.posts}*/}
            {/*    newPostText={props.profilePage.newPostText}*/}
            {/*    dispatch={props.dispatch}*/}
            {/*/>*/}

            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}