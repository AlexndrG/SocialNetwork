import React from 'react';
import s from './Paginator.module.css';


type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    const pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.paginator}>
            <div className={s.main}>
                {
                    pages.map(p =>
                        <div
                            key={p}
                            className={s.page + ' ' + (props.currentPage === p ? s.selectedPage : '')}
                            onClick={(event) => props.onPageChanged(p)}>
                            {` ${p}`}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
