import React from 'react'
import {connect} from 'react-redux'

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id="inventory">
        <h2>Hello there I am an Inventory!</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(Inventory)
