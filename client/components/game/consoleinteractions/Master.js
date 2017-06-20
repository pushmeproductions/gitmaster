import ConsoleInteraction from './ConsoleInteraction'

export default class MasterBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchMaster.png'
    this.msg = "You've checked out to 'Master'"
    this.name = 'masterbranch'
    this.branch = 'master'
    this.style = {
      width: '60px',
      height: '35px',
      position: 'absolute',
      top: '65%',
      left: '49%',
      zIndex: 9    }
  }
}
