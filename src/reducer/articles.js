import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => ({...acc, [article.id]: article}), {})

export default (articles = articlesMap, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            const {id} = payload
            const newArticles = {...articles}
            if (newArticles[id]) delete newArticles[id]
            return newArticles

        case ADD_COMMENT:
            const {articleId, comment: {id: commentId}} = payload
            if (articles[articleId]) {
                const article = articles[articleId]
                return {...articles, [articleId]: {
                    ...article,
                    comments: [...article.comments, commentId]
                }}
            }
            return articles
    }

    return articles
}
