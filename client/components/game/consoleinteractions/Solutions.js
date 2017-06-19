import ConsoleInteraction from './ConsoleInteraction'

export default class SolutionBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchSolution.png'
    this.msg = "You've checked out to 'Solution'"
    this.name = 'solutionbranch'
    this.branch = 'solution'
    this.roomStyle = {
      width: '67px',
      height: '32px',
      position: 'absolute',
      top: '70%',
      left: '76%',
      zIndex: 5
    }
  }
