"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Numero {
    valor;
    Ehpar() {
        if (this.valor % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    Ehimpar() {
        if (this.valor % 2 != 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
let num1 = new Numero();
num1.valor = 47;
console.log(num1.Ehimpar());
let num2 = new Numero();
num2.valor = 20;
console.log(num2.Ehpar());
//# sourceMappingURL=ehpar.js.map