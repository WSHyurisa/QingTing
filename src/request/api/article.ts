import { getAbbrArticleListParams } from "../module/articleModule";
import instance from "../request";

const abbrArticleList = (params: getAbbrArticleListParams) => instance.get('/articleData', {params})

export {
    abbrArticleList
}