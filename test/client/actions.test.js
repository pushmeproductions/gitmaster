import test from 'ava'

import {countDown, jamDoor} from '../../client/actions/reDoor'
import {meltdown} from '../../client/actions/meltdown'
import {logIn} from '../../client/actions/loggedIn'
import {openConsole, closeConsole} from '../../client/actions/consolePopUp'
import {branch} from '../../client/actions/branch'
import {activateItem, deactivateItem} from '../../client/actions/activeItem'
import {addToInv, dropFromInv} from '../../client/actions/inventory'
import {deleteItem} from '../../client/actions/worldItems'
import {updateLog} from '../../client/actions/currentLog'
import {openCell, locChange} from '../../client/actions/door'
import {authorised} from '../../client/actions/authorised'
import {sendToFunc} from '../../client/actions/sendToFunction'

test('jamDoor action creator works correctly', t => {
  let doorJammer = jamDoor()
  t.is(doorJammer.type, 'JAM_DOOR')
})

test('countDown action creator works correctly', t => {
  let countReduces = countDown()
  t.is(countReduces.type, 'COUNTDOWN')
})

test('meltdown action creator works correctly', t => {
  let theMeltdown = meltdown()
  t.is(theMeltdown.type, 'MELTDOWN')
})

test('logIn action creator works correctly', t => {
  let logMeIn = logIn()
  t.is(logMeIn.type, 'LOG_IN')
})

test('closeConsole action creator works correctly', t => {
  let closeScreen = closeConsole()
  t.is(closeScreen.type, 'CLOSE_CONSOLE')
})

test('openConsole action creator works correctly', t => {
  let openScreen = openConsole()
  t.is(openScreen.type, 'OPEN_CONSOLE')
})

test('branch action creator works correctly', t => {
  let changeBranch = branch('master')
  t.is(changeBranch.type, 'SWITCH_BRANCH')
  t.is(changeBranch.branch, 'master')
})
test('activateItem item, activates an item', t => {
  let activeItem = activateItem('bucket')
  t.is(activeItem.type, 'ACTIVATE_ITEM')
  t.is(activeItem.name, 'bucket')
})

test('deactivateItem action creator works correctly', t => {
  const expectedAction = {
    type: 'DEACTIVATE_ITEM',
  }
  const actual = deactivateItem()
    t.deepEqual(actual, expectedAction)
})

test('addToInv action creator returns correctly', t => {
  const expectedAction = {
    type: 'ADD_TO_INV',
    item: 'bucket'
  }
  const actual = addToInv('bucket')
    t.deepEqual(actual, expectedAction)
})

test('dropFromIv action creator returns correctly', t => {
  const expectedAction = {
    type: 'DROP_INV',
    item: 'skull'
  }
  const actual = dropFromInv('skull')
    t.deepEqual(actual, expectedAction)
})

test('updateLog updates the log correctly', t => {
  const expectedAction = {
    type: 'UPDATE_LOG',
    msg: 'I am the correct message.'
  }
  const actual = updateLog('I am the correct message.')
    t.deepEqual(actual, expectedAction)
})

test('deleteItem, deletes an item', t => {
  let removeItem = deleteItem('cookie')
  t.is(removeItem.type, 'DELETE_ITEM')
  t.is(removeItem.itemName, 'cookie')
})

test('updateLog action creator works correctly', t => {
  let currentLog = updateLog('This is a message')
  t.is(currentLog.type, 'UPDATE_LOG')
  t.is(currentLog.msg, 'This is a message')
})

test('locChange action creator works correctly', t => {
  let changeLocation = locChange('corridor')
    t.is(changeLocation.type, 'LOC_CHANGE')
    t.is(changeLocation.nextLocation, 'corridor')
})

test('openCell action creator works correctly', t => {
  let openCellDoor = openCell()
    t.is(openCellDoor.type, 'OPEN_CELL')
})


test('authorised action creator works correctly', t => {
  let authMe = authorised()
  t.is(authMe.type, 'AUTHORISE')
})

test('sendToFunc action creator works correctly', t => {
  let addToFunction = sendToFunc('code.status == meltdown')
  t.is(addToFunction.type, 'SEND_TO_FUNC')
  t.is(addToFunction.code, 'code.status == meltdown')
})
