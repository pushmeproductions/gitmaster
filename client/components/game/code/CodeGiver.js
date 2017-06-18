import {sendToFunc} from '../../../actions/sendToFunction'


export default class CodeGiver {
  constructor(dispatch) {
    this.dispatch = dispatch
  }

  mouseClick() {
    this.dispatch(sendToFunc(this.code))

  }

  mouseOver() {

  }

  mouseOff() {

  }

  send2Func() {

  }
}
