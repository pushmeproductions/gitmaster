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
  }

  render () {
    return (
      <div className='game-container'>
        <Ui />
        <Cell />
      </div>
    )
  }

}

export default connect()(Game)

// <Corridor />
// <Staffroom />
// <Reactcore />
// <Escapepod />
