import React from 'react'
import {connect} from 'react-redux'

import {updateLog} from '../../../actions/currentLog'
import {locChange} from '../../../actions/door'


class EscapePanel extends React.Component {
  constructor(props) {
  super(props)
  this.dispatch = dispatch
  this.tryagain = 'Have you been been trying'
  this.lostMsg = "Hahaha you have been defeat by SVN!!"
  this.wonMsg = 'Wow you defeated the evil SVN!'
  this.img = 'images/items/EscKey.png'
  this.roomStyle = {
    width: '58px',
    height: '47px',
    position: 'absolute',
    top: '45%',
    left: '23%',
    zIndex: 5
    }
  }
mouseClick() {
    if (this.props.meltdown && this.props.func.length < 5) {
      //bad
      this.dispatch(updateLog(this.lostMsg))
    } else if (this.props.meltdown && this.props.func.length == 5) {
      // good
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
