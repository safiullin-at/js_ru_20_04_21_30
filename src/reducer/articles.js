import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, FILTER_ARTICLE_LIST_BY_ID} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)

        // case FILTER_ARTICLE_LIST_BY_ID:
        //     const {idList = []} = payload
        //     const idToArticleMapping = articles.reduce((acc, cur) => ({...acc, [cur.id]: cur}), {})
        //     console.log(idList.map(id => idToArticleMapping[id]))
        //     return idList.map(id => idToArticleMapping[id])
    }

    return articles
}
