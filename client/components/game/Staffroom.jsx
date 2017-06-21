import React from 'react'
import {connect} from 'react-redux'

import StaffLog from './items/Stafflog'
import Password from './items/Password'
import Locker1 from './items/Locker1'
import Locker2 from './code/Locker2'
import Locker3 from './items/Locker3'

class StaffRoom extends React.Component {
  constructor(props) {
    super(props)
    this.roomItems = [
      new StaffLog(this.props.dispatch),
      new Locker1(this.props.dispatch),
      new Locker2(this.props.dispatch),
      new Locker3(this.props.dispatch)
    ]
    this.state = {
      worldItems: this.props.worldItems,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      worldItems: nextProps.worldItems,
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

  render () {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Staffroom.png'/>
        {this.renderItems()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  worldItems: state.worldItems,
  activeItem: state.activeItem,
  func: state.func,
  meltdown: state.meltdown
  }
}

export default connect(mapStateToProps)(StaffRoom)
