import Item from './Item'
import {logIn} from '../../actions/loggedIn'


export default class ConsolePopUp extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.lockimg = 'images/Console/Locked.png'
    this.openimg = 'images/Console/Unlocked.png'
    this.msg = 'The console'
    this.name = 'consolepopup'
    this.style = {
      width: '146px',
      height: '220px',
      position: 'absolute',
      top: '31%',
      left: '29%',
      zIndex: 5
    }
  }

  mouseClick(activeItem){
    if (activeItem == 'password') {
      this.dispatch(logIn())
    }
  }
}
