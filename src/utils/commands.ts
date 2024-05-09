import readline from "readline"
import { INVALID_COMMAND } from "../errors";
import { Commands } from "../types/commands";

export const requestCommands = async (query: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }))
}

export const processCommands = (commands: string) => {
  if (typeof commands !== "string") {
    throw(INVALID_COMMAND)
  }

  const trimmedCommands = commands.trim()

  const splitCommands = trimmedCommands.split(" ")
  
  splitCommands.forEach(command => {
    if (!Object.values(Commands)?.includes(command as Commands)) {
      throw(INVALID_COMMAND)
    }
  })

  return splitCommands
}