import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {updateLog} from '../../../actions/currentLog'

class EscapePanel extends React.Component {
  constructor(props) {
  super(props)
  this.dispatch = props.dispatch
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
  console.log(this.props.func)
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
    if(this.props.meltdown){
      return (<Link to='/end'><img
        src={this.img}
        style={this.roomStyle}
        onClick={() => this.mouseClick()}/></Link>
      )
    } else {
      return (<img
        src={this.img}
        style={this.roomStyle}
        onClick={() => this.mouseClick()}/>
      )
    }
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
