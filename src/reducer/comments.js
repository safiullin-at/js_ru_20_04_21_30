import {ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS} from '../constants'
import {Record, OrderedMap, Map} from 'immutable'
import {arrayToMap, mapToArr} from '../utils'

const CommentModel = Record({
    id: null,
    user: null,
    text: '',
})

const CommentCollection = Record({
    entities: [],
    loading: false,
    loaded: false
})

const DefaultReducerState = new Map

export default (comments = DefaultReducerState, action) => {
    const {type, payload, randomId} = action
    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, {
                ...payload.comment,
                id: randomId
            })

        case LOAD_COMMENTS + START:
            return comments.set(payload.articleId, new CommentCollection({
                loading: true
            }))


        case LOAD_COMMENTS + SUCCESS:

            return comments
                .setIn([payload.articleId, 'entities'], arrayToMap(payload.response, CommentModel))
                .setIn([payload.articleId, 'loading'], false)
                .setIn([payload.articleId, 'loaded'], true)

    }

    return comments
}
