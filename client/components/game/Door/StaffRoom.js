import Door from './Door'

import {updateLog} from '../../../actions/currentLog'

export default class Staffroom extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/StaffroomSign.png'
    this.exitMsg = 'The Staff Room'
    this.error = 'AuthBot: "You are not AUTHORISED to pass."'
    this.name = 'staffroom'
    this.nextLoc = 'staffroom'
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
    if(authBot){
        super.mouseClick()
    }else {
      this.dispatch(updateLog(this.error))
    }
  }
}
