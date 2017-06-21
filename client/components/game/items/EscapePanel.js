import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {updateLog} from '../../../actions/currentLog'
import {goodEnding} from '../../../actions/ending'

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
    this.state = {
      location: this.props.location,
      meltdown: this.props.meltdown,
      func: this.props.func,
      goodEnding: this.props.goodEnding
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      goodEnding: nextProps.goodEnding
    })
  }


mouseClick() {
  console.log(this.props)
    if (this.props.meltdown && this.props.func.length < 5) {
      this.dispatch(updateLog(this.lostMsg))
      //bad
      window.location.href = '/#/end'
      console.log("this should be bad ending")

    } else if (this.props.meltdown && this.props.func.length == 5) {
      this.dispatch(goodEnding())
      window.location.href = '/#/end'
      console.log("this should be good ending");
      // good
      this.dispatch(updateLog(this.wonMsg))
    } else {
      this.dispatch(updateLog(this.tryagain))
    }
  }

  render(){
    return (<img id='esc'
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
      func: state.func,
      goodEnding: state.goodEnding
    }
  }

export default connect(mapStateToProps)(EscapePanel)
//
// <Link to='/end'><img
//   src={this.img}
//   style={this.roomStyle}
//   onClick={() => this.mouseClick()}/></Link>
