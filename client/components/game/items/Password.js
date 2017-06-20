import InventoryItem from './InventoryItem'



export default class Password extends InventoryItem {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Password.png'
    this.msg = "System password update: 1000001"
    this.name = 'password'
    this.exit = ''
    this.invStyle = {
      width: '80px',
      height: '66px',
      position: 'absolute',
      top: '18%',
      left: '3%',
      zIndex: 5
    }
  }
}
