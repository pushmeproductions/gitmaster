function consolePopUp (state = false, action) {
  switch(action.type) {
    case 'OPEN_CONSOLE':
      return true
    case 'CLOSE_CONSOLE':
      return false
    case 'INITIALISE':
      return false
    default:
      return state
  }
}

export default consolePopUp
