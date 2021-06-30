import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {StateType} from '../../redux/state';

type PropsType = {
    state: StateType
}

export const Navbar = (props: PropsType) => {
    const friendsElements = props.state.sidebar.friends.map(
        f => {
            let friend = props.state.dialogsPage.dialogs.find(d => d.id === f)
            if (!friend) {
                friend = props.state.dialogsPage.dialogs[0]
            }
            return (
                <div className={s.avatar}>
                    <img src={friend.avatar}/>
                    <div>{friend.name}</div>
                </div>
            )
        }
    )

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.friends}>
                <div className={s.title}>Friends</div>

                {friendsElements}
            </div>
        </nav>
    )
}