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
    console.log('i am here');
    return items.map((item, i) => {
      return (
        <img
          src={item.img}
          key={i}
          style={item.invStyle}
          onClick={()=> item.toggleActive(this.props.activeItem)}
      /> )
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
    items: state.inventory,
    activeItem: state.activeItem
  }
}

export default connect(mapStateToProps)(Inventory)
