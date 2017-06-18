import {combineReducers} from 'redux'

import inventory from './inventory'
import worldItems from './worldItems'
import cellLocked from './cellLocked'
import location from './location'
import currentLog from './currentLog'
import activeItem from './activeItem'
import authorised from './authorised'

export default combineReducers({
  inventory,
  worldItems,
  cellLocked,
  location,
  currentLog,
  activeItem,
  authorised
})
