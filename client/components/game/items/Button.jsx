import React from 'react'

import Item from './Item'
import {updateLog} from '../../../actions/currentLog'
import {meltdown} from '../../../actions/meltdown'


export default class Button extends Item {
  constructor(dispatch) {
    super (dispatch)
    this.img = 'images/items/Button.png'
    this.meltdownmsg = 'Noooo....what were you thinking? NEVER push to master! ..Meltdown initiated'
    this.name = 'button'
    this.safemsg = 'Well done...you obviously know what will happen if you push to master'
    this.roomStyle = {
      width: '34px',
      height: '32px',
      position: 'absolute',
      top: '69%',
      left: '85%',
      zIndex: 5
    }
  }

  mouseClick(branch) {
    if (branch == 'master') {
      this.dispatch(meltdown())
      this.dispatch(updateLog(this.meltdownmsg))
  } else {this.dispatch(updateLog(this.safemsg))}
  }

  render(branch) {
    return (<img id='button'
      src={this.img} style={this.roomStyle}
      onClick={() => this.mouseClick(branch)}
      onMouseOver={this.mouseOver}
      onMouseOut={this.mouseOff}/>
    )
  }
}
