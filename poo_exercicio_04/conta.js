"use strict";
class Conta {
    cod;
    valor;
    constructor(cod, valor) {
        this.cod = cod;
        this.valor = valor;
    }
    sacar(valorSaque) {
        this.valor = this.valor - valorSaque;
    }
    transferir(contaDestino, valorTransferido) {
        this.valor = this.valor - valorTransferido;
        contaDestino.valor = contaDestino.valor + valorTransferido;
    }
    consultarSaldo() {
        return this.valor;
    }
}
let c1 = new Conta("1", 100);
let c2 = new Conta("2", 100);
let c3;
let c4;
c4 = c1; // c4 é tribuido ao objeto A que nesse momento c1 tambem é atribuido;
c1 = c2; // c1 passa a ser atribuido ao objeto B tal qual c2;
c3 = c1; // c3 atribuido tmbm ao objeto B;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
console.log(c4.consultarSaldo());
