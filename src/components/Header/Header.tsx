import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    // id: string
    // email: string
    login: string
    isAuth: boolean
    // setAuthUserData: (userId: string, login: string, email: string) => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            {/*<img src="http://www.logobook.com/wp-content/uploads/2016/10/birds.svg"/>*/}
            <img
                src="http://vectorlogofree.com/wp-content/uploads/2014/09/53354-bird-handmade-logo-icon-vector-icon-vector-eps.png"
                alt={'logo'}
            />

            {props.isAuth
                ?
                <div className={s.loginBlock}>
                    {`${props.login} `}
                    <NavLink to={'/logout'}>Logout</NavLink>
                </div>

                :
                <div className={s.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            }
        </header>
    )
}