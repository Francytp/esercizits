var Animale = /** @class */ (function () {
    function Animale() {
        this.nome = "Fuffy"; // Nome fisso
        this.verso = "Miagola"; // Verso fisso
    }
    Animale.prototype.stampaInfo = function () {
        console.log("Il nome dell'animale \u00E8 ".concat(this.nome, " e il suo verso \u00E8: ").concat(this.verso));
    };
    return Animale;
}());
// Creiamo un oggetto della classe Animale
var mioAnimale = new Animale();
mioAnimale.stampaInfo(); // ✅ Output: "Il nome dell'animale è Fuffy e il suo verso è: Miagola"
