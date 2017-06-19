import React from 'react'
import {connect} from 'react-redux'

import Button from './items/Button'
import ConsoleScreen from './items/ConsoleScreen'
import ReactEscapeDoor from './Door/ReactEscapeDoor'

class ReactCore extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      func:this.props.func
    }
  }

  componentWillMount(props) {
    this.setState({
      button: new Button(this.props.dispatch),
      consolescreen: new ConsoleScreen(this.props.dispatch),
      reactescapedoor: new ReactEscapeDoor(this.props.dispatch)

    })
  }

  // componentWillReceiveProps() {
  //
  // }

  renderButton(button) {
    return (<img
      src={button.img} style={button.roomStyle}
      onClick={() => button.mouseClick('click')}
      onMouseOver={() => button.mouseOver()}
      onMouseOut={() => button.mouseOff()}/>
    )
  }

  renderConsoleScreen(screen) {
    return (<img
      src={screen.img} style={screen.roomStyle}
      onClick={() => screen.mouseClick('click')}
      onMouseOver={() => screen.mouseOver()}
      onMouseOut={() => screen.mouseOff()}/>
    )
  }


  renderReactEscapeDoor(redoor) {
    return (<img
      src={redoor.img} style={redoor.roomStyle}
      onClick={() => redoor.mouseClick('click')}
      onMouseOver={() => redoor.mouseOver()}
      onMouseOut={() => redoor.mouseOff()}/>
    )
  }



  render () {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Reactcore.png'/>
        {this.renderButton(this.state.button)}
        {this.renderConsoleScreen(this.state.consolescreen)}
        {this.renderReactEscapeDoor(this.state.reactescapedoor)}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    location: state.location,
    inventory: state.inventory,
    activeItem: state.activeItem,
    worldItems: state.worldItems,
    func: state.func
  }
}

export default connect(mapStateToProps)(ReactCore)
