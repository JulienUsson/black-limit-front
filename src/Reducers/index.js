import { combineReducers } from 'redux'

import table from './TableReducer'
import hand from './HandReducer'

export default combineReducers({
  table,
  hand,
})
