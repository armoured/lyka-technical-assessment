import { INVALID_ROBOT_POSITION } from "../errors";
import { WAREHOUSE_SIZE } from "../constants";
import { Grid } from "../types/warehouse";
import { getRandomWarehousePosition } from "../utils/getRandomWarehousePosition";
import { Robot } from "./robot";

export class Warehouse {

  protected grid: Grid

  constructor(robot: Robot) {
    this.grid = this.createWarehouseGrid()

    this.assignInitialRobotPosition(robot)
  }

  assignInitialRobotPosition = (robot: Robot) => {
    const [x, y] = getRandomWarehousePosition()

    // For extensibility purposes, we assume that a tile could have another robot in the future
    // so we don't want to overwrite it accidently. As we don't need to handle the else case
    // yet, we can simply throw an error so that if we do extend it one day, the dev will see this
    // error when they run it and can account for this scenario.
    if (!this.grid[x][y].robot) {
      this.grid[x][y].robot = robot
      robot.setPosition([x,y])
    } else {
      throw(INVALID_ROBOT_POSITION(x, y))
    }

  }

  printWarehouse = () => {
    this.grid.forEach(row => { 
      row.forEach((gridItem, index) => {
        const character = gridItem.robot ? "o" : "-"
        const delimiter = index === WAREHOUSE_SIZE - 1 ? "\n" : ""
        process.stdout.write(character + delimiter)
      })
    })
  }

  createWarehouseGrid = (): Grid => {
    const grid = new Array(WAREHOUSE_SIZE)

    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(WAREHOUSE_SIZE)
      for (let j = 0; j < grid.length; j++) {
        grid[i][j] = {
          robot: undefined
        }
      }
    }
  
    return grid
  }

  getGrid = () => {
    return this.grid
  }

  setGrid = (grid: Grid) => {
    this.grid = grid
  }
}
