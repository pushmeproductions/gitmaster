import React from 'react'
import {connect} from 'react-redux'

// import Ui from './UI/Ui'
import Cell from './Cell'
import Corridor from './Corridor'
import Escapepod from './Escapepod'
import Reactcore from './Reactcore'
import Staffroom from './Staffroom'


class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='app-container'>
        <Cell />
        <Corridor />
        <Staffroom />
        <Reactcore />
        <Escapepod />
      </div>
    )
  }

}

export default connect()(App)
