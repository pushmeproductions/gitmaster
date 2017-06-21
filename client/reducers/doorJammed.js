function doorJammed (state = false, action) {
  switch(action.type) {
    case 'JAM_DOOR':
      return true
    case 'INITIALISE':
      return false
    default:
      return state
  }
}

export default doorJammed
