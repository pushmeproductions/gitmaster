import {combineReducers} from 'redux'

import inventory from './inventory'
import worldItems from './worldItems'
import cellLocked from './cellLocked'
import location from './location'
import currentLog from './currentLog'
import activeItem from './activeItem'
import authorised from './authorised'
import func from './function'
import loggedIn from './loggedIn'
import switchBranch from './branch'
import consolePopUp from './consolePopUp'

export default combineReducers({
  inventory,
  worldItems,
  cellLocked,
  location,
  currentLog,
  activeItem,
  authorised,
  func,
  loggedIn,
  switchBranch,
  consolePopUp
})
