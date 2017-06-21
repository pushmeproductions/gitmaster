function goodEnding (state = false, action) {
  switch(action.type) {
    case 'GOOD_ENDING':
      return true
    default:
      return state
  }
}

export default goodEnding
