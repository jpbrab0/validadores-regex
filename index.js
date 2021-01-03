#!/usr/bin/env node
var argv = require("minimist")(process.argv.slice(2));

const choise = argv.validate;
const numberOfChoice = argv.code;
try{
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
      default:
        console.log("\x1b[32m", "Por favor preencha os campos para validar um cep ou um cpf corretamente.");
        break;
    }
  } else {
    console.log("Por favor coloque as flags corretamente.");
  }
} catch (e){
  console.log("\x1b[32m", "Ocorreu um erro na hora que validar o cep.")
}

