function sendToFunction (state = '', action) {
  switch (action.type) {
    case 'SEND_TO_FUNC':
      return action.code
    default:
      return state
  }
}

export default sendToFunction
