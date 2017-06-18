import CodeGiver from './CodeGiver'
import {updateLog} from '../../../actions/currentLog'
import {sendToFunc} from '../../../actions/sendToFunction'

export default class Authbot extends CodeGiver {
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
    this.dispatch(sendToFunc('code3'))
    console.log('authbotauthbotauthbotHEY!');
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
