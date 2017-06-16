import React from 'react'
import {connect} from 'react-redux'

class Escapepod extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div><p>I am the ESCAPEPOD</p></div>
    )
  }
}

const mapStateToProps = (state) => {
return {state}
}

export default connect(mapStateToProps)(Escapepod)
