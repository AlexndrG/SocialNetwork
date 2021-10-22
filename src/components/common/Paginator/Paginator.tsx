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
        <div>
            {
                pages.map(p =>
                    <span
                        key={p}
                        className={props.currentPage === p ? s.selectedPage : ''}
                        onClick={(event) => props.onPageChanged(p)}>
                            {` ${p}`}
                    </span>
                )
            }
        </div>
    )
}
