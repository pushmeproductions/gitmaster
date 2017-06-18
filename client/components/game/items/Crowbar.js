import InventoryItem from './InventoryItem'

export default class Crowbar extends InventoryItem {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/crowbar.png'
    this.name = 'crowbar'
    this.msg = 'This is one cool looking crowbar wonder if I can use it?'
    this.invStyle =  {
      width: '50px',
      height: '65px',
      position: 'absolute',
      top: '36%',
      left: '63%',
      zIndex: 5
    }
  }
}
