import React from 'react'
import {connect} from 'react-redux'

import Inventory from './Inventory'
import Function from './Function'


class Ui extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentMessage: 'I am a UI that logs things'
    }
  }

  render () {
    return (
      <div className='ui-container'>
        <Inventory />
        <Function />
        <div id='log'>
          {this.state.currentMessage}
        </div>
      </div>
    )
  }

}

export default connect()(Ui)
