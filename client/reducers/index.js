import {combineReducers} from 'redux'

import inventory from './inventory'
import worldItems from './worldItems'
import currentLog from './currentLog'

export default combineReducers({
  inventory,
  worldItems,
  currentLog
})
