import Door from './Door'


export default class CellDoor extends Door {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Door.png'
    this.msg = 'The door is locked...'
    this.name = 'cellDoor'
    this.exit = 'Spark! Flash! The door opens and you find yourself in a corridor'
    this.roomStyle = {
      width: '680px',
      height: '450px',
      position: absolute,
      top: 0,
      left: 0,
      z: 5
    }
  }
  mouseClick() {
    console.log("The door is locked ahh get me out!!!!!!");
  }

  mouseOver() {

  }

  mouseOff(){

  }
}
