import Item from '../items/Item'
import {locChange} from '../../../actions/door'
import {updateLog} from '../../../actions/currentLog'


export default class Door extends Item {
  constructor(dispatch) {
    super(dispatch)
  }

  mouseClick() {
    this.dispatch(locChange(this.nextLoc))
    this.dispatch(updateLog(this.exitMsg))
  }
  mouseOver(e){
    e.target.style.cursor = 'pointer'
  }

  mouseOut(e){
    e.target.style.cursor = 'none'
  }
}
