function goodEnding (state = false, action) {
  switch(action.type) {
    case 'GOOD_ENDING':
      return true
    case 'INITIALISE':
      return false
    default:
      return state
  }
}

export default goodEnding
