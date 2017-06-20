function doorJammed (state = 2, action) {
  switch(action.type) {
    case 'COUNTDOWN':
      return state--
    default:
      return state
  }
}

export default doorJammed
