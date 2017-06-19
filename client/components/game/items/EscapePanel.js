import Item from './Item'
import {connect} from 'react-redux'

import {updateLog} from '../../../actions/currentLog'
import {locChange} from '../../../actions/door'

class EscapePanel extends Item {
  constructor(dispatch) {
  super(props)
  }


mouseClick(this.props.location){
    switch(){
      case "HappyEnding":
      this.dispatch(locChange('happyending')) //happyending has to be added to location in game when drawn.
      break;
      case "BadEnding":
      this.dispatch(locChange('badending')) //has to be added to location in game
      break;
    }
  }
}


  const mapStateToProps = (state) => {
    return {
      location: state.location
    }
  }

export default connect(mapStateToProps)(EscapePanel)
