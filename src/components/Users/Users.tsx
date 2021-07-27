import React from 'react';
import s from './Users.module.css'
import userPhoto from '../assets/images/user.png'
import {UserDataType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type UsersPropsType = {
    users: Array<UserDataType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingInProgress: (followingInProgress: boolean, userId: number) => void
}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    const pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => <span
                        key={p}
                        className={props.currentPage === p ? s.selectedPage : ''}
                        onClick={(event) => props.onPageChanged(p)}
                    >
                            {` ${p}`}
                        </span>)
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.user}>
                        <span>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    className={s.userPhoto}
                                    src={u.photos.small ? u.photos.small : userPhoto}
                                    alt={'User_photo'}
                                />
                            </NavLink>
                            {u.photos.large && <img src={u.photos.large} alt={'User_photo'}/>}

                            {u.followed
                                ? <button
                                    // disabled={!props.followingInProgress.indexOf(u.id)}
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.toggleFollowingInProgress(true, u.id)
                                        usersAPI.unfollowUser(u.id).then(data => {
                                            if (+data.resultCode === 0) {
                                                props.unfollow(u.id)
                                                props.toggleFollowingInProgress(false, u.id)
                                            }
                                        })
                                    }}>Unfollow</button>
                                : <button
                                    // disabled={!!props.followingInProgress.indexOf(u.id)}
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.toggleFollowingInProgress(true, u.id)
                                        usersAPI.followUser(u.id).then(data => {
                                            if (+data.resultCode === 0) {
                                                props.follow(u.id)
                                                props.toggleFollowingInProgress(false, u.id)
                                            }
                                        })
                                    }}>Follow</button>
                            }
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                                <div>{u.id}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}
