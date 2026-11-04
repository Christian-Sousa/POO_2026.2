"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circulo {
    raio;
    perimetro;
    area;
    calcularPerimetro() {
        this.perimetro = 2 * this.raio * 3.14;
        return this.perimetro;
    }
    calcularArea() {
        this.area = 3.14 * this.raio ** 2;
        return this.area;
    }
}
let circulo1 = new Circulo();
circulo1.raio = 6;
console.log(circulo1.calcularPerimetro().toPrecision(3));
console.log(circulo1.calcularArea().toPrecision(4));
//# sourceMappingURL=scripts.js.map