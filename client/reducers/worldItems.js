const initialState = ['skull', 'bucket', 'brick', 'cellDoor', 'authbot', 'corridorCell1','corridorCell2', 'reactSign', 'StaffroomSign', 'stafflog','locker1', 'locker2', 'locker3', 'moustache']

function worldItems (state = initialState, action) {
  switch (action.type) {
    case 'DELETE_ITEM':
      return state.filter(itemName => itemName !== action.itemName)
    case 'INITIALISE':
      return initialState
    default:
      return state
  }
}

export default worldItems
