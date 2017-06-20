function meltdown (state = false, action) {
  switch(action.type) {
    case 'MELTDOWN':
      return true
    default:
      return state
  }
}

export default meltdown
