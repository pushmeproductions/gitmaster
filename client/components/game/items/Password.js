import InventoryItem from './InventoryItem'



export default class Password extends InventoryItem {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Password.png'
    this.msg = "System password update: 1000001"
    this.name = 'corridorCell2'
    this.exit = ''
    this.invStyle = {
      width: '51px',
      height: '29px',
      position: 'absolute',
      top: '21%',
      left: '10%',
      zIndex: 5
    }
  }
}
