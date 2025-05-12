import * as readlineSync from "readline-sync";

// Chiede all'utente di inserire la temperatura
const input: string = readlineSync.question("Inserisci la temperatura: ");
const temperatura: number = parseFloat(input);

if (isNaN(temperatura)) {
    console.log("❌ Errore: Inserisci un numero valido!");
} else if (temperatura > 30) {
    console.log("Fa caldo");
} else if (temperatura < 10) {
    console.log("Fa freddo");
} else {
    console.log("Temperatura ideale");
}

