import { WAREHOUSE_SIZE } from "../../../src/constants";
import { Grid } from "../../../src/types/warehouse";

export const createEmptyGrid = () => {

  const emptyGrid: Grid = new Array(WAREHOUSE_SIZE)

  for (let i = 0; i < emptyGrid.length; i++) {
    emptyGrid[i] = new Array(WAREHOUSE_SIZE);
    for (let j = 0; j < emptyGrid[i].length; j++) {{
      emptyGrid[i][j] = {
        robot: undefined
      }
    }}
  }
  return emptyGrid
}