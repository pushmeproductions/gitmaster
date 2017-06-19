import Door from './Door'

import {updateLog} from '../../../actions/currentLog'
import {locChange} from '../../../actions/door'


export default class ReactEscapeDoor extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/ReactEscapeDoor.png'
    this.msg = 'The Escape Pod! Relief surges through you. Now how does this thing work?'
    this.name = 'reactEscapeDoor'
    this.nextLoc = 'escapepod'
    this.roomStyle = {
      width: '57px',
      height: '98px',
      position: 'absolute',
      top: '46%',
      left: '12%',
      zIndex: 5
    }
  }
}
