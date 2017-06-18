import test from 'ava'

import inventory from '../../client/reducers/inventory'
import {addToInv} from '../../client/actions/inventory'
import worldItems from '../../client/reducers/worldItems'
import {deleteItem} from '../../client/actions/worldItems'
import {openCell} from '../../client/actions/door'
import cellLocked from '../../client/reducers/cellLocked'

test('The default state of inventory is an empty array', t => {
  const initialState = inventory(undefined, {})
  t.is(initialState.length, 0)
})

test('When a worlditem is clicked it is removed from the worlditems array', t => {
  const initialState = ['skull', 'bucket', 'brick', 'cellDoor']
  const nextState = worldItems(initialState, deleteItem('skull'))
  t.is(nextState.length, 3)
})


test('The door is locked then unlocked', t => {
  const nextState = cellLocked(true, openCell())
  t.is(nextState, false)
})


test('Have added an item to the inventory', t => {
  const nextState = inventory([],addToInv(1))
  t.is(nextState.length ,1)
})
