import { useState } from "react";

import { Tpagination, TPaginationInput } from "./types";

const usePagination = (content: TPaginationInput): Tpagination => {
    const {contentPerPage, count} = content;
    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(count / contentPerPage);
    const lastContentIndex = page * contentPerPage;
    const firstContentIndex = lastContentIndex - contentPerPage;

    const changePage = (direction: any) => {
        setPage((state: number) => {
            if (direction){
                if (state === pageCount){
                    return state;
                }
                return state + 1;
            }else {
                if (state === 1){
                    return state;
                }
                return state - 1;
            }
        });
    }

    const setPageSelf = (num: number) => {
        if (num > pageCount){
            setPage(pageCount);
        }else if (num < 1){
            setPage(1);
        }else{
            setPage(num);
        }
    }

    return {
        totalPage: pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        setPage: setPageSelf,
        firstContentIndex,
        lastContentIndex,
        page,
    };
}

export default usePagination