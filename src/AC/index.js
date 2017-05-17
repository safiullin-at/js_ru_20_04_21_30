import {
    INCREMENT,
    DELETE_ARTICLE,
    FILTER_ARTICLE_LIST,
    FILTER_ARTICLE_LIST_BY_ID,
    FILTER_ARTICLE_LIST_BY_DATE_RANGE
} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterArticleListById(selection) {
    return {
        type: FILTER_ARTICLE_LIST_BY_ID,
        payload: {selection}
    }
}

export function filterArticleListByDateRange(dateRange) {
    return {
        type: FILTER_ARTICLE_LIST_BY_DATE_RANGE,
        payload: {dateRange}
    }
}
