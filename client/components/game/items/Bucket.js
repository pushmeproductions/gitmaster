import Item from './Item'
import {addToInv} from '../../../actions/inventory'
import {deleteItem} from '../../../actions/worldItems'

export default class Bucket extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Bucket.png'
    this.msg = 'The contents of this bucket glow strangely, you wonder if they might be corrosive...'
    this.name = 'bucket'
    this.roomStyle = {
      width: '680px',
      height: '450px',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 5
    }
  }
  mouseClick() {
    // this.dispatch(addToInv(this))
    // this.dispatch(deleteItem('bucket'))
    console.log("I'm a bucket");
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
