import Door from './Door'


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

  mouseClick(activeItem) {
    if(activeItem == 'bucket') {
      this.dispatch(openCell())
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
