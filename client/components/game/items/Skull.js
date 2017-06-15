import Item from './Item'

export default class Skull extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.img = 'images/items/Skull.png'
    this.msg = 'You feel like you are being watched...'
    this.name = 'skull'
    this.roomStyle = {
      imageWidth: '680px',
      imageHeight: '450px',
      xPosition: 0,
      yPosition: 0,
      zPosition: 0
    }
  }
  mouseClick(){
    //dispatch add to Inventory also print message
    // when click, update inventory and items
  }

  mouseOver(){
    //make glow
  }

  mouseOff(){
    //make not glow
  }
}
