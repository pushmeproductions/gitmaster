import React from 'react'
import {connect} from 'react-redux'

import Skull from './items/Skull'


class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      worldItems: this.props.worldItems,
      cellLocked: this.props.cellLocked
    }
  }

  componentWillMount(props) {
    this.setState({
      roomItems: this.populateRoom()
    })
  }

  //componentWillReceiveProps

  populateRoom () {
    return [new Skull (this.props.dispatch)]
    return [new Door (this.props.dispatch)]
  }


  renderItem(item) {
    if (this.state.worldItems.indexOf(item.name) > -1) {
      return  (
        <img
          src={item.img}
          style={item.roomStyle}
          onClick={() => item.mouseClick()}
          onMouseOver={() => item.mouseOver()}
          onMouseOut={() => item.mouseOff()}
        />
      )
    }
  }

renderDoor() {
  if(this.state.cellLocked){
    return (
      <img
        src={item.img}
        style={item.roomStyle}
        onClick={()=> item.mouseClick()}
        onMouseOver={()=> item.mouseOver()}
        onMouseOut={()=> item.mouseOff()}
        />
    )

  }
}

  render() {
    return (
      <div className='window'>
        <img className='background-img'src='images/backgrounds/Cell.png'/>
        <div>
          {this.state.roomItems.map((item) => {
            return this.renderItem(item)
          })}
        </div>
        {this.state.cellLocked && this.renderDoor()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    worldItems: state.worldItems,
    cellLocked: state.cellLocked
  }
}

export default connect(mapStateToProps)(Cell)
