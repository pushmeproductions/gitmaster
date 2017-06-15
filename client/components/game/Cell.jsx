import React from 'react'
import {connect} from 'react-redux'

import Skull from './items/Skull'


class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      worldItems: this.props.worldItems,
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
  }

  renderItem(item) {
    if (this.state.worldItems.indexOf(item.name) > -1) {
      return( <img src={item.img} style={item.roomStyle} /> )
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
      </div>
    )
  }
}
// if bucket
// if brick
// if unlocked
// if func

const mapStateToProps = (state) => {
  return {
    worldItems: state.worldItems
  }
}

export default connect(mapStateToProps)(Cell)
