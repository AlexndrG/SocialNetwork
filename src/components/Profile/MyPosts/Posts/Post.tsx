import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props:PropsType) => {
    return (
        <div className={s.item}>
            <img src="https://www.nicepng.com/png/detail/503-5032252_shamim-amiri-blank-female-avatar-icon.png"/>
            {props.message}
            <div>
                <span className={s.like}>like {props.likesCount}</span>
            </div>
        </div>
    )
}