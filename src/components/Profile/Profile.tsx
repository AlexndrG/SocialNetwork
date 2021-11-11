import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileDataType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileDataType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (image: File) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}