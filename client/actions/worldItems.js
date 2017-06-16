import request from 'superagent'

export const deleteItem = (itemName) => {
  return {
    type: 'DELETE_ITEM',
    itemName
  }
}
