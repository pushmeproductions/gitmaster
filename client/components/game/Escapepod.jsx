import React from 'react'
import {connect} from 'react-redux'

import EscapePanel from './items/EscapePanel'

class Escapepod extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/EscapePod.png'/>
        <EscapePanel />
      </div>
    )
  }
}

export default connect()(Escapepod)
