import React from 'react';
import s from './PaginatorLikeDimych.module.css';


type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const numOfButtons10 = 10
const numOfButtons100 = 100

export const PaginatorLikeDimych = ({totalUserCount, pageSize, currentPage, onPageChanged}: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalUserCount / pageSize)
    const buttonsPage = Math.ceil(currentPage / numOfButtons10)
    const startPage = (buttonsPage - 1) * numOfButtons10 + 1
    const lastPage = buttonsPage * numOfButtons10 <= pagesCount
        ? buttonsPage * numOfButtons10
        : pagesCount
    const pages: Array<number> = []
    for (let i = startPage; i <= lastPage; i++) {
        pages.push(i)
    }

    return (
        <div className={s.paginator}>
            <button
                onClick={() => onPageChanged(1)}
                disabled={currentPage === 1}
            >First
            </button>
            <button
                onClick={() => onPageChanged(pages[0] - 100)}
                disabled={pages[0] - numOfButtons100 <= 0}
            >Prev 100
            </button>
            <button
                onClick={() => onPageChanged(pages[0] - 10)}
                disabled={pages[0] - numOfButtons10 <= 0}
            >Prev 10
            </button>

            <div className={s.main}>
                {
                    pages.map(p =>
                        <div
                            key={p}
                            className={s.page + ' ' + (currentPage === p ? s.selectedPage : '')}
                            onClick={(event) => onPageChanged(p)}>
                            {` ${p}`}
                        </div>
                    )
                }
            </div>

            <button
                onClick={() => onPageChanged(pages[0] + 10)}
                disabled={pages[0] + numOfButtons10 > pagesCount}
            >Next 10
            </button>
            <button
                onClick={() => onPageChanged(pages[0] + 100)}
                disabled={pages[0] + numOfButtons100 > pagesCount}
            >Next 100
            </button>
            <button
                onClick={() => onPageChanged(pagesCount)}
                disabled={currentPage === pagesCount}
            >Last
            </button>
        </div>
    )
}
