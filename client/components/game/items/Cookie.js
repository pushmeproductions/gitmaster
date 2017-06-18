import Item from './Item'
import {addToInv} from '../../../actions/inventory'
import {updateLog} from '../../../actions/currentLog'


export default class Cookie extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Cookie.png'
    this.name = 'cookie'
    this.msg = 'This cookie looks tasty...I wonder if the authbot might like it?'
    this.invStyle =  {
      width: '68px',
      height: '80px',
      position: 'absolute',
      top: '0%',
      left: '56%',
      zIndex: 5
    }
  }

  mouseClick() {

  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    
  }

  toggleActive() {

  }
}
