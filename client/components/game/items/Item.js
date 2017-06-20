import React from 'react'

import {deleteItem} from '../../../actions/worldItems'
import {updateLog} from '../../../actions/currentLog'


export default class Item {
  constructor (dispatch) {
    this.dispatch = dispatch
  }

  mouseClick() {
    this.dispatch(deleteItem(this.name))
    this.dispatch(updateLog(this.msg))
  }


  mouseOver(e){
    e.target.style.cursor = 'pointer'
  }

  mouseOff(e){
    e.target.style.cursor = 'none'
  }

  render(i){
    return (<img id={`item-${this.name}`} key={i}
      src={this.img}
      className={this.class}
      style={this.roomStyle}
      onClick={() => this.mouseClick()}
      onMouseOver={this.mouseOver}
      onMouseOut={this.mouseOff}
     />)
  }

}
