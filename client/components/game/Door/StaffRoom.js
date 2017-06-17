import Door from './Door'

export default class Staffroom extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/StaffRoomSign.png'
    this.msg = 'To React Room'
    this.name = 'reactSign'
    this.roomStyle = {
      width: '171px',
      height: '299px',
      position: 'absolute',
      top: '20%',
      left: '27%',
      zIndex: 5
  }

  mouseClick() {
    console.log('I am the sign like no other sign!');
  }

  mouseOver() {

  }

  mouseOff() {

  }
}
