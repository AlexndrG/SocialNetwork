import React, {RefObject, useEffect} from 'react';
import s from './Paginator.module.css';


type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

// export const Paginator = (props: PaginatorPropsType) => {
export const Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged}: PaginatorPropsType) => {
    useEffect(() => {
        if (refs[currentPage-1]) {
            const index = currentPage > 5
                ? (refs.length >= currentPage + 5 ? currentPage + 5 : refs.length)
                : currentPage
            const ref = refs[index-1].current
            if (ref) {
                ref.scrollIntoView()
            }
            window.scrollTo(0, 0)
        }
    }, [])

    const pagesCount = Math.ceil(totalUserCount / pageSize)
    const pages: Array<number> = []
    const refs: Array<RefObject<HTMLDivElement>> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        refs.push(React.createRef<HTMLDivElement>())
    }

    return (
        <div className={s.paginator}>
            <div className={s.main}>
                {
                    pages.map((p,i) =>
                        <div
                            key={p}
                            ref={refs[i]}
                            className={s.page + ' ' + (currentPage === p ? s.selectedPage : '')}
                            onClick={(event) => onPageChanged(p)}>
                            {` ${p}`}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
