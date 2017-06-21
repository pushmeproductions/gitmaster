function authorised (state = false, action) {
  switch(action.type) {
    case 'AUTHORISE':
      return true
    case 'INITIALISE':
      return false
    default:
      return state
  }
}

export default authorised
