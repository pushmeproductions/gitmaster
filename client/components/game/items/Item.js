import {deactivateItem, activateItem} from '../../../actions/activeItem'



export default class Item {
  constructor (dispatch) {
    this.dispatch = dispatch
  }

  mouseClick() {

  }

  mouseOver() {

  }

  mouseOff() {

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
