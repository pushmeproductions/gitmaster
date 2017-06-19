import ThingGiver from './ThingGiver'

import Cookie from '../items/Cookie'


export default class CorridorCell2 extends ThingGiver {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/CorridorCell2.png'
    this.msg = 'Wow...a cookie...I think the authbot likes cookies'
    this.name = 'corridorCell2'
    this.exit = ''
    this.item =  new Cookie (this.dispatch)
    this.roomStyle = {
      width: '69px',
      height: '234px',
      position: 'absolute',
      top: '37%',
      left: '70%',
      zIndex: 5
    }
  }

}
