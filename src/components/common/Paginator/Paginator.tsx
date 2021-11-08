import React, {RefObject, useEffect} from 'react';
import s from './Paginator.module.css';


type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {
    useEffect(() => {
        if (refs[props.currentPage]) {
            const index = props.currentPage > 5
                ? refs.length >= props.currentPage + 5 ? props.currentPage + 5 : refs.length-1
                : props.currentPage-1
            alert(index)
            const ref = refs[index].current
            if (ref) {
                ref.scrollIntoView()
            }
        }
    }, [])

    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
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
