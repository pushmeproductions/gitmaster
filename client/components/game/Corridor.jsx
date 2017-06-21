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
    this.reactSign = new ReactSign(this.props.dispatch)
    this.staffRoom = new StaffRoom(this.props.dispatch)
    this.mo = new Moustache(this.props.dispatch)
    this.roomItems = [
      new CorridorCell1(this.props.dispatch),
      new CorridorCell2(this.props.dispatch),
    ]

    this.state = {
      authorised: this.props.authorised,
      worldItems: this.props.worldItems,

    }
  }

  componentWillMount(props) {
    this.setState({
      authbot: new Authbot(this.props.dispatch),
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      authorised: nextProps.authorised,
      worldItems: nextProps.worldItems,
      func: nextProps.func
    })
  }


  renderAuthbot(bot) {
    return (<img id='authbot'
      src={bot.img}
      style={this.props.authorised ? bot.idleStyle : bot.activeStyle}
      onClick={() => bot.mouseClick(this.props.activeItem)}
      onMouseOver={bot.mouseOver}
      onMouseLeave={bot.mouseOff}/>
    )
  }

 //  renderMo(mo) {
 //    if (this.state.worldItems.indexOf(mo.name) > -1) {
 //      return (<img id='mo'
 //        src={mo.img}
 //        style={this.props.authorised ?
 //        mo.idleStyle : mo.activeStyle}
 //        onClick={() => mo.mouseClick()}
 //        onMouseOver={mo.mouseOver}
 //        onMouseLeave={mo.mouseOff}/>
 //      )
 //    }
 // }

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
        <img className='background-img' src='images/backgrounds/Corridor.png'/>
          {this.reactSign.render(this.props.authorised)}
          {this.staffRoom.render(this.props.authorised)}
          {this.renderAuthbot(this.state.authbot)}
          {this.renderItems()}
          {this.mo.render(this.state.worldItems, this.props.authorised)}
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
