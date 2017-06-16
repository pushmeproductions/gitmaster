import {combineReducers} from 'redux'

import inventory from './inventory'
import worldItems from './worldItems'
import cellLocked from './cellLocked'
import location from './location'

export default combineReducers({
  inventory,
  worldItems,
  cellLocked,
  location
})
