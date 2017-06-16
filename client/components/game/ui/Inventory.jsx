import React from 'react'
import {connect} from 'react-redux'

class Inventory extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      items: nextProps.items
    })
  }

  renderItems() {
    this.state.items.map((item) => {
      return <img src={item.img} />
    })
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
  return {
    items: state.inventory
  }
}

export default connect(mapStateToProps)(Inventory)
