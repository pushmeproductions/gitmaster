import {locChange} from '../../../actions/door'
import {updateLog} from '../../../actions/currentLog'
import {connect} from 'react-redux'

 class BackButton {
  constructor (dispatch) {
    this.dispatch = dispatch
  }

  mouseClick() {

    switch(this.props.location) {
      case 'cell':
      this.dispatch(updateLog("There is no past only the present."))
      break;
      case 'corridor':
      this.dispatch(locChange('cell'))
      this.dispatch(updateLog('Why would come back?'))
      break;
      case 'staffroom':
      this.dispatch(locChange('corridor'))
      this.dispatch(updateLog('You are back in the corridor.'))
      break;
      case 'reactcore':
      this.dispatch(locChange('corridor'))
      this.dispatch(updateLog('You are back in the corridor.'))
      break;
      case 'escapepod':
      this.dispatch(locChange('reactcore'))
      this.dispatch(updateLog('You are back in the React-core room. Were you really trying to escape?!'))
      break;

    }
  }


  const mapStateToProps = (state) => {
    return {
      location: state.location
    }
  }

}

export default connect(mapStateToProps)(BackButton)
