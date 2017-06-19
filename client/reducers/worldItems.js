function worldItems (state = ['skull', 'bucket', 'brick', 'cellDoor', 'authbot', 'corridorCell1','corridorCell2', 'reactSign', 'StaffroomSign', 'stafflog','locker1', 'locker2', 'locker3', 'moustache'], action) {
  switch (action.type) {
    case 'DELETE_ITEM':
      return state.filter(itemName => itemName !== action.itemName)
    default:
      return state
  }
}

export default worldItems
