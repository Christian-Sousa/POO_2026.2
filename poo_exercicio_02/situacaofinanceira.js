"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SituacaoFinanceira {
    valorCreditos;
    valorDebitos;
    calcularSaldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let situacao1 = new SituacaoFinanceira();
situacao1.valorCreditos = 300;
situacao1.valorDebitos = 500;
console.log(situacao1.calcularSaldo());
//# sourceMappingURL=situacaofinanceira.js.map