"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    Apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.\n`;
    }
}
let pessoa1 = new Pessoa();
pessoa1.nome = 'Chris';
pessoa1.idade = 19;
console.log(pessoa1.Apresentar());
const pessoa2 = new Pessoa();
pessoa2.nome = 'Glória';
pessoa2.idade = 18;
console.log(pessoa2.Apresentar().toUpperCase());
//# sourceMappingURL=Pessoa.js.map