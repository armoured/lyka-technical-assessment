import { CENTER_COORD } from "../../src/constants";
import { getRandomWarehousePosition } from "../../src/utils/getRandomWarehousePosition"

describe("Utils: getRandomWarehousePosition", () => {

  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  })

  it("should return the warehouse position that we have mocked", () => {
    const position = getRandomWarehousePosition()

    expect(position).toEqual([CENTER_COORD, CENTER_COORD])
  })
})
