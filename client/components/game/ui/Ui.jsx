import React from 'react'
import {connect} from 'react-redux'

import Inventory from './Inventory'
import FunctionCode from './FunctionCode'
import BackButton from './BackButton'

import {initialise} from '../../../actions/gameSetup'

class Ui extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLog: 'You awaken in a cell..'
    }
  }

  componentWillMount () {
    this.props.dispatch(initialise())
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      currentLog: nextProps.currentLog
    })
  }


  render () {
    return (
      <div className='ui-container'>
        <img id='overlay' src='images/backgrounds/UI-view1.png' />
        <Inventory />
        <FunctionCode />
        <BackButton />
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
