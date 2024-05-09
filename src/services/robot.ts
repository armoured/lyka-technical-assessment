export class Robot {

  protected position?: [number, number]

  setPosition = (position: [number, number]) => {
    this.position = position
  }

  getPosition = () => {
    return this.position
  }

}
