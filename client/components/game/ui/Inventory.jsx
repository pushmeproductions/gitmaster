import React from 'react'
import {connect} from 'react-redux'

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      items: nextProps.items
    })
  }

  renderItems(items) {
    return items.map((item, i) => {
      return <img src={item.img} key={i} style={item.invStyle} />
    })
  }

  render() {
    return (
      <div id="inventory">
        {this.renderItems(this.state.items)}
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
