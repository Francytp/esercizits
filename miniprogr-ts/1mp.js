"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Funzione per determinare se una persona è minorenne o maggiorenne
function determinaMaggiorenne(eta) {
    return eta >= 18 ? "maggiorenne" : "minorenne";
}
// Funzione per stampare i numeri da 1 a n
function stampaNumeri(n) {
    console.log("Numeri da 1 a ".concat(n, ":"));
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
// Funzione per verificare se un numero è pari o dispari usando switch/case
function verificaPariDispari(n) {
    switch (n % 2) {
        case 0:
            console.log("Il numero ".concat(n, " \u00E8 pari."));
            break;
        case 1:
            console.log("Il numero ".concat(n, " \u00E8 dispari."));
            break;
    }
}
// Chiede il nome e l'età all'utente
rl.question("Inserisci il tuo nome: ", function (nome) {
    rl.question("Inserisci la tua età: ", function (etaStr) {
        var eta = parseInt(etaStr);
        var stato = determinaMaggiorenne(eta);
        console.log("Ciao ".concat(nome, ", sei ").concat(stato, "."));
        rl.question("Inserisci un numero: ", function (nStr) {
            var n = parseInt(nStr);
            stampaNumeri(n);
            // Se il numero è maggiore di 10, mostra se è pari o dispari
            if (n > 10) {
                verificaPariDispari(n);
            }
            rl.close();
        });
    });
});
