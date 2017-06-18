import InventoryItem from './InventoryItem'

export default class Photo extends InventoryItem {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Photo.png'
    this.msg = "This is bob's family Photo"
    this.name = 'Photo'
    this.invStyle = {
      width: '82px',
      height: '81px',
      position: 'absolute',
      top: '34%',
      left: '4%',
      zIndex: 5
    }
  }
}
