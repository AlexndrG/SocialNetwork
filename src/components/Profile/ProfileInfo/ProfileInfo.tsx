import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.topImg}>
                {/*<img src="https://lh3.googleusercontent.com/proxy/Dha2y0hknTXPBojcVYklYv5cWqSQrFZYpMuGuhKuyTIZXJZT_ScltaxDb0bAEAhVRSH6o5FngHBopLK7PkMo0v8ae_WS2r8yNwYfkg_4hdOI-lHrlZOQDQ"/>*/}
                <img src="https://wallpaperaccess.com/full/1760835.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}