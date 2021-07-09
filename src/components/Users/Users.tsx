import React from 'react';
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer';


export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'},
                    photoUrl: 'https://jenniferperlmuttergallery.com/wp-content/uploads/2017/07/small-things.jpg'
                },
                {
                    id: 2,
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'},
                    photoUrl: 'https://4lapy.ru/resize/800x800/upload/iblock/22b/22b595349acfa4af0ef503299fb14a61.jpg'
                },
                {
                    id: 3,
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    // photoUrl: 'https://i.pinimg.com/originals/77/bf/c6/77bfc6ca4d3ca97b89e2cc82d807e686.png'
                    photoUrl: 'https://static.wixstatic.com/media/f24615_aae8bfb3012840ecae6fe31af668e2ca~mv2_d_4703_4000_s_4_2.jpg/v1/crop/x_0,y_0,w_4631,h_4000/fill/w_449,h_388,al_c,q_80,usm_0.66_1.00_0.01/DSC_1580.webp'
                },
            ]
        )
    }

    return (
        <div>
            {
                props.usersPage.users.map(u =>
                    <div key={u.id} className={s.user}>
                        <span>
                            <img className={s.userPhoto} src={u.photoUrl} alt={'User_photo'}/>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}