var Libro = /** @class */ (function () {
    function Libro(titolo, autore, disponibile) {
        if (disponibile === void 0) { disponibile = true; }
        var _this = this;
        this.prendiInPrestito = function () {
            if (_this.disponibile) {
                _this.disponibile = false;
                console.log("Hai preso in prestito \"".concat(_this.titolo, "\"."));
            }
            else {
                console.log("\"".concat(_this.titolo, "\" non \u00E8 disponibile al momento."));
            }
        };
        this.restituisci = function () {
            _this.disponibile = true;
            console.log("Hai restituito \"".concat(_this.titolo, "\". Ora \u00E8 disponibile."));
        };
        this.titolo = titolo;
        this.autore = autore;
        this.disponibile = disponibile;
    }
    return Libro;
}());
// Creazione di due libri
var libro1 = new Libro("Divina Commedia", "Dante Alighieri");
var libro2 = new Libro("1984", "George Orwell");
// Prestito e restituzione con arrow functions
libro1.prendiInPrestito();
libro2.prendiInPrestito();
console.log("Disponibilit\u00E0 di \"".concat(libro1.titolo, "\": ").concat(libro1.disponibile));
console.log("Disponibilit\u00E0 di \"".concat(libro2.titolo, "\": ").concat(libro2.disponibile));
libro1.restituisci();
console.log("Disponibilit\u00E0 di \"".concat(libro1.titolo, "\": ").concat(libro1.disponibile));
