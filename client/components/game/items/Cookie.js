import InventoryItem from './InventoryItem'


export default class Cookie extends InventoryItem {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Cookie.png'
    this.name = 'cookie'
    this.msg = 'This cookie looks tasty...I wonder if the authbot might like it?'
    this.invStyle =  {
      width: '85px',
      height: '65px',
      position: 'absolute',
      top: '18%',
      left: '51%',
      zIndex: 5
    }
  }
}
