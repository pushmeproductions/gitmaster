import React from 'react'
import {connect} from 'react-redux'

import {updateLog} from '../../../actions/currentLog'
import {locChange} from '../../../actions/door'


class EscapePanel extends React.Component {
  constructor(props) {
  super(props)
  this.dispatch = props.dispatch
  this.tryagain = 'Have you been been trying'
  this.lostMsg = "Hahaha you have been defeat by SVN!!"
  this.wonMsg = 'Wow you defeated the evil SVN!'
  this.img = 'images/items/Photo.png'
  this.roomStyle = {
    width: '69px',
    height: '234px',
    position: 'absolute',
    top: '37%',
    left: '70%',
    zIndex: 5
    }
  }
mouseClick() {
    if (this.props.meltdown && this.props.func < 5) {
      this.dispatch(locChange('badending'))
      this.dispatch(updateLog(this.lostMsg))
    } else if (this.props.meltdown && this.props.func == 5) {
      this.dispatch(locChange('happyending'))
      this.dispatch(updateLog(this.wonMsg))
    } else {
      this.dispatch(updateLog(this.tryagain))
    }
  }
  render(){
    return (<img
      src={this.img}
      style={this.roomStyle}
      onClick={() => this.mouseClick()}/>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      location: state.location,
      meltdown: state.meltdown,
      func: state.func

    }
  }

export default connect(mapStateToProps)(EscapePanel)
