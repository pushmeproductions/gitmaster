import Item from './Item'
import {logIn} from '../../../actions/loggedIn'


export default class ConsolePopUp extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.lockimg = 'images/Console/Locked.png'
    this.openimg = 'images/Console/Unlocked.png'
    this.msg = 'The console'
    this.name = 'consolepopup'
    this.style = {
      width: '378px',
      height: '290px',
      position: 'absolute',
      top: '24%',
      left: '20%',
      zIndex: 7
    }
  }

  mouseClick(activeItem){
    if (activeItem == 'password') {
      this.dispatch(logIn())
    }
  }
}
