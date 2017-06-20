import InventoryItem from './InventoryItem'


export default class Skull extends InventoryItem {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Skull.png'
    this.msg = 'You feel like you are being watched...'
    this.name = 'skull'
    this.class = 'main'
    this.roomStyle = {
      width: '110px',
      height: '100px',
      position: 'absolute',
      top: '71%',
      left: '71%',
      zIndex: 5
    }
    this.invStyle = {
      width: '79px',
      height: '73px',
      position: 'absolute',
      top: '0.5%',
      left: '3%',
      zIndex: 5
    }
  }

}
