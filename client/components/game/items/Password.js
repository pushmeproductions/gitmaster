import Item from './Item'

import {updateLog} from '../../../actions/currentLog'


export default class Password extends Item {
  constructor(dispatch){
    super(dispatch)
    this.img = 'images/items/Password.png'
    this.msg = "System password update: 1000001"
    this.name = 'corridorCell2'
    this.exit = ''
    this.invStyle = {
      width: '51px',
      height: '29px',
      position: 'absolute',
      top: '21%',
      left: '10%',
      zIndex: 5
  }
}
  mouseClick() {
    this.dispatch(updateLog(this.cellmsg))
  }

  mouseOver() {

  }

  mouseOff() {

  }

}
