import Item from './Item'
import {updateLog} from '../../../actions/currentLog'


export default class ConsoleScreen extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/ConsoleScreen.png'
    this.msg = 'The console'
    this.name = 'consolescreen'
    this.roomStyle = {
      width: '146px',
      height: '220px',
      position: 'absolute',
      top: '31%',
      left: '29%',
      zIndex: 5
    }
  }

  mouseClick(){
    this.dispatch(updateLog(this.msg))
  }
}
