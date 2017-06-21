function location (state = 'cell', action) {
  switch (action.type) {
    case 'LOC_CHANGE':
      return action.nextLocation
    case 'INITIALISE':
      return 'cell'
    default:
      return state
  }
}

export default location
