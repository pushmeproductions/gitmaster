import React from 'react'
import {connect} from 'react-redux'

import ReactSign from './Door/ReactSign'


class Corridor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentWillMount(props) {
    this.setState({
      reactSign: new ReactSign(this.props.dispatch)
    })
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //
  //   })
  // }

  renderReactSign(sign) {
    return (<img
      src={sign.img}
      style={sign.roomStyle}
      onClick={() => sign.mouseClick('click')}
      onMouseOver={() => sign.mouseOver()}
      onMouseOut={() => sign.mouseOff()}/>
    )
  }

  render() {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Corridor.png'/>
          {this.renderReactSign(this.state.reactSign)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
return {state}
}

export default connect(mapStateToProps)(Corridor)
