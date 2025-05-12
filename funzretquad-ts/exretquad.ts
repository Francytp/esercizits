function calcolaAreaRettangolo(base: number, altezza: number): number {
    return base * altezza;
}

function èQuadrato(base: number, altezza: number): boolean {
    return base === altezza;
}

// Esempi di utilizzo
console.log(`Area: ${calcolaAreaRettangolo(5, 10)}`); // Output: Area: 50
console.log(`È quadrato? ${èQuadrato(5, 5)}`); // Output: È quadrato? true
console.log(`È quadrato? ${èQuadrato(5, 10)}`); // Output: È quadrato? false
