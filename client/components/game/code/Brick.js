import CodeGiver from './CodeGiver'
import {deleteItem} from '../../../actions/worldItems'

export default class Brick extends CodeGiver {
  constructor (dispatch) {
    super (dispatch)
    this.code = 1
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
  

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }

}
