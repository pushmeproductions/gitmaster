import React from 'react'
import {connect} from 'react-redux'


class Function extends React.Component {
  constructor(props) {
    super(props)
    this.empty1 = 'images/function/empty/line1.png'
    this.empty2 = 'images/function/empty/line2.png'
    this.empty3 = 'images/function/empty/line3.png'
    this.empty4 = 'images/function/empty/line4.png'
    this.empty5 = 'images/function/empty/closingBrace.png'
    this.empty6 = 'images/function/empty/line5.png'
  }

componentWillReceiveProps() {
this.dispatch(sendToFunc(this.props))
}

  render() {
    return (
      <div id='function'>
        <div><img src={`${this.empty1}`}></img></div>
        <div><img src={`${this.empty2}`}></img></div>
        <div><img src={`${this.empty3}`}></img></div>
        <div><img src={`${this.empty4}`}></img></div>
        <div><img src={`${this.empty5}`}></img></div>
        <div><img src={`${this.empty6}`}></img></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sendToFunc: state.sendToFunc
  }
}

export default connect(mapStateToProps)(Function)
