function activeItem (state = '', action) {
  switch (action.type) {
    case 'ACTIVATE_ITEM':
      return action.name
    case 'DEACTIVATE_ITEM':
      return ''
    case 'INITIALISE':
      return ''
    default:
      return state
  }
}

export default activeItem
