import {combineReducers} from 'redux'

import inventory from './inventory'
import worldItems from './worldItems'
import cellDoor from './cellDoor'

export default combineReducers({
  inventory,
  worldItems,
  cellDoor
})
