import React from 'react'
import {connect} from 'react-redux'

import {updateLog} from '../../../actions/currentLog'
import {funEnding} from '../../../actions/ending'

class EscapePanel extends React.Component {
  constructor(props) {
  super(props)
    this.dispatch = props.dispatch
    this.tryagain = 'ERROR: FUNCTION INCOMPLETE'
    this.lostMsg = "Hahaha you have been defeat by SVN!!"
    this.wonMsg = 'Wow you defeated the evil SVN!'
    this.img = 'images/items/EscKey.png'
    this.roomStyle = {
      cursor: 'pointer',
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

    if (this.props.meltdown && this.props.func.length < 5) {
      this.dispatch(updateLog(this.lostMsg))
      window.location.href = '/#/end'
      // console.log("this should be bad ending")

    } else if (this.props.meltdown && this.props.func.length == 5) {
      this.dispatch(funEnding())
      window.location.href = '/#/end'
      // console.log("this should be good ending");
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
    onClick={() => this.mouseClick()} />
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

EscapePanel.propTypes = { func: React.PropTypes.array, meltdown: React.PropTypes.boolean, dispatch: React.PropTypes.object, location: React.PropTypes.string, goodEnding: React.PropTypes.object }

export default connect(mapStateToProps)(EscapePanel)
