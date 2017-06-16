function activateItem (state = '', action) {
  switch (action.type) {
    case 'ACTIVATE_ITEM':
      return action, action.active.item.name // state = '{item.name}'
    case 'DEACTIVATE_ITEM':
      return action, state = ''
    default:
      return state
  }
}

export default activateItem
