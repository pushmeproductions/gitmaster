
import Item from './Item'
import {deleteItem} from '../../../actions/worldItems'

export default class Brick extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Brick.png'
    this.msg = 'This brick could come in handy later...'
    this.name = 'brick'
    this.roomStyle = {
      width: '90px',
      height: '79px',
      position: 'absolute',
      top: '18%',
      left: '83.5%',
      zIndex: 5
    }
  }
  mouseClick() {
    //log a thing
    this.dispatch(deleteItem('brick'))
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
