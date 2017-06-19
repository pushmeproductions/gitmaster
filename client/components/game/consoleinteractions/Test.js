import ConsoleInteraction from './ConsoleInteraction'

export default class TestBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchTest.png'
    this.msg = "You've checked out to 'Test'"
    this.name = 'testbranch'
    this.branch = 'test'
    this.roomStyle = {
      width: '67px',
      height: '32px',
      position: 'absolute',
      top: '70%',
      left: '76%',
      zIndex: 5
    }
  }
