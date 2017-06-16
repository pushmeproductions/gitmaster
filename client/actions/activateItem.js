import request from 'superagent'


export const activateItem = (item) => {
  return {
    type: 'ACTIVATE_ITEM',
    item
  }
}

export const deActivateItem = (item) => {
  return {
    type: 'DEACTIVATE_ITEM',
    item
  }
}
