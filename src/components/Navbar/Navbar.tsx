import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsPageType, SidebarType} from '../../redux/store';


type NavbarPropsType = {
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export const Navbar = (props: NavbarPropsType) => {
    const friendsElements = props.sidebar.friends.map(
        f => {
            let friend = props.dialogsPage.dialogs.find(d => d.id === f)
            if (!friend) {
                friend = props.dialogsPage.dialogs[0]
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