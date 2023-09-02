import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import music from './music'

// const enbancer = applyMiddleware()

const reducer = combineReducers({
  music,
})

let store = legacy_createStore(reducer, applyMiddleware(thunk))
// let store = legacy_createStore(reducer)

export default store
