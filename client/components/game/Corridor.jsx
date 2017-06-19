import React from 'react'
import {connect} from 'react-redux'

import ReactSign from './Door/ReactSign'
import StaffRoom from './Door/StaffRoom'
import Authbot from './code/Authbot'
import CorridorCell1 from './code/CorridorCell1'
import CorridorCell2 from './items/CorridorCell2'
import Cookie from './items/Cookie'
import Moustache from './code/Moustache'


class Corridor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authorised: this.props.authorised,
      worldItems: this.props.worldItems,

    }
  }

  componentWillMount(props) {
    this.setState({
      reactSign: new ReactSign(this.props.dispatch),
      staffRoom: new StaffRoom(this.props.dispatch),
      authbot: new Authbot(this.props.dispatch),
      corridorCell1: new CorridorCell1(this.props.dispatch),
      corridorCell2: new CorridorCell2(this.props.dispatch),
      mo: new Moustache(this.props.dispatch)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      authorised: nextProps.authorised,
      worldItems: nextProps.worldItems,
      func: nextProps.func
    })
    {console.log(nextProps)}
  }

  renderReactSign(sign) {
    return (<img
      src={sign.img}
      style={sign.roomStyle}
      onClick={() => sign.mouseClick(this.props.authorised)}
      onMouseOver={() => sign.mouseOver()}
      onMouseOut={() => sign.mouseOff()}/>
    )
  }

  renderStaffRoom(sign) {
    return (<img
      src={sign.img}
      style={sign.roomStyle}
      onClick={() => sign.mouseClick(this.props.authorised)}
      onMouseOver={() => sign.mouseOver()}
      onMouseOut={() => sign.mouseOff()}/>
    )
  }


  renderAuthbot(bot) {
    return (<img
      src={bot.img}
      style={this.props.authorised ? bot.idleStyle : bot.activeStyle}
      onClick={() =>
      bot.mouseClick(this.props.activeItem)}
      onMouseOver={() => bot.mouseOver()}
      onMouseOut={() => bot.mouseOff()}/>
    )
  }

  renderMo(mo) {
    if (this.state.worldItems.indexOf(mo.name) > -1) {
      return (<img
        src={mo.img}
        style={this.props.authorised ?
        mo.idleStyle : mo.activeStyle}
        onClick={() => mo.mouseClick()}
        onMouseOver={() => mo.mouseOver()}
        onMouseOut={() => mo.mouseOff()}
      />)
    }
  }


  renderCorridorCell1(cell) {
    return (<img
      src={cell.img}
      style={cell.roomStyle}
      onClick={() => cell.mouseClick('click')}
      onMouseOver={() => cell.mouseOver()}
      onMouseOut={() => cell.mouseOff()}/>
    )
  }

  renderCorridorCell2(cell) {
    if (this.state.worldItems.indexOf(cell.name) > -1) {
      return (<img
        src={cell.img}
        style={cell.roomStyle}
        onClick={() => cell.mouseClick(this.props.activeItem)}
        onMouseOver={() => cell.mouseOver()}
        onMouseOut={() => cell.mouseOff()}/>
      )
    }
  }


  render() {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Corridor.png'/>
          {this.renderReactSign(this.state.reactSign)}
          {this.renderStaffRoom(this.state.staffRoom)}
          {this.renderAuthbot(this.state.authbot)}
          {this.renderCorridorCell1(this.state.corridorCell1)}
          {this.renderCorridorCell2(this.state.corridorCell2)}
          {this.renderMo(this.state.mo)}
        )
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    authorised: state.authorised,
    inventory: state.inventory,
    activeItem: state.activeItem,
    worldItems: state.worldItems,
    func: state.func,
    meltdown: state.meltdown
  }
}

export default connect(mapStateToProps)(Corridor)
