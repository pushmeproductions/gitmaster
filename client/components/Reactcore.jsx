import React from 'react'
import {connect} from 'react-redux'

class ReactCore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <h1>ReactCore</h1>
    )
  }
}


function mapStateToProps() {
  return {
    .......
  }
}

export default connect(mapStateToProps)(ReactCore)
