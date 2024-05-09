import { OUT_OF_BOUNDS } from "../../src/errors";
import { CENTER_COORD } from "../../src/constants";
import { Robot } from "../../src/services/robot";
import { Warehouse } from "../../src/services/warehouse";


describe("Services: robot", () => {

  describe("translateCommandsToActions", () => {

    // Because the Coord 5,5 is not the exact center in a 10,10 grid, the boundary in the north and west
    // is 5 indexes away and the east and south is 5 indexes away.

    // Note: this test is brittle if WAREHOUSE_SIZE changes. Given more time, I can make it not brittle.
    const positiveCases = [
      // back to starting point
      [{input: ['N', 'E', 'S', 'W'], expected: [CENTER_COORD, CENTER_COORD]}],

      // on the north edge
      [{input: ['N', 'N', 'N', 'N', 'N'], expected: [CENTER_COORD - 5, CENTER_COORD]}],

      // on the east edge
      [{input: ['E', 'E', 'E', 'E'], expected: [CENTER_COORD, CENTER_COORD + 4]}],

      // on the south edge
      [{input: ['S', 'S', 'S', 'S'], expected: [CENTER_COORD + 4, CENTER_COORD]}],

      // on the west edge
      [{input: ['W', 'W', 'W', 'W', 'W'], expected: [CENTER_COORD, CENTER_COORD - 5]}]

    ]

    it.each(positiveCases)("Should apply the commands given to the robot and update the warehouse grid", ({input, expected}) => {
      const robot = new Robot();
      const warehouse = new Warehouse(robot)

      const [startX, startY] = robot.getPosition()

      robot.translateCommandsToActions(input, warehouse)

      const [finalX, finalY] = expected

      const grid = warehouse.getGrid()

      expect(grid[finalX][finalY].robot).toStrictEqual(robot)

      if (startX !== finalX && startY !== finalY) {
        expect(grid[startX][startY].robot).toEqual(undefined)
      }

    })

    const outOfBoundsCases = [
      // out of the north edge
      [{input: ['N', 'N', 'N', 'N', 'N', 'N']}],

      // out of the east edge
      [{input: ['E', 'E', 'E', 'E', 'E']}],

      // out of the south edge
      [{input: ['S', 'S', 'S', 'S', 'S']}],

      // out of the west edge
      [{input: ['W', 'W', 'W', 'W', 'W', 'W']}]

    ]

    it.each(outOfBoundsCases)("Should throw an error if the robot will be sent out of bounds", ({input}) => {
      const robot = new Robot();
      const warehouse = new Warehouse(robot)

      let caughtError
      try {
      robot.translateCommandsToActions(input, warehouse)
      } catch (error) {
        caughtError = error
      }
      expect(caughtError).toEqual(OUT_OF_BOUNDS)

    })
  })
})