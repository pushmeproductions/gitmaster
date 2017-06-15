import Item from './Item'

export default class CellDoor extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Door.png'
    this.msg = 'The door is locked...'
    this.name = 'cellDoor'
    this.roomStyle = {
      imageWidth: '680px',
      iamgeHeight: '450px',
      xPosition: 0,
      yPosition: 0,
      zPosition: 5
    }
  }
  mouseClick() {
  }

  mouseOver() {

  }

  mouseOff() {

  }
}
