import readline from "readline";
import { readlineMock } from "../mocks/utils/readline";
import { processCommands, requestCommands } from "../../src/utils/commands";
import { INVALID_COMMAND } from "../../src/errors";

jest.mock("readline");

describe("Utils: commands", () => {

  describe("requestCommands", () => {

    beforeEach(() => {
      (readline.createInterface as jest.Mock).mockImplementation(readlineMock.createInterface)
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it("Should return the value test when called", async () => {
      
      const answer = await requestCommands("")

      expect(answer).toEqual("test")
    })
  })

  describe("processCommands", () => {
    const positiveCases = [
      [{input: "N E S W", expected: ['N', 'E', 'S', 'W']}],
      [{input: "N E S W ", expected: ['N', 'E', 'S', 'W']}],
      [{input: "  N N N N N N N N    ", expected: ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N']}],
      [{input: "N", expected: ['N']}],
      [{input: "E", expected: ['E']}],
      [{input: "S", expected: ['S']}],
      [{input: "W", expected: ['W']}],
    ]

    it.each(positiveCases)("Should return the commands processed", ({ input, expected }) => {

      try {
        const processedCommands = processCommands(input)

        expect(processedCommands).toEqual(expected)
      } catch (error) {
        expect(error).toEqual(expected)
      }
    })

    const negativeCases = [
      [{input: "N  E"}],
      [{input: "n e s w"}],
      [{input: "abcdefgh"}],
      [{input: 1 as any}],
      [{input: [] as any}],
      [{input: {} as any}]
    ]

    it.each(negativeCases)("Should throw an error for invalid commands", ({ input }) => {

      let caughtError
      try {
        processCommands(input)
      } catch (error) {
        caughtError = error
      }
      expect(caughtError).toEqual(INVALID_COMMAND)

    })
  })


})
