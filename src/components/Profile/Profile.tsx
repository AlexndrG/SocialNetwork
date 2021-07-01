import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostsDataType} from '../../redux/state';

type PropsType = {
    profilePage: {
        posts: Array<PostsDataType>
        newPostText: string
    }
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}