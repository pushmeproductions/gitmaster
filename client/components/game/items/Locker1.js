import ThingGiver from './ThingGiver'

import Crowbar from '../items/Crowbar'


export default class Locker1 extends ThingGiver {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Locker1.png'
    this.msg = 'You find a crowbar'
    this.name = 'locker1'
    this.id = 'locker1'
    this.item = new Crowbar (this.dispatch)
    this.roomStyle = {
      width: '80px',
      height: '230px',
      position: 'absolute',
      top: '34%',
      left: '52%',
      zIndex: 5
    }
  }
}
