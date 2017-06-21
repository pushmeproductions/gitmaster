import CodeGiver from './CodeGiver'

export default class Locker2 extends CodeGiver {
  constructor(dispatch) {
    super(dispatch)

    this.code = 4
    this.img = 'images/items/Locker2.png'
    this.msg = 'You find some code'
    this.name = 'locker2'
    this.roomStyle = {
      width: '80px',
      height: '230px',
      position: 'absolute',
      top: '34%',
      left: '63%',
      zIndex: 5
    }

  }

}
