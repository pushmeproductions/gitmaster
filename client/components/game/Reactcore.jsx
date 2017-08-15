import React from 'react'
import {connect} from 'react-redux'

import Button from './items/Button'
import ConsoleScreen from './items/ConsoleScreen'
import ReactEscapeDoor from './Door/ReactEscapeDoor'
import DeployBranch from './consoleinteractions/Deploy'
import DevelopBranch from './consoleinteractions/Dev'
import MasterBranch from './consoleinteractions/Master'
import SolutionBranch from './consoleinteractions/Solutions'
import TestBranch from './consoleinteractions/Test'
import CloseConsoleButton from './items/CloseConsoleButton'
import ConsolePopUp from './items/ConsolePopUp'



class ReactCore extends React.Component {
  constructor(props) {
    super(props)
    this.consolescreen = new ConsoleScreen(this.props.dispatch)
    this.consolepopup = new ConsolePopUp(this.props.dispatch)
    this.button = new Button(this.props.dispatch)
    this.reactescapedoor = new ReactEscapeDoor(this.props.dispatch)
    this.closebutton = new CloseConsoleButton(this.props.dispatch)
    this.branches = [
      new DeployBranch(this.props.dispatch),
      new DevelopBranch(this.props.dispatch),
      new MasterBranch(this.props.dispatch),
      new SolutionBranch(this.props.dispatch),
      new TestBranch(this.props.dispatch)
    ]

    this.state = {
      func: this.props.func,
      consolePopUp: this.props.consolePopUp,
      loggedIn: this.props.loggedIn,
      branch: this.props.branch,
      doorJammed: this.props.doorJammed,
      meltdown: this.props.meltdown
    }
  }

  componentWillMount(props) {
    this.setState({
    })
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      switchBranch: nextprops.switchBranch,
      consolePopUp: nextprops.consolePopUp,
      loggedIn: nextprops.loggedIn,
      branch: nextprops.branch,
      doorJammed: nextprops.doorJammed,
      meltdown: nextprops.meltdown
    })
  }


  renderBranches(branches) {
    return(
      branches.map((branch, i) => {
        return(
          <img id={`branch-${branch.name}`}
            key={i}
            src={branch.img} style={branch.style}
            onClick={() =>branch.mouseClick()} />
        )
      })
    )
  }

  render () {
    return (
      <div className='window'>
        <img className='background-img' src='images/backgrounds/Reactcore.png'/>
        {this.consolescreen.render()}
        {this.props.consolePopUp && this.consolepopup.render(this.props.activeItem, this.state.loggedIn)}
        {this.button.render(this.state.branch)}
        {this.props.consolePopUp && this.closebutton.render()}
        {this.reactescapedoor.render( this.state.doorJammed, this.props.meltdown, this.props.activeItem, this.props.tries)}
        {this.props.consolePopUp && this.props.loggedIn && this.renderBranches(this.branches)}
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
    func: state.func,
    loggedIn: state.loggedIn,
    consolePopUp: state.consolePopUp,
    branch: state.branch,
    meltdown: state.meltdown,
    doorJammed: state.doorJammed,
    tries: state.tries,
    goodEnding: state.goodEnding
  }
}

export default connect(mapStateToProps)(ReactCore)
