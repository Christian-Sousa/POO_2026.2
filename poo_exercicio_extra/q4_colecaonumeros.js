"use strict";
class ColecaoNumerica {
    numeros;
    constructor() {
        this.numeros = [];
    }
    adicionar(numero) {
        this.numeros.push(numero);
    }
    limpar() {
        this.numeros = [];
    }
    quantidade() {
        return this.numeros.length;
    }
    somar() {
        let soma = 0;
        for (let i = 0; i < this.quantidade(); i++) {
            let numero = this.numeros[i];
            if (typeof numero !== 'number') {
                throw new Error('Todos os elementos da coleção devem ser números.');
            }
            soma += numero;
        }
        return soma;
    }
    calcularMedia() {
        return this.somar() / this.quantidade();
    }
    maior() {
        if (this.quantidade() === 0) {
            return undefined;
        }
        else {
            return Math.max(...this.numeros);
        }
    }
    menor() {
        if (this.quantidade() === 0) {
            return undefined;
        }
        else {
            return Math.min(...this.numeros);
        }
    }
}
let colecao = new ColecaoNumerica();
colecao.adicionar(10);
colecao.adicionar(20);
colecao.adicionar(30);
console.log(colecao.quantidade());
console.log(colecao.somar());
console.log(colecao.calcularMedia());
console.log(colecao.maior());
console.log(colecao.menor());
colecao.limpar();
colecao.adicionar(-8);
colecao.adicionar(-3);
colecao.adicionar(-12);
console.log(colecao.quantidade());
console.log(colecao.somar());
console.log(colecao.calcularMedia());
console.log(colecao.maior());
console.log(colecao.menor());
colecao.limpar();
console.log(colecao.quantidade());
console.log(colecao.somar());
console.log(colecao.calcularMedia());
console.log(colecao.maior());
console.log(colecao.menor());
