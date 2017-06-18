import Item from './Item'
import {updateLog} from '../../../actions/currentLog'

export default class Authbot extends Item {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/AuthBot.png'
    this.msg = 'Authbot: "AUTHORISE YOURSELF"'
    this.name = 'authbot'
    this.activeStyle = {
      width: '146px',
      height: '220px',
      position: 'absolute',
      top: '31%',
      left: '29%',
      zIndex: 5
    }
    this.idleStyle =  {
      width: '68px',
      height: '80px',
      position: 'absolute',
      top: '0%',
      left: '56%',
      zIndex: 5
    }
  }
  mouseClick() {
    this.dispatch(updateLog(this.msg))
    console.log('authbotauthbotauthbotHEY!');
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
