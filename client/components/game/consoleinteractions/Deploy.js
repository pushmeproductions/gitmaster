import ConsoleInteraction from './ConsoleInteraction'

export default class DeployBranch extends ConsoleInteraction {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/Console/BranchDeployment.png'
    this.msg = "You've checked out to 'Deployment'"
    this.name = 'deploybranch'
    this.branch = 'deployment'
    this.roomStyle = {
      width: '67px',
      height: '32px',
      position: 'absolute',
      top: '70%',
      left: '76%',
      zIndex: 5
    }
  }
