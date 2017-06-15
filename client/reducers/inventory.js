function inventory (state = [], action) {
  switch (action.type) {
    case 'ADD_TO_INV':
      return [...state, action.item]
    case 'DROP_INV':
      return state.filter(item => item !== action.item)
    default:
      return state
  }
}

export default inventory
