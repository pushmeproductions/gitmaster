import React from 'react'
import {connect} from 'react-redux'

import Skull from './items/Skull'


class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: this.props.items
    }
  }

  //componentWillReceiveProps

  componentDidMount(props) {
    new Skull (this.props.dispatch) // save in state
  }

  renderSkull() {
    return (
      <div>

        if (this.state.items.indexOf('skull') > -1) {
        //render img of this.state.skull.img
      }
    </div>
    )
  }

  render() {
    return (
      <div className='window'>
        <img className='background-img'src='images/backgrounds/Cell.png'/>
        // if skull in items, show Skull
        {this.renderSkull()}
        // if bucket
        // if brick
        // if unlocked
        // if func
      </div>
    )
  }
}

const mapStateToProps = (state) => {
return {state} //items
}

export default connect(mapStateToProps)(Cell)
