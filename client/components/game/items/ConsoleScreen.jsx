import React from 'react'

import Item from './Item'
import {updateLog} from '../../../actions/currentLog'
import {openConsole} from '../../../actions/consolePopUp'


export default class ConsoleScreen extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/ConsoleScreen.png'
    this.msg = 'The console'
    this.name = 'consolescreen'
    this.roomStyle = {
      width: '67px',
      height: '32px',
      position: 'absolute',
      top: '70%',
      left: '76%',
      zIndex: 5
    }
  }

  mouseClick(){
    this.dispatch(openConsole())
  }

  render() {
    return(
      <img id='consolescreen'
        src={this.img} style={this.roomStyle}
        onClick={() => this.mouseClick()}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOff}/>
    )
  }
}
