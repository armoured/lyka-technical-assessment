import { WAREHOUSE_SIZE } from "../constants"
import { OUT_OF_BOUNDS } from "../errors"

// if the position is out of the array throw an error
export const checkOutOfBounds = (x, y) => {
  if (x < 0 || x > WAREHOUSE_SIZE - 1 || y < 0 || y > WAREHOUSE_SIZE - 1) {
    throw(OUT_OF_BOUNDS)
  }
}
