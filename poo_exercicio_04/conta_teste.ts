class Conta {
    cod: string;
    valor: number;
    constructor(cod : string, valor : number){
        this.cod = cod;
        this.valor = valor;
    }

    sacar(valorSaque : number){
        if (this.valor >= valorSaque){
            this.valor = this.valor - valorSaque;
            return true;
        }
        return false;
    }

    transferir(contaDestino : Conta, valorTransferido: number){
        this.valor = this.valor - valorTransferido;
        contaDestino.valor = contaDestino.valor + valorTransferido;
    }

    consultarSaldo(){
        return this.valor
    }

} 

let c1: Conta = new Conta("1", 1); 
let c2: Conta = new Conta("2",100); 
c1.sacar(10); 
console.log(c1.consultarSaldo()); 
console.log(c2.consultarSaldo()); 
