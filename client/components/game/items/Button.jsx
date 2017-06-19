
import Item from './Item'
import {updateLog} from '../../../actions/currentLog'


export default class Button extends Item {
  constructor(dispatch) {
    super (dispatch)
    this.img = 'images/items/Button.png'
    this.msg = 'You pushed a button'
    this.name = 'button'
    this.roomStyle = {
      width: '140px',
      height: '160px',
      position: 'absolute',
      top: '58%',
      left: '58%',
      zIndex: 5
    }
  }

  mouseClick() {
    this.dispatch(updateLog(this.msg))
  }
}
