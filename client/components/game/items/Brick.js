import Item from './Item'

export default class Brick extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Brick.png'
    this.msg = 'Hi I am Brick.'
    this.name = 'brick'
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

  }

  mouseOver() {

  }

  mouseOff(){

  }

}
