import React from 'react';
import s from './User.module.css'
import userPhoto from '../assets/images/user.png'
import {UserDataType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    user: UserDataType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User = (props: UserPropsType) => {
    return (
        <div className={s.user}>
           <span>
               <NavLink to={'/profile/' + props.user.id}>
                   <img
                       className={s.userPhoto}
                       src={props.user.photos.small ? props.user.photos.small : userPhoto}
                       alt={'User_photo'}
                   />
               </NavLink>
               {props.user.photos.large && <img src={props.user.photos.large} alt={'User_photo'}/>}

               {props.user.followed
                   ? <button
                       disabled={props.followingInProgress.some(id => id === props.user.id)}
                       onClick={() => {
                           props.unfollow(props.user.id)
                       }}>Unfollow</button>
                   : <button
                       disabled={props.followingInProgress.some(id => id === props.user.id)}
                       onClick={() => {
                           props.follow(props.user.id)
                       }}>Follow</button>
               }
           </span>

            <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{'props.user.location.country'}</div>
                    <div>{'props.user.location.city'}</div>
                    <div>{props.user.id}</div>
                </span>
           </span>
        </div>
    )
}
