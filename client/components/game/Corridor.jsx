import React from 'react'
import {connect} from 'react-redux'

import ReactSign from './Door/ReactSign'
import StaffRoom from './Door/StaffRoom'
import Authbot from './items/Authbot'
import CorridorCell1 from './items/CorridorCell1'
import CorridorCell2 from './items/CorridorCell2'


class Corridor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authorised: this.props.authorised

    }
  }

  componentWillMount(props) {
    this.setState({
      reactSign: new ReactSign(this.props.dispatch),
      staffRoom: new StaffRoom(this.props.dispatch),
      authbot: new Authbot(this.props.dispatch),
      corridorCell1: new CorridorCell1(this.props.dispatch),
      corridorCell2: new CorridorCell2(this.props.dispatch)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      authorised: nextProps.authorised
    })
  }

  renderReactSign(sign) {
    return (<img
      src={sign.img}
      style={sign.roomStyle}
      onClick={() => sign.mouseClick('click')}
      onMouseOver={() => sign.mouseOver()}
      onMouseOut={() => sign.mouseOff()}/>
    )
  }

  renderStaffRoom(sign) {
    return (<img
      src={sign.img}
      style={sign.roomStyle}
      onClick={() => sign.mouseClick('click')}
      onMouseOver={() => sign.mouseOver()}
      onMouseOut={() => sign.mouseOff()}/>
    )
  }


  renderAuthbot(bot) {
    return (<img
      src={bot.img}
      style={bot.activeStyle}
      onClick={() =>
      bot.mouseClick()}
      onMouseOver={() => bot.mouseOver()}
      onMouseOut={() => bot.mouseOff()}/>
    )
    console.log('authbot is here');
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
    return (<img
      src={cell.img}
      style={cell.roomStyle}
      onClick={() => cell.mouseClick('click')}
      onMouseOver={() => cell.mouseOver()}
      onMouseOut={() => cell.mouseOff()}/>
    )
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
          {console.log(this.props)}
        )
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    authorised: state.authorised
  }
}

export default connect(mapStateToProps)(Corridor)

// authorised: state.authorised
