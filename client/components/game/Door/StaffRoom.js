import Door from './Door'

export default class Staffroom extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/StaffroomSign.png'
    this.msg = 'To React Room'
    this.name = 'reactSign'
    this.roomStyle = {
      width: '680px',
      height: '450px',
      position: 'absolute',
      top: '20%',
      left: '27%',
      zIndex: 5
  }
}

  mouseClick() {
    console.log('I am the sign like no other sign!');
  }

  mouseOver() {

  }

  mouseOff() {

  }
}
