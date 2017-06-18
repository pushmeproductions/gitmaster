function func (state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'SEND_TO_FUNC':
      return [...state, action.code]
    default:
      return state
  }
}

export default func
