import React from 'react'
import {connect} from 'react-redux'

import Skull from './items/Skull'
import Bucket from './items/Bucket'
import Brick from './code/Brick'
import CellDoor from './Door/CellDoor'

class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      worldItems: this.props.worldItems,
      cellLocked: this.props.cellLocked,
      func: this.props.func,
    }
  }

  componentWillMount(props) {
    this.setState({
      roomItems: this.populateRoom(),
      cellDoor: new CellDoor(this.props.dispatch)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      worldItems: nextProps.worldItems,
      cellLocked: nextProps.cellLocked,
      func: nextProps.func
    })
  }

  populateRoom() {

    return [
      new Skull(this.props.dispatch),
      new Brick(this.props.dispatch),
      new Bucket(this.props.dispatch)
    ]
  }

  renderItem(item, i) {
    if (this.state.worldItems.indexOf(item.name) > -1) {
      return (<img id={`item-${item.name}`}key={i}
        src={item.img}
        className={item.class}
        style={item.roomStyle}
        onClick={() => item.mouseClick()}
        onMouseOver={item.mouseOver}
        onMouseOut={item.mouseOff}
       />)
    }
  }

  renderDoor(door) {
    return (<img id='celldoor'
      src={door.img}
      style={door.roomStyle}
      onClick={() => door.mouseClick(this.props.activeItem, this.props.cellLocked)}
      onMouseOver= {door.mouseOver}
      onMouseOut= {door.mouseOff}/>
    )
  }

  render() {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Cell.png'/>
        <div className='cellItemsDiv'>
          {this.state.roomItems.map((item, i) => {
            return this.renderItem(item, i)
          })}
        </div>
        {this.renderDoor(this.state.cellDoor)}
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
    location: state.location,
    func: state.func,
    meltdown: state.meltdown
  }
}

export default connect(mapStateToProps)(Cell)
