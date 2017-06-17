import Door from './Door'

import {updateLog} from '../../../actions/currentLog'
import {locChange} from '../../../actions/door'


export default class Staffroom extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/StaffroomSign.png'
    this.msg = 'To Staff Room'
    this.name = 'reactSign'
    this.roomStyle = {
      width: '680px',
      height: '450px',
      position: 'absolute',
      top: '3%',
      left: '0%',
      zIndex: 5
  }
}

  mouseClick() {
    this.dispatch(updateLog(this.msg))
    this.dispatch(locChange())
    console.log('I am the sign like no other sign!');
  }

  mouseOver() {

  }

  mouseOff() {

  }
}
