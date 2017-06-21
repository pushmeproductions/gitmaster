import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import EscapePanel from './items/EscapePanel'

class Escapepod extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
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

const mapStateToProps = (state) => {
  return {state}
}
export default connect(mapStateToProps)(Escapepod)
