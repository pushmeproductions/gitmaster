import Item from './Item'
import {addToInv} from '../../../actions/inventory'
import {deleteItem} from '../../../actions/worldItems'
import {updateLog} from '../../../actions/currentLog'


export default class InventoryItem extends Item {
  constructor(dispatch) {
    super(dispatch)
  }
  mouseClick(){
    this.dispatch(addToInv(this))
    this.dispatch(deleteItem(this.name))
    this.dispatch(updateLog(this.msg))
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
