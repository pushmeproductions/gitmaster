import CodeGiver from './CodeGiver'

export default class Locker2 extends CodeGiver {
  constructor(dispatch) {
    super(dispatch)
    this.code = 'code4'
    this.img = 'images/items/Locker2.png'
    this.msg = 'You find some code in here.'
    this.name = 'locker2'
    this.roomStyle = {
      width: '171px',
      height: '299px',
      position: 'absolute',
      top: '20%',
      left: '27%',
      zIndex: 5
  }
}


  mouseOver() {

  }

  mouseOff() {

  }
}
