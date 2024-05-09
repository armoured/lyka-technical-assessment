export const readlineMock = {
  createInterface: jest.fn().mockReturnValue({
      question: jest.fn().mockImplementationOnce((_, cb) => {cb('test')}),
      close: jest.fn().mockImplementationOnce(() => undefined)
  })
}
