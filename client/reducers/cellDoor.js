function cellDoor (state = [], action) {
  switch (action.type) {
    case 'OPEN_CELL':
      return state.map(active.item =>
      (active.item === 'bucket')
      ? {...state,  deleteItem }
      )
    default:
      return state
  }
}

export default cellDoor

return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
