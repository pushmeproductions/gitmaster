import Item from './Item'

import {addToInv} from '../../../actions/inventory'
import {updateLog} from '../../../actions/currentLog'
import {deleteItem} from '../../../actions/worldItems'

export default class Locker3 extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Locker3.png'
    this.msg = 'You find a picture of family in here.'
    this.name = 'locker3'
    this.roomStyle = {
      width: '80px',
      height: '230px',
      position: 'absolute',
      top: '34%',
      left: '62%',
      zIndex: 5
    }
  }
  mouseClick() {
    // // this.dispatch(addToInv( new Photo(this.dispatch) ))
    this.dispatch(deleteItem(this.name))
    this.dispatch(updateLog(this.msg))
  }

  mouseOver() {

  }

  mouseOff() {

  }

}
