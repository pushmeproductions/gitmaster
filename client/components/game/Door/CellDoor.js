import Door from './Door'
import {locChange} from '../../../actions/door'


export default class CellDoor extends Door {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Door.png'
    this.lockmsg = 'The door is locked...'
    this.openmsg = 'Spark! Flash! The door melts before your very eyes'
    this.name = 'cellDoor'
    this.exit = ''
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
    if(activeItem === 'bucket') {
       this.dispatch(openCell())
     } else {
       this.dispatch(updateLog("This item can't open the door...try another one"))
     }
     if(CellDoor !== cellLocked) {
      this.dispatch(locChange('corridor'))
      this.openmsg
    } else
      {this.lockmsg}
      console.log("i am barry hear me roar");
  }

  mouseOver() {

  }

  mouseOff(){

  }
}
