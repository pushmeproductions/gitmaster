import React from 'react'
import {connect} from 'react-redux'


class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      this.state
    }
  }

  render() {
    return (
      <div><p>I am the CELL</p></div>
    )
  }
}

const mapStateToProps = (state) => {
return {state}
}

export default connect(mapStateToProps)(Cell)
