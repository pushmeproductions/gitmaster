import InventoryItem from './InventoryItem'

export default class Crowbar extends InventoryItem {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Crowbar.png'
    this.name = 'crowbar'
    this.msg = 'This is one cool looking crowbar wonder if I can use it?'
    this.invStyle =  {
      width: '79px',
      height: '79px',
      position: 'absolute',
      top: '72%',
      left: '57%',
      zIndex: 5
    }
  }
}
