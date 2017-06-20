function doorJammed (state = false, action) {
  switch(action.type) {
    case 'JAM_DOOR':
      return true
    default:
      return state
  }
}

export default doorJammed
