const ValidateCode = require("./index")

test("function 'ValidateCode' returns true", () => {
  expect(ValidateCode("cep", "123456-789")).toBe(true)
})
