import {FILTER_ARTICLE_LIST_BY_ID, FILTER_ARTICLE_LIST_BY_DATE_RANGE} from '../constants'

const initialState = {
    selection: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default function (filters = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case FILTER_ARTICLE_LIST_BY_ID:
            const {selection = []} = payload
            return {...filters, selection: [...selection]}

        case FILTER_ARTICLE_LIST_BY_DATE_RANGE:
            const {dateRange} = payload
            return {...filters, dateRange: {...dateRange}}
    }

    return filters
}
