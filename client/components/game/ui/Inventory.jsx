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
    console.log('state', this.state, 'props', this.props);
    return items.map((item) => {
      return <img src={item.img} style={item.invStyle}/>
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
