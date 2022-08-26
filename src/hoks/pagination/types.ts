export type Tpagination = {
    totalPage: number,
    nextPage: () => void,
    prevPage: () => void,
    setPage: (num: number) => void,
    firstContentIndex: number,
    lastContentIndex: number,
    page: number
}

export type TPaginationInput = {
    contentPerPage: number,
    count: number,
}