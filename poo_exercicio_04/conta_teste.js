"use strict";
class Conta {
    cod;
    valor;
    constructor(cod, valor) {
        this.cod = cod;
        this.valor = valor;
    }
    sacar(valorSaque) {
        if (this.valor >= valorSaque) {
            this.valor = this.valor - valorSaque;
            return true;
        }
        return false;
    }
    transferir(contaDestino, valorTransferido) {
        this.valor = this.valor - valorTransferido;
        contaDestino.valor = contaDestino.valor + valorTransferido;
    }
    consultarSaldo() {
        return this.valor;
    }
}
let c1 = new Conta("1", 1);
let c2 = new Conta("2", 100);
c1.sacar(10);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
