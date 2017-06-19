import Item from './Item'
import {updateLog} from '../../../actions/currentLog'
import {meltdown} from '../../../actions/meltdown'

export default class Button extends Item {
  constructor(dispatch) {
    super (dispatch)
    this.img = 'images/items/Button.png'
    this.msg = 'You pushed a button'
    this.name = 'button'
    this.safemsg = 'Well done...you obviously know what will happen if you push to master'
    this.roomStyle = {
      width: '34px',
      height: '32px',
      position: 'absolute',
      top: '69%',
      left: '85%',
      zIndex: 5
    }
  }

  mouseClick(branch) {
    if (branch == 'master') {
    this.dispatch(meltdown())
    this.dispatch(updateLog(this.safemsg))
  } else {this.dispatch(updateLog(this.msg))}
  }
}
