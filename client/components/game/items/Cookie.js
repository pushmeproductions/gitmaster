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
      width: '65px',
      height: '21px',
      position: 'absolute',
      top: '22%',
      left: '60%',
      zIndex: 5
    }
  }

  mouseClick() {
      this.dispatch(updateLog(this.msg))
      console.log('cookie');
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){

  }

}
