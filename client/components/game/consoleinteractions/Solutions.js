import ConsoleInteraction from './ConsoleInteraction'

export default class SolutionBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchSolution.png'
    this.msg = "You've checked out to 'Solution'"
    this.name = 'solutionbranch'
    this.branch = 'solution'
    this.style = {
      width: '60px',
      height: '25px',
      position: 'absolute',
      top: '57%',
      left: '55%',
      zIndex: 9
    }
  }
}
