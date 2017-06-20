import React from 'react'
import {connect} from 'react-redux'


class Function extends React.Component {
  constructor(props) {
    super(props)
    this.img1 = 'images/function/empty/line1.png'
    this.img2 = 'images/function/empty/line2.png'
    this.img3 = 'images/function/empty/line3.png'
    this.img4 = 'images/function/empty/line4.png'
    this.img5 = 'images/function/empty/closingBrace.png'
    this.img6 = 'images/function/empty/line5.png'
  }

  componentWillReceiveProps (nextProps) {
    switch(nextProps.func[nextProps.func.length-1]) {
      case 1:
        this.img1 = 'images/function/full/line1.png';
        break;
      case 2:
        this.img2 = 'images/function/full/line2.png';
        break;
      case 3:
        this.img3 = 'images/function/full/line3.png';
        break;
      case 4:
        this.img4 =
        'images/function/full/line4.png';
        break;
      case 5:
        this.img6 = 'images/function/full/closingBrace.png';
        break;
      }
  }

  render() {
    return (
      <div id='function'>
        <div><img src={this.img1}></img></div>
        <div><img src={this.img2}></img></div>
        <div><img src={this.img3}></img></div>
        <div><img src={this.img4}></img></div>
        <div><img src={this.img5}></img></div>
        <div><img src={this.img6}></img></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    func: state.func

  }
}

export default connect(mapStateToProps)(Function)
