import Item from '../items/Item'

export default class MovePortal extends Item {
  constructor(dispatch) {
    super(dispatch)
  }

  mouseClick() {
    this.dispatch(locChange(this.nextLoc))
    this.dispatch(updateLog(this.msg))
  }

}
