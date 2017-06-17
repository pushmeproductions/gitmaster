import Door from './Door'

import {updateLog} from '../../../actions/currentLog'


export default class ReactSign extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/ReactSign.png'
    this.msg = 'To React Room'
    this.name = 'reactSign'
    this.roomStyle = {
      width: '171px',
      height: '299px',
      position: 'absolute',
      top: '20%',
      left: '27%',
      zIndex: 5
  }
}

  mouseClick() {
    this.dispatch(updateLog(this.openmsg))
    }

  mouseOver() {

  }

  mouseOff() {

  }
}
