import ConsoleInteraction from './ConsoleInteraction'

export default class DevelopBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchDev.png'
    this.msg = "You've checked out to 'Develop'"
    this.name = 'developbranch'
    this.branch = 'develop'
    this.roomStyle = {
      width: '67px',
      height: '32px',
      position: 'absolute',
      top: '70%',
      left: '76%',
      zIndex: 5
    }
  }
