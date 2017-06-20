import ConsoleInteraction from './ConsoleInteraction'

export default class DevelopBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchDev.png'
    this.msg = "You've checked out to 'Develop'"
    this.name = 'developbranch'
    this.branch = 'develop'
    this.style = {
      width: '60px',
      height: '35px',
      position: 'absolute',
      top: '47%',
      left: '43%',
      zIndex: 9
    }
  }
}
