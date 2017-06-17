import Item from './Item'
import {addToInv} from '../../../actions/inventory'
import {deleteItem} from '../../../actions/worldItems'
import {updateLog} from '../../../actions/currentLog'

export default class Cookie extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Cookie.png'
    this.msg = 'This cookie looks tasty...I wonder if the authbot might like it?'
    this.name = 'cookie'
    this.roomStyle = {
      width: '140px',
      height: '160px',
      position: 'absolute',
      top: '58%',
      left: '58%',
      zIndex: 5
    }
    this.invStyle =  {
      width: '68px',
      height: '80px',
      position: 'absolute',
      top: '0%',
      left: '56%',
      zIndex: 5
    }
  }
  mouseClick() {
    this.dispatch(addToInv(this))
    this.dispatch(deleteItem('cookie'))
    this.dispatch(updateLog(this.msg))
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
