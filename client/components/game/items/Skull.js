import Item from './Item'
import {addToInv} from '../../../actions/inventory'
import {deleteItem} from '../../../actions/worldItems'


export default class Skull extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Skull.png'
    this.msg = 'You feel like you are being watched...'
    this.name = 'skull'
    this.roomStyle = {
      width: '110px',
      height: '100px',
      position: 'absolute',
      top: '71%',
      left: '71%',
      zIndex: 5
    }
  }
  mouseClick(){
    this.dispatch(addToInv(this))
    this.dispatch(deleteItem('skull'))
    // console.log("I'm a skull!") // but to our log
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
