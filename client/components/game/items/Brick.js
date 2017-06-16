import Item from './Item'

export default class Brick extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Brick.png'
    this.msg = 'Hi I am Brick.'
    this.name = 'brick'
    this.roomStyle = {
      imageWidth: '680px',
      imageHeight: '450px',
      xPosition: 0,
      yPosition: 0,
      zPosition: 0
    }
  }
  mouseClick() {

  }

  mouseOver() {

  }

  mouseOff(){

  }

}
