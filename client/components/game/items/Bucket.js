
import InventoryItem from './InventoryItem'



export default class Bucket extends InventoryItem {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/Bucket.png'
    this.msg = 'The contents of this bucket glow strangely, you wonder if they might be corrosive...'
    this.name = 'bucket'
    this.class = 'main'
    this.roomStyle = {
      width: '140px',
      height: '160px',
      position: 'absolute',
      top: '58%',
      left: '58%',
      zIndex: 5
    }
    this.invStyle =  {
      width: '93px',
      height: '96px',
      position: 'absolute',
      top: '0.5%',
      left: '53.5%',
      zIndex: 5
    }
  }

}
