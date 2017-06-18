import Door from './Door'

import {updateLog} from '../../../actions/currentLog'
import {locChange} from '../../../actions/door'


export default class ReactSign extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/ReactSign.png'
    this.msg = 'Welcome to the React Room'
    this.error = 'AuthBot: "Sorry you are not AUTHORISED to pass."'
    this.name = 'reactSign'
    this.roomStyle = {
      width: '145px',
      height: '130px',
      position: 'absolute',
      top: '12%',
      left: '10%',
      zIndex: 5
  }
}

  mouseClick(authBot) {
    console.log(authBot);
    if(authBot) {
      this.dispatch(locChange('reactcore'))
      this.dispatch(updateLog(this.msg))
      console.log('Surely I am the best looking sign you have ever seen right?')
    }else {
      this.dispatch(updateLog(this.error))
    }
  }

  mouseOver() {

  }

  mouseOff() {

  }
}
