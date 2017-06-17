import Door from './Door'

import {updateLog} from '../../../actions/currentLog'
import {addToInv} from '../../../actions/inventory'
import Cookie from '../items/Cookie'

export default class CorridorCell2 extends item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/CorridorCell2.png'
    this.lockmsg = 'The door is locked...'
    this.name = 'CorridorCell2'
    this.exit = ''
    this.error = "This item can't open the door...try another one"
    this.roomStyle = {
      width: '171px',
      height: '299px',
      position: 'absolute',
      top: '20%',
      left: '27%',
      zIndex: 5
    }
  }


  mouseClick() {
      this.dispatch(addToInv({new Cookie})
      this.dispatch(updateLog(this.openmsg))


  mouseOver() {

  }

  mouseOff(){

  }
}
