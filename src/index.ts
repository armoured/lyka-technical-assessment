

import { Robot } from "./services/robot";
import { Warehouse } from "./services/warehouse";
import { requestCommands, processCommands } from "./utils/commands";

const run = async () => {
  // Create a new Robot. It doesn't have a position or warehouse assigned yet.
  const robot = new Robot()

  // Create a new Warehouse. Now we can assign the Robot to this warehouse and it's position
  const warehouse = new Warehouse(robot)

  warehouse.printWarehouse()

  while (true) {

    try {
      const commands = await requestCommands("Please input commands for the robot: ");

      // TODO future improvement: create nicer commandline prompt at the beginning with additional commands such as
      // Q to quit, H for help
      const processedCommands = processCommands(commands)

      robot.translateCommandsToActions(processedCommands, warehouse)
    } catch (e) {
      // TODO: Future improvement, create a specific error class for user errors. 
      // Due to time constraints, I have deprioritized it.
      console.log(e)
      continue
    }

    warehouse.printWarehouse()

  }
  
}

run()


