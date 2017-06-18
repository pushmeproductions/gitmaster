function authorised (state = false, action) {
  switch(action.type) {
    case 'AUTHORISE':
      return true
    default:
      return state
  }
}

export default authorised
