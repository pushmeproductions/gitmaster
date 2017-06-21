import CodeGiver from './CodeGiver'


export default class Moustache extends CodeGiver {
  constructor(dispatch) {
    super(dispatch)
    this.name = 'moustache'
    this.code = 5
    this.img = 'images/items/Mo.png'
    this.msg = 'You find some code'
    this.activeStyle = {
      width: '58px',
      height: '14px',
      position: 'absolute',
      top: '36%',
      left: '36%',
      zIndex: 6
    }
    this.idleStyle =  {
      width: '52px',
      height: '14px',
      position: 'absolute',
      top: '46.7%',
      left: '10.7%',
      zIndex: 6
    }
  }

}
