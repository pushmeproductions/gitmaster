import React from 'react'

import Item from './Item'
import {closeConsole} from '../../../actions/consolePopUp'


export default class  CloseConsoleButton extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/closeButt.png'
    this.msg = 'You close the console'
    this.name = 'closeconsolebutton'
    this.style = {
      width: '32px',
      height: '24px',
      position: 'absolute',
      top: '25%',
      left: '69.5%',
      zIndex: 8
    }
  }

  mouseClick(){
    this.dispatch(closeConsole())
  }

  render(){
    return(<img id={`button-${this.name}`}
      src={this.img}
      style={this.style}
      onClick={() =>
      this.mouseClick()}
      onMouseOver={this.mouseOver}
      onMouseOut={this.mouseOff}/>
    )
  }
}
