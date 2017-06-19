import ConsoleInteraction from './ConsoleInteraction'

export default class MasterBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchMaster.png'
    this.msg = "You've checked out to 'Master'"
    this.name = 'masterbranch'
    this.branch = 'master'
    this.roomStyle = {
      width: '67px',
      height: '32px',
      position: 'absolute',
      top: '70%',
      left: '76%',
      zIndex: 5
    }
  }
