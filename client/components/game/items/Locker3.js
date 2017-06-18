import ThingGiver from './ThingGiver'


// import Photo from './Photo'

export default class Locker3 extends ThingGiver {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Locker3.png'
    this.msg = 'You find a picture of family in here.'
    this.name = 'locker3'
    // this.item = new Photo (this.dispatch)
    this.roomStyle = {
      width: '67px',
      height: '230px',
      position: 'absolute',
      top: '34%',
      left: '74%',
      zIndex: 5
    }
  }
}
