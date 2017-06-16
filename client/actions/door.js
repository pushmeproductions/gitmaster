import request from 'superagent'


export const openCell = (item, itemName) => {
  return {
    type: 'OPEN_CELL',
    item,
    itemName
  }
}

export const locChange = (nextLocation) => {
  return {
    type: 'LOC_CHANGE',
    nextLocation
  }
}
