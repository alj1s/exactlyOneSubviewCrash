const detox = require("detox")
const config = require("../package.json").detox

jest.setTimeout(60000)

beforeAll(async () => {
  await detox.init(config)
})

afterAll(async () => {
  await detox.cleanup()
})
