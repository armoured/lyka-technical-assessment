import { Commands } from "../types/commands"
import { Grid } from "../types/warehouse"
import { Warehouse } from "./warehouse"
import { checkOutOfBounds } from "../utils/checkBounds"

export class Robot {

  protected position?: [number, number]

  setPosition = (position: [number, number]) => {
    this.position = position
  }

  getPosition = () => {
    return this.position
  }

  translateCommandsToActions = (commands: string[], warehouse: Warehouse) => {

    // We make a copy of the robot and warehouse. If we get an invalid set of commands
    // the grid will not apply any of the moves. 
    let grid: Grid = JSON.parse(JSON.stringify(warehouse.getGrid()))

    let [x, y] = this.getPosition()

    commands.forEach(command => {
      switch(command) {
        case Commands.north:
          grid[x][y].robot = undefined
          x -= 1
          checkOutOfBounds(x, y)
          grid[x][y].robot = this
          break
        case Commands.east:
          grid[x][y].robot = undefined
          y += 1
          checkOutOfBounds(x, y)
          grid[x][y].robot = this
          break
        case Commands.south:
          grid[x][y].robot = undefined
          x += 1
          checkOutOfBounds(x, y)
          grid[x][y].robot = this
          break
        case Commands.west:
          grid[x][y].robot = undefined
          y -= 1
          checkOutOfBounds(x, y)
          grid[x][y].robot = this
          break
        default:
          throw("Unknown Command")
      }      

    })


    // All commands are fine, apply the final changes
    this.setPosition([x,y])
    warehouse.setGrid(grid)
  }

}
