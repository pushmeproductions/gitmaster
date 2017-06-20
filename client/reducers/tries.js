function doorJammed (state = 2, action) {
  switch(action.type) {
    case 'COUNTDOWN':
      return state-1
    default:
      return state
  }
}

export default doorJammed
