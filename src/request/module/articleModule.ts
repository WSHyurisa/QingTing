interface abbrArticle {
    id: string,
    signNumber: number,
    userName: string,
    title: string,
    image: string,
    avatar: string
}

interface getAbbrArticleListParams {
    articleNumber: number,
    articleClass: number
}


export type {
    abbrArticle, 
    getAbbrArticleListParams
}