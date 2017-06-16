import {combineReducers} from 'redux'

import inventory from './inventory'
import worldItems from './worldItems'

export default combineReducers({
  inventory,
  worldItems
})
