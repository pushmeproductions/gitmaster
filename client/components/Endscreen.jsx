import React from 'react'
import {connect} from 'react-redux'

class Endscreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div><p>I am the ENDSCREEN</p></div>
    )
  }
}

const mapStateToProps = (state) => {
return {state}
}

export default connect(mapStateToProps)(Endscreen)
