import Item from '../items/Item'
import React from 'react'
import {locChange} from '../../../actions/door'
import {updateLog} from '../../../actions/currentLog'


export default class Door extends Item {
  constructor(dispatch) {
    super(dispatch)
  }

  mouseClick() {
    this.dispatch(locChange(this.nextLoc))
    this.dispatch(updateLog(this.exitMsg))
  }
  mouseOver(e){
    e.target.style.cursor = 'pointer'
  }

  mouseOut(e){
    e.target.style.cursor = 'none'
  }

  render(authorised){
  return (<img id={`sign-${this.name}`}
      src={this.img}
      style={this.roomStyle}
      onClick={() => this.mouseClick(authorised)}
      onMouseOver={this.mouseOver}
      onMouseLeave={this.mouseOff}/>
    )
  }
}
