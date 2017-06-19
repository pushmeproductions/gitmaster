
import Item from './Item'
import {updateLog} from '../../../actions/currentLog'


export default class Button extends Item {
  constructor(dispatch) {
    super (dispatch)
    this.img = 'images/items/Button.png'
    this.msg = 'You pushed a button'
    this.name = 'button'
    this.roomStyle = {
      width: '34px',
      height: '32px',
      position: 'absolute',
      top: '69%',
      left: '85%',
      zIndex: 5
    }
  }

  mouseClick() {
    this.dispatch(updateLog(this.msg))
  }
}
