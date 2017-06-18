function currentLog (state = 'You awaken in a cell...', action) {
  switch (action.type) {
    case 'UPDATE_LOG':
      return action.msg
    default:
      return state
  }
}

export default currentLog
