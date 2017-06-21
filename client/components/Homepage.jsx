import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {

    return (
      <div className = 'home-container'>
        <div className = 'Gitmaster'>
          <h1>GitMaster</h1>
        </div>
        <div className = 'introtxt'>
          <p>
            "It is the year 3000. Organic lifeforms battle for freedom
            against their robot overlords. The Version Control wars
            have been raging since before you were born.
            You are the last in the line of Gitmasters,
            and have been captured after your defeat in the
            most recent Merge Conflict. You awaken in a cell…"
          </p>
        </div>
          <Link to='/game' id='start'><div className='start-button'>Start</div></Link>
      </div>



    )
}

export default HomePage
