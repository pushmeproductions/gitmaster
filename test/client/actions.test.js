import test from 'ava'

import {activateItem, deactivateItem} from '../../client/actions/activeItem'
import {addToInv, dropFromInv} from '../../client/actions/inventory'
// import {deleteItem} from '../../client/actions/worldItems'
// import {updateLog} from '../../client/actions/currentLog'
// import {openCell, locChange} from '../../client/actions/door'


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
    t.deepEqual(actual,expectedAction)
})

test('dropFromIv action creator returns correctly', t => {
  const expectedAction = {
    type: 'DROP_INV',
    item: 'skull'
  }
  const actual = dropFromInv('skull')
    t.deepEqual(actual,expectedAction)
})
