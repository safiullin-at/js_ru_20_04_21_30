import {createStore} from 'redux'
import reducer from '../reducer/index'

let store = createStore(reducer)

//dev only
window.store = store

export default store
