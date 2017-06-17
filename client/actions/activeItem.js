
export const activateItem = (string) => {
  return {
    type: 'ACTIVATE_ITEM',
    string
  }
}

export const deactivateItem = () => {
  return {
    type: 'DEACTIVATE_ITEM',

  }
}
