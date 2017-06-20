
export const openCell = () => {
  return {
    type: 'OPEN_CELL'
  }
}

export const lockCell = () => {
  return {
    type: 'LOCK_CELL'
  }
}

export const locChange = (nextLocation) => {
  return {
    type: 'LOC_CHANGE',
    nextLocation
  }
}
