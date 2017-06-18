import Door from './Door'

import {locChange} from '../../../actions/door'
import {activateItem, deactivateItem} from '../../../actions/activeItem'
import {openCell} from '../../../actions/door'
import {updateLog} from '../../../actions/currentLog'

export default class CellDoor extends Door {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/CellDoor.png'
    this.lockmsg = 'The door is locked...'
    this.openmsg = 'Spark! Flash! The door melts before your very eyes'
    this.name = 'cellDoor'
    this.exit = 'You find yourself in the corridor.'
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
    console.log(cellLocked)
    if(activeItem == 'bucket') {
      this.dispatch(updateLog(this.openmsg))
      this.dispatch(openCell())
      this.img = 'images/items/OpenDoor.png'
      this.dispatch(deactivateItem())
    } else if (!cellLocked) {
       this.dispatch(locChange('corridor'))
       this.dispatch(updateLog(this.exit))
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
