import React from 'react'
import {connect} from 'react-redux'

import Skull from './items/Skull'
import Bucket from './items/Bucket'
import Brick from './code/Brick'
import CellDoor from './Door/CellDoor'


class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.cellDoor = new CellDoor(this.props.dispatch)
    this.roomItems = [
      new Skull(this.props.dispatch),
      new Brick(this.props.dispatch),
      new Bucket(this.props.dispatch)
    ]
    this.state = {
      worldItems: this.props.worldItems,
      cellLocked: this.props.cellLocked,
      func: this.props.func,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      worldItems: nextProps.worldItems,
      cellLocked: nextProps.cellLocked,
      func: nextProps.func
    })
  }

  renderItems() {
    return this.roomItems.map((item, i) => {
      if (this.state.worldItems.indexOf(item.name) > -1) {
        return item.render(i)
      }
    })
  }

  render() {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Cell.png'/>
        <div className='cellItemsDiv'>
          {this.renderItems()}
        </div>
        {this.cellDoor.render(this.props.activeItem, this.props.cellLocked)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    worldItems: state.worldItems,
    cellLocked: state.cellLocked,
    activeItem: state.activeItem,
    func: state.func
  }
}

export default connect(mapStateToProps)(Cell)
