import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import cells from './cells'

export default combineReducers({
  router: routerReducer,
  cells,
})
