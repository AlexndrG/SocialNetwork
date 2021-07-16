import React from 'react';
import s from './Preloader.module.css'
import preloader from '../../assets/images/preloader.gif'

type PreloaderPropsType = {}

export const Preloader = (props: PreloaderPropsType) => {
    return (
        <div className={s.preloaderBlock}>
            <img
                className={s.preloader}
                src={preloader}
                alt={'Loading data...'}
            />
        </div>
    )

}