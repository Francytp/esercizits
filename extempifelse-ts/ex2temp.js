"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Chiede all'utente di inserire la temperatura
var input = readlineSync.question("Inserisci la temperatura: ");
var temperatura = parseFloat(input);
if (isNaN(temperatura)) {
    console.log("❌ Errore: Inserisci un numero valido!");
}
else if (temperatura > 30) {
    console.log("Fa caldo");
}
else if (temperatura < 10) {
    console.log("Fa freddo");
}
else {
    console.log("Temperatura ideale");
}
