"use strict";
class Equipamento {
    ligado;
    constructor(ligado) {
        this.ligado = ligado;
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    inverter() {
        if (this.ligado = true) {
            this.ligado = false;
        }
        else {
            this.ligado = true;
        }
    }
    estaLigado() {
        return this.ligado;
    }
}
let eq1 = new Equipamento(false);
let eq2 = new Equipamento(true);
eq1.ligar();
eq2.desligar();
eq1.inverter();
console.log(eq1.estaLigado());
console.log(eq2.estaLigado());
