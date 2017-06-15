import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Game from './game/Game'
import Endscreen from './Endscreen'
import Homepage from './Homepage'


const App = () => (
  <div className='app-container'>
    <Router>
      <span>
        <Route exact path='/' component={Homepage} />
        <Route path='/game' component={Game} />
        <Route path='/end' component={Endscreen} />
      </span>
    </Router>
  </div>
)

export default App
