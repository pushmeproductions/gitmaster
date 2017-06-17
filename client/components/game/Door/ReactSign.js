import Door from './Door'

import {updateLog} from '../../../actions/currentLog'
import {locChange} from '../../../actions/door'


export default class ReactSign extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/ReactSign.png'
    this.msg = 'To React Room'
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

  mouseClick() {
    this.dispatch(updateLog(this.msg))
    this.dispatch(locChange('reactcore'))
    console.log('Surely I am the best looking sign you have ever seen right?')
    }

  mouseOver() {

  }

  mouseOff() {

  }
}
