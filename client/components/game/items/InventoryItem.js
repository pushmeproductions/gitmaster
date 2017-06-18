import Item from './Item'
import {addToInv} from '../../../actions/inventory'
import {activateItem, deactivateItem} from '../../../actions/activeItem'


export default class InventoryItem extends Item {
  constructor(dispatch) {
    super(dispatch)
  }

  mouseClick(){
    this.dispatch(addToInv(this))
    super.mouseClick()
  }

  toggleActive(currentActive) {
    // console.log(currentActive + ' is the active item')
    if (this.name == currentActive ) {
      this.dispatch(deactivateItem())
    } else {
      this.dispatch(activateItem(this.name))
    }
  }
}
