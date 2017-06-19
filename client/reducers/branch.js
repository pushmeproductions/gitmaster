function switchBranch (state = 'dev', action) {
  switch(action.type) {
    case 'SWITCH_BRANCH':
      return action.branch
    default:
      return state
  }
}

export default switchBranch
