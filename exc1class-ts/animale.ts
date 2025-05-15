 class Animale {
    nome: string;
    verso: string;

    constructor() {
        this.nome = "Fuffy"; // Nome fisso
        this.verso = "Miagola"; // Verso fisso
    }

    stampaInfo(): void {
        console.log(`Il nome dell'animale è ${this.nome} e il suo verso è: ${this.verso}`);
    }
}

// Creiamo un oggetto della classe Animale
let mioAnimale = new Animale();
mioAnimale.stampaInfo(); // ✅ Output: "Il nome dell'animale è Fuffy e il suo verso è: Miagola"

