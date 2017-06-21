function func (state = [], action) {
  switch (action.type) {
    case 'SEND_TO_FUNC':
      return [...state, action.code]
    case 'INITIALISE':
      return []
    default:
      return state
  }
}

export default func
