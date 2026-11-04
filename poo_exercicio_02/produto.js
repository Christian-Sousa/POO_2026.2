"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    nome;
    preco;
    precoDescontado;
    aplicarDesconto(percentual) {
        this.precoDescontado = this.preco - percentual / 100 * this.preco;
        return this.precoDescontado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
    emitirOrcamento(percent) {
        return `\n        Produto: ${this.nome} 
        Preço: ${this.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        Desconto: ${percent}% 
        Novo preço: ${this.aplicarDesconto(percent)}\n`;
    }
}
let produto1 = new Produto();
produto1.nome = 'Guitarra Tagima Tg500';
produto1.preco = 1099.90;
let percentual = 10;
console.log(produto1.emitirOrcamento(percentual));
//# sourceMappingURL=produto.js.map