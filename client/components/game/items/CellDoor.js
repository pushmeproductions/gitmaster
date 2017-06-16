import Item from './Item'

export default class CellDoor extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Door.png'
    this.msg = 'The door is locked...'
    this.name = 'cellDoor'
    this.roomStyle = {
      width: '680px',
      height: '450px',
      top: 0,
      left: 0,
      zIndex: 5
    }
  }
  mouseClick() {
  }

  mouseOver() {

  }

  mouseOff() {

  }
}
