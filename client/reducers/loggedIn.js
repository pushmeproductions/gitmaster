function loggedIn (state = false, action) {
  switch(action.type) {
    case 'LOG_IN':
      return true
    case 'INITIALISE':
      return false
    default:
      return state
    }
}

export default loggedIn
