import React from 'react'
import {connect} from 'react-redux'

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      activeItem: this.props.activeItem
    }
  }


  componentWillReceiveProps (nextProps) {
    this.setState({
      items: nextProps.items,
      activeItem: nextProps.activeItem
    })
  }

  renderItems(items, activeItem) {
    return items.map((item, i) => {
    var glowOrNot = (activeItem == item.name) ? 'glow': 'main'
      return (
        <img
          src={item.img}
          className={glowOrNot}
          key={i}
          style={item.invStyle}
          onClick={()=> item.toggleActive(this.props.activeItem)}
      /> )
    })
  }

  render() {
    return (
      <div id="inventory">
        {this.renderItems(this.state.items, this.state.activeItem)}
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
