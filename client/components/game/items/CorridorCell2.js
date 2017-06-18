import Item from './Item'

import {updateLog} from '../../../actions/currentLog'
import {addToInv} from '../../../actions/inventory'
import {deleteItem} from '../../../actions/worldItems'
import Cookie from '../items/Cookie'


export default class CorridorCell2 extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/CorridorCell2.png'
    this.cellmsg = 'Wow...a cookie...I think the authbot likes cookies'
    this.name = 'corridorCell2'
    this.exit = ''
    this.roomStyle = {
      width: '69px',
      height: '234px',
      position: 'absolute',
      top: '37%',
      left: '70%',
      zIndex: 5
    }
  }


  mouseClick() {
      this.dispatch(addToInv( new Cookie(this.dispatch) ))
      this.dispatch(deleteItem(this.name))
      this.dispatch(updateLog(this.cellmsg))
 }

  mouseOver() {

  }

  mouseOff(){

  }
}
