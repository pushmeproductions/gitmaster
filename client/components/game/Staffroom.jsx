import React from 'react'
import {connect} from 'react-redux'

class StaffRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Staffroom.png'/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(StaffRoom)
