import React from 'react';
import {ActionsTypes, DialogsPageType, ProfilePageType, SidebarType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {EmptyObject, Store} from 'redux';

type PropsType = {
    // posts: Array<PostsDataType>
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    store: Store<EmptyObject & { profilePage: ProfilePageType, dialogsPage: DialogsPageType, sidebar: SidebarType }, ActionsTypes>
}

export const MyPostsContainer = (props: PropsType) => {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    )
}