import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {

    return (
      <div className = 'home-container'>
        <h1>GitMaster</h1>
        <button>
        <Link to='/game' id='start'>Start</Link>
        </button>
      </div>
    )
}

export default HomePage
