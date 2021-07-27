import React from 'react';
import s from './Users.module.css'
import userPhoto from '../assets/images/user.png'
import {UserDataType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = {
    users: Array<UserDataType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

type ResponseType = {
    resultCode: string
    messages: string[]
    data: {}
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
                                ? <button onClick={() => {
                                    axios.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'ca2d4280-c827-4a30-a630-27fd3baa0cf3',
                                        },
                                    }).then(response => {
                                        if (+response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post<ResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'ca2d4280-c827-4a30-a630-27fd3baa0cf3',
                                        },
                                    }).then(response => {
                                        if (+response.data.resultCode === 0) {
                                            props.follow(u.id)
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
