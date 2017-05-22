import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    const {type, payload} = action
    const {comment} = payload
    if (type === ADD_COMMENT) comment['id'] =  Math.floor(Math.random() * 10000) + Date.now()
    next(action)
}