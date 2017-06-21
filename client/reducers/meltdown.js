function meltdown (state = false, action) {
  switch(action.type) {
    case 'MELTDOWN':
      return true
    case 'INITIALISE':
      return false
    default:
      return state
  }
}

export default meltdown
