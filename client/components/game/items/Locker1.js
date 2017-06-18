import Item from './Item'

import {addToInv} from '../../../actions/inventory'
import {updateLog} from '../../../actions/currentLog'
import {deleteItem} from '../../../actions/worldItems'

export default class Locker1 extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Locker1.png'
    this.msg = 'You find a crowbar in here.'
    this.name = 'locker1'
    this.roomStyle = {
      width: '80px',
      height: '230px',
      position: 'absolute',
      top: '34%',
      left: '52%',
      zIndex: 5
    }
  }
  mouseClick() {
    // // this.dispatch(addToInv( new Crowbar(this.dispatch) ))
    this.dispatch(deleteItem(this.name))
    this.dispatch(updateLog(this.msg))
  }
  mouseOver() {

  }

  mouseOff() {

  }

}
