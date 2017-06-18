import InventoryItem from './InventoryItem'


import {addToInv} from '../../../actions/inventory'
import {updateLog} from '../../../actions/currentLog'


export default class Cookie extends InventoryItem {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Cookie.png'
    this.name = 'cookie'
    this.msg = 'This cookie looks tasty...I wonder if the authbot might like it?'
    this.invStyle =  {
      width: '60px',
      height: '70px',
      position: 'absolute',
      top: '18%',
      left: '60%',
      zIndex: 5
    }
  }

  mouseClick() {
      this.dispatch(updateLog(this.msg))
      console.log('cookie');
  }

}
