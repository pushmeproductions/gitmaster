
import Item from './Item'
import {addToInv} from '../../../actions/inventory'
import {deleteItem} from '../../../actions/worldItems'

export default class Brick extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Brick.png'
    this.msg = 'This brick could come in handy later...'
    this.name = 'brick'
    this.roomStyle = {
      width: '110px',
      height: '100px',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 5
    }
  }
  mouseClick() {
    this.dispatch(addToInv(this))
    this.dispatch(deleteItem('brick'))
    console.log("I'm a brick");
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
