import {locChange} from '../../../actions/door'
import {updateLog} from '../../../actions/currentLog'
import {connect} from 'react-redux'

 class BackButton {
  constructor (dispatch) {
    this.dispatch = dispatch
  }

  mouseClick() {

    switch(this.props.location) {
      case 'corridor':
      this.dispatch(locChange('cell'))
      this.dispatch(updateLog(this.exitMsg))
      break;
      case 'staffroom':
      this.dispatch(locChange('corridor'))
      break;
      case 'reactcore':
      this.dispatch(locChange('corridor'))
      break;
      case 'escapepod':
      this.dispatch(locChange('reactcore'))
      break;
      return
    }
  }


  const mapStateToProps = (state) => {
    return {
      location: state.location
    }
  }

}

export default connect(mapStateToProps)(BackButton)
