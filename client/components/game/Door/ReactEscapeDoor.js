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
      width: '176px',
      height: '230',
      position: 'absolute',
      top: '41%',
      left: '1%',
      zIndex: 5
    }
  }
}
