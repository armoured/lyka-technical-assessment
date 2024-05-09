import { INVALID_ROBOT_POSITION } from "../../src/errors";
import { CENTER_COORD } from "../../src/constants";
import { Robot } from "../../src/services/robot"
import { Warehouse } from "../../src/services/warehouse"
import { createEmptyGrid } from "../mocks/services/warehouse"

describe("Services: warehouse", () => {

  let robot: Robot
  let warehouse: Warehouse

  beforeEach(() => {
    // Create a fresh instance of robot and warehouse for each run
    robot = new Robot();
    warehouse = new Warehouse(robot);
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("createWarehouseGrid", () => {
    it("Should create a warehouse grid of WAREHOUSE_SIZE with each item an empty object", () => {
      const grid = warehouse.createWarehouseGrid()

      expect(grid).toStrictEqual(createEmptyGrid())
    })
  })

  describe("assignInitialRobotPosition", () => {
    it("Should set the robot position in the centre of the grid as it is empty", () => {

      warehouse.assignInitialRobotPosition(robot)

      expect(grid[CENTER_COORD][CENTER_COORD].robot).toStrictEqual(robot)
      expect(robot.getPosition()).toEqual([CENTER_COORD, CENTER_COORD])
    })

    it("Should throw an error when there is already a robot assigned to that position", () => {
      warehouse.assignInitialRobotPosition(robot)

      const nextRobot = new Robot()
      let caughtError

      try {
        warehouse.assignInitialRobotPosition(nextRobot)
      } catch (error) {
        caughtError = error
      }

      expect(caughtError).toEqual(INVALID_ROBOT_POSITION(CENTER_COORD, CENTER_COORD))
    })
  })
})
