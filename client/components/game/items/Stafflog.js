import Item from './Item'

import {updateLog} from '../../../actions/currentLog'
import {addToInv} from '../../../actions/inventory'
import {deleteItem} from '../../../actions/worldItems'
import Password from '../items/Password'

export default class StaffLog extends Item {
  constructor(dispatch){
    super(dispatch)
    this.img = 'images/items/Book.png'
    this.logmsg = "ENTRY 3876: Lucky, I didn't double checked this morning, I was about to push to master!! That would have been a disaster. ENTRY 3100: System password update: 1000001"
    this.name = 'stafflog'
    this.exit = ''
    this.roomStyle = {
      width: '68px',
      height: '28px',
      position: 'absolute',
      top: '67%',
      left: '27%',
      zIndex: 5
  }
}

  mouseClick(){
    this.dispatch(addToInv( new Password(this.dispatch) ))
    this.dispatch(deleteItem(this.name))
    this.dispatch(updateLog(this.logmsg))
  }

  mouseOver(){

  }

  mouseOff(){

  }

}
