import Item from './Item'
import {addToInv} from '../../../actions/inventory'
// import {activateItem, deactivateItem} from '../../../actions/activeItem'


export default class ThingGiver extends Item {
  constructor(dispatch) {
    super(dispatch)
  }

  mouseClick(){
    this.dispatch(addToInv(this.item))
    super.mouseClick()
  }

}
