import React from 'react'
import {connect} from 'react-redux'

import Ui from './ui/Ui'
import Cell from './Cell'
import Corridor from './Corridor'
import Escapepod from './Escapepod'
import Reactcore from './Reactcore'
import Staffroom from './Staffroom'


class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: 'cell'
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      location: nextProps.location
    })
  }

  renderRoom(location) {
    switch (location) {
      case 'cell':
        return <Cell />
      case 'corridor':
        return <Corridor />
      case 'staffroom':
        return <Staffroom />
      case 'reactcore':
        return <Reactcore />
      case 'escapepod':
        return <Escapepod />
      default:
        return
    }
  }

  render () {
    return (
      <div className='game-container'>
        <Ui />
        {this.renderRoom(this.state.location)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    location: state.location
  }
}

export default connect(mapStateToProps)(Game)

// <Corridor />
// <Staffroom />
// <Reactcore />
// <Escapepod />
