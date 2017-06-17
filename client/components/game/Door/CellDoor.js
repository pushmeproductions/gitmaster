import Door from './Door'

import {locChange} from '../../../actions/door'
import {activateItem} from '../../../actions/activeItem'
import {openCell} from '../../../actions/door'
import {updateLog} from '../../../actions/currentLog'

export default class CellDoor extends Door {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Door.png'
    this.lockmsg = 'The door is locked...'
    this.openmsg = 'Spark! Flash! The door melts before your very eyes'
    this.name = 'cellDoor'
    this.exit = ''
    this.error = "This item can't open the door...try another one"
    this.roomStyle = {
      width: '171px',
      height: '299px',
      position: 'absolute',
      top: '20%',
      left: '27%',
      zIndex: 5
    }
  }


  mouseClick(activeItem, cellLocked) {
    if(activeItem == 'bucket') {
      this.dispatch(updateLog(this.openmsg))
      this.dispatch(openCell())
      this.img = 'images/items/OpenDoor.png'
      this.dispatch(deactivateItem())
     } else if(!cellLocked) {
      this.dispatch(locChange('corridor'))
    } else {
        this.dispatch(updateLog(this.lockmsg))
        if(activeItem) this.dispatch(updateLog(this.error))
      }
    }


  mouseOver() {

  }

  mouseOff(){

  }
}
