import ConsoleInteraction from './ConsoleInteraction'

export default class TestBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchTest.png'
    this.msg = "You've checked out to 'Test'"
    this.name = 'testbranch'
    this.branch = 'test'
    this.style = {
      width: '60px',
      height: '35px',
      position: 'absolute',
      top: '47%',
      left: '55%',
      zIndex: 9,
      backgroundColor: 'white'
    }
  }
}
