import { Robot } from "../services/robot"

export type Grid = GridItem[][]

export type GridItem = {
  robot?: Robot
}
