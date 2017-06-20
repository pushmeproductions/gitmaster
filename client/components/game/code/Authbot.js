import CodeGiver from './CodeGiver'
import {updateLog} from '../../../actions/currentLog'
import {sendToFunc} from '../../../actions/sendToFunction'
// import {activateItem} from '../../../actions/activeItem'
import {authorised} from '../../../actions/authorised'

export default class Authbot extends CodeGiver {
  constructor (dispatch) {
    super (dispatch)
    this.code = 3
    this.img = 'images/items/AuthBot.png'
    this.msg = 'Authbot: "AUTHORISE YOURSELF"'
    this.authmsg = 'Authbot smiles benignly and lets you pass and...gives you some code?'
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
      width: '176px',
      height: '230px',
      position: 'absolute',
      top: '41%',
      left: '1%',
      zIndex: 5
    }
  }


  mouseClick(activeItem) {
    if (activeItem == 'cookie') {
      this.dispatch(sendToFunc(this.code))
      this.dispatch(updateLog(this.authmsg))
      this.dispatch(authorised())
    } else {this.dispatch(updateLog(this.msg))}
  }
}
