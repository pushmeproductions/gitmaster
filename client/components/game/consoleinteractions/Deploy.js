import ConsoleInteraction from './ConsoleInteraction'

export default class DeployBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchDeployment.png'
    this.msg = "You've checked out to 'Deployment'"
    this.name = 'deploybranch'
    this.branch = 'deployment'
    this.style = {
      width: '60px',
      height: '35px',
      position: 'absolute',
      top: '56%',
      left: '43%',
      zIndex: 9,
      backgroundColor: 'white'
    }
  }
}
