function sommaNumeri() {
    var numero1 = 8;
    var numero2 = 12;
    var operazione = "+";
    var risultato;
    switch (operazione) {
        case "+":
            risultato = numero1 + numero2;
            break;
        default:
            risultato = 0; // Valore di default nel caso di operazione non valida
    }
    return risultato;
}
console.log(sommaNumeri()); // Output: 20
