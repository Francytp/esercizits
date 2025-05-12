import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funzione per determinare se una persona è minorenne o maggiorenne
function determinaMaggiorenne(eta: number): string {
    return eta >= 18 ? "maggiorenne" : "minorenne";
}

// Funzione per stampare i numeri da 1 a n
function stampaNumeri(n: number): void {
    console.log(`Numeri da 1 a ${n}:`);
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Funzione per verificare se un numero è pari o dispari usando switch/case
function verificaPariDispari(n: number): void {
    switch (n % 2) {
        case 0:
            console.log(`Il numero ${n} è pari.`);
            break;
        case 1:
            console.log(`Il numero ${n} è dispari.`);
            break;
    }
}

// Chiede il nome e l'età all'utente
rl.question("Inserisci il tuo nome: ", (nome) => {
    rl.question("Inserisci la tua età: ", (etaStr) => {
        const eta = parseInt(etaStr);
        const stato = determinaMaggiorenne(eta);
        
        console.log(`Ciao ${nome}, sei ${stato}.`);

        rl.question("Inserisci un numero: ", (nStr) => {
            const n = parseInt(nStr);

            stampaNumeri(n);

            // Se il numero è maggiore di 10, mostra se è pari o dispari
            if (n > 10) {
                verificaPariDispari(n);
            }

            rl.close();
        });
    });
});

