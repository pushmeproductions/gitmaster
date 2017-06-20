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
    this.state = {
      worldItems: this.props.worldItems,
    }
  }

  componentWillMount(props) {
    this.setState({
      stafflog: new StaffLog(this.props.dispatch),
      locker1: new Locker1(this.props.dispatch),
      locker2: new Locker2(this.props.dispatch),
      locker3: new Locker3(this.props.dispatch)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      worldItems: nextProps.worldItems,
      func: nextProps.func
    })
  }


renderLocker1(locker1){
  if (this.state.worldItems.indexOf(locker1.name) > -1) {
    return (<img id='locker1'
      src={locker1.img}
      style={locker1.roomStyle}
      className={locker1.class}
      onClick={() => locker1.mouseClick('click')}
      onMouseOver={locker1.mouseOver}
      onMouseOut={locker1.mouseOff}/>
      )
  }
}

renderLocker2(locker2){
  if (this.state.worldItems.indexOf(locker2.name) > -1) {
    return (<img id='locker2'
      src={locker2.img}
      style={locker2.roomStyle}
      className={locker2.class}
      onClick={() => locker2.mouseClick('click')}
      onMouseOver={locker2.mouseOver}
      onMouseOut={locker2.mouseOff}/>
      )
  }
}

renderLocker3(locker){
  if (this.state.worldItems.indexOf(locker.name) > -1) {
    return (<img id='locker3'
      src={locker.img}
      style={locker.roomStyle}
      className={locker.class}
      onClick={() => locker.mouseClick('click')}
      onMouseOver={locker.mouseOver}
      onMouseOut={locker.mouseOff}/>
      )
  }
}

  renderStaffLog(log) {
    if (this.state.worldItems.indexOf(log.name) > -1) {
    return (<img id='staff-log'
      src={log.img}
      style={log.roomStyle}
      className={log.class}
      onClick={() => log.mouseClick(this.props.activeItem)}
      onMouseOver={log.mouseOver}
      onMouseOut={log.mouseOff}/>
      )
    }
  }

  render () {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Staffroom.png'/>
        {this.renderStaffLog(this.state.stafflog)}
        {this.renderLocker1(this.state.locker1)}
        {this.renderLocker2(this.state.locker2)}
        {this.renderLocker3(this.state.locker3)}
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
