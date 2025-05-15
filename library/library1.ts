class Libro {
    titolo: string;
    autore: string;
    disponibile: boolean;

    constructor(titolo: string, autore: string, disponibile: boolean = true) {
        this.titolo = titolo;
        this.autore = autore;
        this.disponibile = disponibile;
    }

    prendiInPrestito = (): void => {
        if (this.disponibile) {
            this.disponibile = false;
            console.log(`Hai preso in prestito "${this.titolo}".`);
        } else {
            console.log(`"${this.titolo}" non è disponibile al momento.`);
        }
    };

    restituisci = (): void => {
        this.disponibile = true;
        console.log(`Hai restituito "${this.titolo}". Ora è disponibile.`);
    };
}

// Creazione di due libri
const libro1 = new Libro("Divina Commedia", "Dante Alighieri");
const libro2 = new Libro("1984", "George Orwell");

// Prestito e restituzione con arrow functions
libro1.prendiInPrestito();
libro2.prendiInPrestito();
console.log(`Disponibilità di "${libro1.titolo}": ${libro1.disponibile}`);
console.log(`Disponibilità di "${libro2.titolo}": ${libro2.disponibile}`);

libro1.restituisci();
console.log(`Disponibilità di "${libro1.titolo}": ${libro1.disponibile}`);
