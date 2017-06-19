import Item from './Item'
import {closeConsole} from '../../../actions/consolePopUp'


export default class  CloseConsoleButton extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/closeButt.png'
    this.msg = 'You close the console'
    this.name = 'closeconsolebutton'
    this.roomStyle = {
      width: '67px',
      height: '32px',
      position: 'absolute',
      top: '70%',
      left: '76%',
      zIndex: 5
    }
  }

  mouseClick(){
    this.dispatch(closeConsole())
  }
}
