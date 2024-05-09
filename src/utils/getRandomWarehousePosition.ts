import { WAREHOUSE_SIZE } from "../constants"

/**
 * Gets a random x and y co-ordinate between 0 and WAREHOUSE_SIZE - 1
 */
export const getRandomWarehousePosition = (): [number, number] => {
  return [
    Math.floor(Math.random() * WAREHOUSE_SIZE),
    Math.floor(Math.random() * WAREHOUSE_SIZE)
  ]
}
