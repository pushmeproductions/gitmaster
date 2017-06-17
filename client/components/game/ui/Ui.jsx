import React from 'react'
import {connect} from 'react-redux'

import Inventory from './Inventory'
import Function from './Function'


class Ui extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLog: 'You awaken in a cell..'
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      currentLog: nextProps.currentLog
    })
  }


  render () {
    return (
      <div className='ui-container'>
        <img id='overlay' src='images/backgrounds/UI.png' />
        <Inventory />
        <Function />
        <div id='log'>
          {this.state.currentLog}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { currentLog: state.currentLog }
}

export default connect(mapStateToProps)(Ui)
