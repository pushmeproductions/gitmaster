import ThingGiver from './ThingGiver'

import Password from '../items/Password'

export default class StaffLog extends ThingGiver {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Book.png'
    this.msg = "ENTRY 3876: Lucky, I double checked this morning, I was about to push to master!! That would have been a disaster. ENTRY 3100: System password update: 1000001"
    this.name = 'stafflog'
    this.className = 'main'
    this.item = new Password(this.dispatch)
    this.roomStyle = {
      width: '68px',
      height: '28px',
      position: 'absolute',
      top: '67%',
      left: '27%',
      zIndex: 5
    }
  }
}
