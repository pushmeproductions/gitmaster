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

  toggleActive(currentActive) {
    console.log(currentActive + ' is the active item')
    if (this.name == currentActive ) {
      this.dispatch(deactivateItem())
    } else {
      this.dispatch(activateItem(this.name))
    }
  }
}
