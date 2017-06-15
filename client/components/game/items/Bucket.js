import Item from './Item'

export default class Bucket extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Bucket.png'
    this.msg = 'The contents of this bucket glow strangely, you wonder if they might be corrosive...'
    this.name = 'bucket'
    this.roomStyle = {
      imageWidth: '680',
      imageHeight: '450px',
      xPosition: 0,
      yPosition: 0,
      zPosition: 5
    }
  }
  mouseClick() {

  }

  mouseOver() {

  }

  mouseOff(){

  }
}
