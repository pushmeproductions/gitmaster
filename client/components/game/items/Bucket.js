import Item from './Item'

export default class Bucket extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Bucket.png'
    this.msg = 'The contents of this bucket glow strangely, you wonder if they might be corrosive...'
    this.name = 'bucket'
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
