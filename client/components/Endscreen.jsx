import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Endscreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      goodEnding: this.props.goodEnding
    }
  }

  componentWillReceiveProps(nextProps) {
    goodEnding: nextProps.goodEnding
  }

  renderCorrectEndImage() {
    return (
      <img className='ending-picture' src={this.props.goodEnding ? 'images/backgrounds/GoodEnding.png'
      : 'images/backgrounds/BadEnding.png'}/>
    )
  }

  render() {
    return (
      <div className='end-container'>
        {this.renderCorrectEndImage()}
        <Link to='/' id='start'><div className='start-button'>Play Again</div></Link>
        <div className='footer'>A Push Me Productions Presentation</div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
return {
  goodEnding: state.goodEnding
  }
}

export default connect(mapStateToProps)(Endscreen)
