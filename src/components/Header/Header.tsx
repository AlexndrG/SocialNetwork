import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            {/*<img src="http://www.logobook.com/wp-content/uploads/2016/10/birds.svg"/>*/}
            <img src="http://vectorlogofree.com/wp-content/uploads/2014/09/53354-bird-handmade-logo-icon-vector-icon-vector-eps.png" alt={'logo'}/>
        </header>
    )
}