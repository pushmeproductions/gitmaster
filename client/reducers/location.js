function location (state = '', action) {
  switch (action.type) {
    case 'LOC_CHANGE':
      return action.nextLocation
    default:
      return state
  }
}

export default location
