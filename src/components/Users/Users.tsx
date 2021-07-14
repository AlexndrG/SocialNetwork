import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import userPhoto from '../assets/images/user.png'

// import * as axios from 'axios'
import axios from 'axios'

type ItemType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    },
    status: string
    followed: boolean
}
type ResponseType = {
    items: Array<ItemType>
    totalCount: number
    error: string
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        const pages: Array<number> = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pages.map(p => <span
                            className={this.props.currentPage === p ? s.selectedPage : ''}
                            onClick={(event) => this.onPageChanged(p)}
                        >
                            {` ${p}`}
                        </span>)
                    }
                </div>
                {
                    this.props.users.map(u =>
                        <div key={u.id} className={s.user}>
                        <span>
                            <img
                                className={s.userPhoto}
                                src={u.photos.small ? u.photos.small : userPhoto}
                                alt={'User_photo'}
                            />
                            {u.photos.large && <img src={u.photos.large} alt={'User_photo'}/>}

                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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

}