function calcolaAreaRettangolo(base, altezza) {
    return base * altezza;
}
function èQuadrato(base, altezza) {
    return base === altezza;
}
// Esempi di utilizzo
console.log("Area: ".concat(calcolaAreaRettangolo(5, 10))); // Output: Area: 50
console.log("\u00C8 quadrato? ".concat(èQuadrato(5, 5))); // Output: È quadrato? true
console.log("\u00C8 quadrato? ".concat(èQuadrato(5, 10))); // Output: È quadrato? false
