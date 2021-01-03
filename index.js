#!/usr/bin/env node
var argv = require("minimist")(process.argv.slice(2));

const choise = argv.validate;
const numberOfChoice = argv.code;
console.log(choise, numberOfChoice);
if (choise != null || numberOfChoice != null) {
  switch (choise) {
    case "cpf":
      numberOfChoice.match(/^[(0-9)]{3}.[(0-9)]{3}.[(0-9)]{3}-[(0-9)]{2}/)
        ? console.log("\x1b[32m", "O cpf é valido!")
        : console.log("\x1b[32m", "O cpf é invalido.");

      break;

    case "cep":
      numberOfChoice.match(/^([0-9]){2}([0-9]){3}.-([0-9]){2}[^A-Z]$/)
        ? console.log("\x1b[32m", "O cep é valido!")
        : console.log("\x1b[32m", "O cep é invalido.");
      break;
  }
}
