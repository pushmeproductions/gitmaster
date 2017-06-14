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
      <div>
        <h1> Welcome to the staffroom! </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(StaffRoom)
