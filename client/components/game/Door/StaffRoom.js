import Door from './Door'

import {updateLog} from '../../../actions/currentLog'
import {locChange} from '../../../actions/door'


export default class Staffroom extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/StaffroomSign.png'
    this.msg = 'The Staff Room'
    this.error = 'AuthBot: "Sorry you are not AUTHORISED to pass."'
    this.name = 'staffroom'
    this.roomStyle = {
      width: '182px',
      height: '100px',
      position: 'absolute',
      top: '5%',
      left: '41%',
      zIndex: 5
  }
}

  mouseClick(authBot) {
    if(!authBot){
      this.dispatch(updateLog(this.msg))
      this.dispatch(locChange('staffroom'))
      console.log('I am the sign like no other sign!');
    }else {
      this.dispatch(updateLog(this.error))
    }
  }

  mouseOver() {

  }

  mouseOff() {

  }
}
