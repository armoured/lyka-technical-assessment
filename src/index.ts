

import { Robot } from "./services/robot";
import { Warehouse } from "./services/warehouse";

const run = async () => {
  // Create a new Robot. It doesn't have a position or warehouse assigned yet.
  const robot = new Robot()

  // Create a new Warehouse. Now we can assign the Robot to this warehouse and it's position
  const warehouse = new Warehouse(robot)

  warehouse.printWarehouse()

  
}

run()


