#!/usr/bin/env node
var argv = require("minimist")(process.argv.slice(2));

function ValidateCode(choiceTest, codeTest) {
  const choise = argv.validate;
  const numberOfChoice = argv.code;
  try {
    if (
      choise != null ||
      (numberOfChoice != null && choiceTest == null) ||
      codeTest == null
    ) {
      switch (choise) {
        case "cpf":
          numberOfChoice.match(/^[(0-9)]{3}.[(0-9)]{3}.[(0-9)]{3}-[(0-9)]{2}/)
            ? console.log("\x1b[32m", "O cpf é valido!")
            : console.log("\x1b[32m", "O cpf é invalido.");
          return true;

        case "cep":
          numberOfChoice.match(/^([0-9]){2}([0-9]){3}.-([0-9]){2}[^A-Z]$/)
            ? console.log("\x1b[32m", "O cep é valido!")
            : console.log("\x1b[32m", "O cep é invalido.");
          return true;
        default:
          console.log(
            "\x1b[32m",
            "Por favor preencha as flags corretamente,  para validar um cep ou um cpf."
          );
          return false;
      }
    } else if (
      choiceTest != null ||
      (codeTest != null && choise == null) ||
      numberOfChoice == null
    ) {
      switch (choiceTest) {
        case "cpf":
          codeTest.match(/^[(0-9)]{3}.[(0-9)]{3}.[(0-9)]{3}-[(0-9)]{2}/)
            ? console.log("\x1b[32m", "O cpf é valido!")
            : console.log("\x1b[32m", "O cpf é invalido.");
          return true;

        case "cep":
          codeTest.match(/^([0-9]){2}([0-9]){3}.-([0-9]){2}[^A-Z]$/)
            ? console.log("\x1b[32m", "O cep é valido!")
            : console.log("\x1b[32m", "O cep é invalido.");
          return true;
        default:
          console.log(
            "\x1b[32m",
            "Por favor preencha as flags corretamente,  para validar um cep ou um cpf."
          );
          return false;
      }
    } else {
      console.log("Por favor coloque as flags corretamente.");
      return false;
    }
  } catch (e) {
    console.log("\x1b[32m", "Ocorreu um erro na hora que validar o cep.");
    return false;
  }
}

ValidateCode();

module.exports = ValidateCode;
