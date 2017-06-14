import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Game from './Game'
import Endscreen from './Endscreen'
import Homepage from './Homepage'


class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='app-container'>
        <Router>
          <Route exact path='/' component={Homepage} />
          <Route path='/game' component={Game} />
          <Route path='/end' component={Endscreen} />
        </Router>
      </div>
    )
  }

}

export default connect()(App)
