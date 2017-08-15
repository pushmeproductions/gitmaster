import React from 'react'

import Door from './Door'

import {updateLog} from '../../../actions/currentLog'
import {jamDoor, countDown} from '../../../actions/reDoor'



export default class ReactEscapeDoor extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.msg = 'The Escape Pod! Relief surges through you. Now how does this thing work?'
    this.exitMsg = 'You are in the escapepod do you really want to leave?'
    this.name = 'reactEscapeDoor'
    this.nextLoc = 'escapepod'
    this.img = 'images/items/ReactEscapeDoor.png'
    this.imgjam = 'images/items/JammedDoor.png'
    this.imgMeltdown = 'images/items/MeltdownDoor.png'
    this.roomStyle = {
      width: '37.5px',
      height: '81px',
      position: 'absolute',
      top: '48.5%',
      left: '14%',
      zIndex: 5
    }
  }

  mouseClick (meltdown, doorJammed, activeItem, tries) {
    if(!meltdown || doorJammed) {
      super.mouseClick()
    } else if (activeItem == 'crowbar') {
      this.dispatch(jamDoor())
      this.dispatch(updateLog('You stick the crowbar in the doorway and hope it holds'))
    } else if (tries > 0) {
      this.dispatch(countDown())
      this.dispatch(updateLog('The door looks like it\'s about to come down on you! If only you had something to jam it open...'))
    } else {
      window.location.href = '/#/end'
    }
  }

  correctDoorImg (meltdown, doorJammed) {
    if(meltdown) {
      return doorJammed ? this.imgjam : this.imgMeltdown
    } else {
      return this.img
    }
  }

  render(doorJammed, meltdown, activeItem, tries){
    return(<img id='escapedoor'
      src={this.correctDoorImg(meltdown, doorJammed)} style={this.roomStyle}
      onClick={() => this.mouseClick(meltdown, doorJammed, activeItem, tries)}
      onMouseOver={this.mouseOver}
      onMouseOut={this.mouseOff}/>
    )
  }
}
