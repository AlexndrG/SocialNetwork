import React from 'react';
import {UserDataType} from '../../redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';
import {PaginatorLikeDimych} from '../common/Paginator/PaginatorLikeDimych';

type UsersPropsType = {
    users: Array<UserDataType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            <Paginator
                totalUserCount={props.totalUserCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />

            <PaginatorLikeDimych
                totalUserCount={props.totalUserCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />


            {props.users.map(u => <User
                key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}/>)
            }
        </div>
    )
}
