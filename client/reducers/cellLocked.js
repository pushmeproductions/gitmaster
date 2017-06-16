function cellLocked (state = true, action) {
  switch (action.type) {
    case 'OPEN_CELL':
      return false
    default:
      return state
  }
}

export default cellLocked
