import {deleteItem} from '../../../actions/worldItems'
import {updateLog} from '../../../actions/currentLog'


export default class Item {
  constructor (dispatch) {
    this.dispatch = dispatch


  }

  mouseClick() {
    this.dispatch(deleteItem(this.name))
    this.dispatch(updateLog(this.msg))
  }


  mouseOver(e){
    e.target.style.border = '1px solid green'

  }

  mouseOff(e){
    e.target.style.border = 'none'
  }
}
