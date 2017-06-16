
export const addToInv = (item) => {
  return {
    type: 'ADD_TO_INV',
    item
  }
}

export const dropFromInv = (item) => {
  return {
    type: 'DROP_INV',
    item
  }
}

export const activeItem = (item) => {
  return {
    type: 'MAKE_ACTIVE',
    item
  }
}
