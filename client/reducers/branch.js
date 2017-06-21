function branch (state = 'dev', action) {
  switch(action.type) {
    case 'SWITCH_BRANCH':
      return action.branch
    case 'INITIALISE':
      return 'dev'
    default:
      return state
  }
}

export default branch
