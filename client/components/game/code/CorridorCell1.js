import CodeGiver from './CodeGiver'

export default class CorridorCell1 extends CodeGiver {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/CorridorCell1.png'
    this.code = 2
    this.msg = 'You rummage around and find some code'
    this.name = 'corridorCell1'
    this.roomStyle = {
      width: '75px',
      height: '216px',
      position: 'absolute',
      top: '50%',
      left: '84%',
      zIndex: 5
    }
  }

}
