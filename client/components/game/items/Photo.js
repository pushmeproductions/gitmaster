import InventoryItem from './InventoryItem'

export default class Photo extends InventoryItem {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Photo.png'
    this.msg = "This is bob's family Photo"
    this.name = 'Photo'
    this.invStyle = {
      width: '78px',
      height: '78px',
      position: 'absolute',
      top: '72%',
      left: '6%',
      zIndex: 5
    }
  }
}
