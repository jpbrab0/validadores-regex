const { ValidateCode } = require("./index")

test("function 'ValidateCode' returns true", () => {
  expect(ValidateCode()).toBe(true)
})
