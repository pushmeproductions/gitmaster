import CodeGiver from './CodeGiver'
import React from 'react'

import {updateLog} from '../../../actions/currentLog'
import {sendToFunc} from '../../../actions/sendToFunction'
import {authorised} from '../../../actions/authorised'
import {locChange, lockCell} from '../../../actions/door'



export default class Authbot extends CodeGiver {
  constructor (dispatch) {
    super (dispatch)
    this.code = 3
    this.img = 'images/items/AuthBot.png'
    this.msg = 'Authbot: I MOUSTACHE you to authorise yourself'
    this.msg2 = 'Authbot: "AUTHORISE YOURSELF"'
    this.msg3 = 'Authbot puts you back in your cell'
    this.authmsg = 'Authbot smiles benignly, lets you pass and...gives you some code?'
    this.name = 'authbot'
    this.chances = 2
    this.activeStyle = {
      width: '146px',
      height: '220px',
      position: 'absolute',
      top: '31%',
      left: '29%',
      zIndex: 5
    }
    this.idleStyle =  {
      width: '176px',
      height: '230px',
      position: 'absolute',
      top: '41%',
      left: '1%',
      zIndex: 5
    }
  }


  mouseClick(activeItem) {
    if (activeItem == 'cookie') {
      this.dispatch(sendToFunc(this.code))
      this.dispatch(updateLog(this.authmsg))
      this.dispatch(authorised())
    } else {
      switch (this.chances) {
        case 2:
          this.dispatch(updateLog(this.msg))
          this.chances--
          break
        case 1:
          this.dispatch(updateLog(this.msg2))
          this.chances--
          break
        case 0:
          this.dispatch(updateLog(this.msg3))
          this.dispatch(locChange('cell'))
          this.dispatch(lockCell())
          break
      }
    }
  }

  render(authorised, activeItem) {
    return (<img id='authbot'
       src={this.img}
       style={authorised ? this.idleStyle : this.activeStyle}
       onClick={() =>this.mouseClick(activeItem)}
       onMouseOver={this.mouseOver}
       onMouseLeave={this.mouseOff}/>
     )
  }
}
