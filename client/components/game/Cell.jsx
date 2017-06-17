import React from 'react'
import {connect} from 'react-redux'

import Skull from './items/Skull'
import Bucket from './items/Bucket'
import Brick from './items/Brick'
import CellDoor from './Door/CellDoor'

class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      worldItems: this.props.worldItems,
      cellLocked: this.props.cellLocked,
    }
  }

  componentWillMount(props) {
    this.setState({roomItems: this.populateRoom(),
      cellDoor: new CellDoor(this.props.dispatch)
})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({worldItems: nextProps.worldItems,
    cellLocked: nextProps.cellLocked
    })
  }

  populateRoom() {

    return [
      new Skull(this.props.dispatch),
      new Brick(this.props.dispatch),
      new Bucket(this.props.dispatch),
    ]
  }

  renderItem(item, i) {
    if (this.state.worldItems.indexOf(item.name) > -1) {
      return (<img key={i}
        src={item.img}
         style={item.roomStyle}
         onClick={() => item.mouseClick()}
         onMouseOver={() => item.mouseOver()}
         onMouseOut={() => item.mouseOff()}/>)
    }
  }

  renderDoor(door) {
    if (this.state.cellLocked) {
      return (<img
        src={door.img}
        style={door.roomStyle}
        onClick={() => door.mouseClick(this.props.activeItem, this.props.cellLocked)}
        onMouseOver={() => door.mouseOver()}
        onMouseOut={() => door.mouseOff()}/>
      )
    }
  }

  render() {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Cell.png'/>
        <div>
          {this.state.roomItems.map((item) => {
            return this.renderItem(item)
          })}
        </div>
        {this.state.cellLocked && this.renderDoor(this.state.cellDoor)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    worldItems: state.worldItems,
    cellLocked: state.cellLocked,
    inventory: state.inventory,
    activeItem: state.activeItem,
    cellLocked: state.activeItem

  }
}

export default connect(mapStateToProps)(Cell)
