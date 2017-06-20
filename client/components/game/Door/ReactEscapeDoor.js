import Door from './Door'

import {updateLog} from '../../../actions/currentLog'
// import {locChange} from '../../../actions/door'
import {jamDoor, countDown} from '../../../actions/reDoor'



export default class ReactEscapeDoor extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.msg = 'The Escape Pod! Relief surges through you. Now how does this thing work?'
    this.exitMsg = 'You are in the escapepod do you really want to leave?'
    this.name = 'reactEscapeDoor'
    this.nextLoc = 'escapepod'
    this.img = 'images/items/ReactEscapeDoor.png'
    this.imgjam = 'images/items/JammedDoor.png'
    this.roomStyle = {
      width: '33.5px',
      height: '81px',
      position: 'absolute',
      top: '48.5%',
      left: '14%',
      zIndex: 5
    }
  }

  mouseClick (meltdown, doorJammed, activeItem, tries) {
    // console.log('click happened', meltdown, doorJammed, activeItem, tries)
    if(!meltdown || doorJammed) {
      super.mouseClick()
    } else if (activeItem == 'crowbar') {
      this.dispatch(jamDoor())
      this.dispatch(updateLog('You stick the crowbar in the doorway. I hope this holds!.'))
    } else if (tries > 0) {
      this.dispatch(countDown())
      this.dispatch(updateLog('The door looks like it\'s about to come down on you! Perhaps use something to jam it open.'))
    } else {

    }
  }

}
