import React from 'react'

import Item from './Item'
import {logIn} from '../../../actions/loggedIn'
import {activeItem} from '../../../actions/activeItem'


export default class ConsolePopUp extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.lockimg = 'images/Console/Locked.png'
    this.openimg = 'images/Console/Unlocked.png'
    this.msg = 'The console'
    this.name = 'consolepopup'
    this.style = {
      width: '378px',
      height: '290px',
      position: 'absolute',
      top: '24%',
      left: '20%',
      zIndex: 7
    }
  }

  mouseClick(activeItem){
    if (activeItem == 'password') {
      this.dispatch(logIn())
    }
  }

  render(activeItem, loggedIn) {    
    return ( <img id='popup'
      src={loggedIn ?
      this.openimg : this.lockimg}
      style={this.style}
      onClick={() =>
      this.mouseClick(activeItem)}
      onMouseOver={this.mouseOver}
      onMouseOut={this.mouseOff}/>
    )
  }
}
