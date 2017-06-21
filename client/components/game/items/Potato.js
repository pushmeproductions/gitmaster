import Item from './Item'


export default class Skull extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Potato.png'
    this.msg = 'POTAGO!'
    this.name = 'potato'
    this.class = 'main'
    this.roomStyle = {
      width: '40px',
      height: '32px',
      position: 'absolute',
      top: '26%',
      left: '88%',
      zIndex: 3
    }
  }

}
