function cellLocked (state = true, action) {
  switch (action.type) {
    case 'OPEN_CELL':
      return false
    case 'LOCK_CELL':
      return true
    case 'INITIALISE':
      return true
    default:
      return state
  }
}

export default cellLocked
