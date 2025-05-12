function sommaNumeri(): number {
    let numero1: number = 8;
    let numero2: number = 12;
    let operazione: string = "+";
    let risultato: number;

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

