class Produto{
    nome: string
    preco: number
    precoDescontado: number

    aplicarDesconto(percentual: number){
        this.precoDescontado = this.preco - percentual/100 * this.preco;
        return this.precoDescontado.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    }

    emitirOrcamento(percent: number){
        return `\n        Produto: ${this.nome} 
        Preço: ${this.preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
        Desconto: ${percent}% 
        Novo preço: ${this.aplicarDesconto(percent)}\n`;
    }
}

let produto1 = new Produto()
produto1.nome = 'Guitarra Tagima Tg500'
produto1.preco = 1099.90

let percentual : number = 10;

console.log(produto1.emitirOrcamento(percentual))