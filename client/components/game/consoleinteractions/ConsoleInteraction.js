import {updateLog} from '../../../actions/currentLog'
import {branch} from '../../../actions/branch'


export default class ConsoleInteraction {
  constructor (dispatch) {
    this.dispatch = dispatch
  }

  mouseClick() {
    this.dispatch(updateLog(this.msg))
    this.dispatch(branch(this.branch))
  }

  mouseOver(e){
    e.target.style.cursor = 'pointer'
  }

  mouseOff(e){
    e.target.style.cursor = 'none'
  }
}
