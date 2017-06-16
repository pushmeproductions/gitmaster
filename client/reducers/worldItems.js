function worldItems (state = ['skull', 'bucket', 'brick', 'cellDoor'], action) {
  switch (action.type) {
    case 'DELETE_ITEM':
      return state.filter(itemName => itemName !== action.itemName)
    default:
      return state
  }
}

export default worldItems
