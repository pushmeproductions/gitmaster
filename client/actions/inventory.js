import request from 'superagent'

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
