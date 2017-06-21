import CodeGiver from './CodeGiver'
import React from 'react'


export default class Moustache extends CodeGiver {
  constructor(dispatch) {
    super(dispatch)
    this.name = 'moustache'
    this.code = 5
    this.img = 'images/items/Mo.png'
    this.msg = 'a curly boy has come'
    this.activeStyle = {
      width: '58px',
      height: '14px',
      position: 'absolute',
      top: '36%',
      left: '36%',
      zIndex: 6
    }
    this.idleStyle =  {
      width: '52px',
      height: '14px',
      position: 'absolute',
      top: '46.7%',
      left: '10.7%',
      zIndex: 6
    }
  }

render (worldItems, authorised){
  if (worldItems.indexOf(this.name) > -1) {
    return (<img id='mo'
    src={this.img}
    style={authorised ?
      this.idleStyle : this.activeStyle}
      onClick={() => this.mouseClick()}
      onMouseOver={this.mouseOver}
      onMouseLeave={this.mouseOff}/>
    )
  }
}
}
