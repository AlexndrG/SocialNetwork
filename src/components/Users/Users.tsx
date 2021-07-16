import React from 'react';
import s from './Users.module.css'
import userPhoto from '../assets/images/user.png'
import {UserDataType} from '../../redux/users-reducer';

type UsersPropsType = {
    users: Array<UserDataType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
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
                            <img
                                className={s.userPhoto}
                                src={u.photos.small ? u.photos.small : userPhoto}
                                alt={'User_photo'}
                            />
                            {u.photos.large && <img src={u.photos.large} alt={'User_photo'}/>}

                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
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
