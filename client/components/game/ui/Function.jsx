import React from 'react'
import {connect} from 'react-redux'

class Function extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  line1(){
    return '> function escape(){'
  }
  line2(){
    return '>   var core.status = "meltdown"'
  }
  line3(){
    return '>   if(core.status == "meltdown") {'
  }
  line4(){
    return '>     return "escapeKey"'
  }
  line5(){
    return '>   }'
  }
  line6(){
    return '> }'
  }


  render() {
    return (
      <div id='function'>
        <div>{this.line1()}</div>
        <div>{this.line2()}</div>
        <div>{this.line3()}</div>
        <div>{this.line4()}</div>
        <div>{this.line5()}</div>
        <div>{this.line6()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state}
}

export default connect(mapStateToProps)(Function)
