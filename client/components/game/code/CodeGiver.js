import Item from '../items/Item'

import {sendToFunc} from '../../../actions/sendToFunction'
import Item from '../items/Item'

export default class CodeGiver extends Item {
  constructor(dispatch) {
    super(dispatch)
  }

  mouseClick() {
    this.dispatch(sendToFunc(this.code))
    super.mouseClick()

  }

}
