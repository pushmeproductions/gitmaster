import React from 'react'
import {connect} from 'react-redux'

class Function extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h2>Hello there I am creating a the Function!</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(Function)
