import CodeGiver from './CodeGiver'

export default class Brick extends CodeGiver {
  constructor (dispatch) {
    super (dispatch)
    this.code = 1
    this.img = 'images/items/Brick.png'
    this.msg = 'You find some code'
    this.name = 'brick'
    this.roomStyle = {
      width: '90px',
      height: '79px',
      position: 'absolute',
      top: '18%',
      left: '83.5%',
      zIndex: 5
    }
  }

}
