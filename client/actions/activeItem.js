import request from 'superagent'


export const activateItem = (name) => {
  return {
    type: 'ACTIVATE_ITEM',
    name
  }
}

export const deactivateItem = () => {
  return {
    type: 'DEACTIVATE_ITEM',

  }
}
