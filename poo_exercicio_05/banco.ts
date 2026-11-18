'class Cliente {
    private _id : number;
    private _nome : string;
    private _cpf : string;
    private _dataNasc : Date;
    private _contas : Conta[];

    constructor(id:number, nome:string, cpf:string, data:Date, contas:Conta[]){
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNasc = data; 
        this._contas = contas;
    }

    lerId(): number {
        return this.id;
    }

    get id() : number {
        return this._id;
    }

    get nome() : string {
        return this._nome;
    }

    get cpf() : string {
        return this._cpf;
    }

    get dataNasc() : Date {
        return this._dataNasc;
    }

    get contas() : Conta[] {
        return this._contas
    }

}

class Conta {
    private _id: number;
    private _numero: string;
    private _saldo: number;
    private _cliente : number;
    private _dataAbertura : Date;

    constructor(id: number, numero: string, saldo: number, cliente: number, dataAbertura: Date) {
        this._id = id;
        this._numero = numero;
        this._saldo = saldo;
        this._cliente = cliente;
        this._dataAbertura = dataAbertura;
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        /* this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;*/
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    consultarSaldo(): number {
        return this._saldo;
    }

    lerId(): number {
        return this.id;
    }

    atribuirSaldo(atribuicao : number){
        this._saldo = atribuicao
    }

    get id() : number{
        return this._id;
    }

    get numero() : string{
        return this._numero;
    }

    get saldo() : number{
        return this._saldo;
    }

    get cliente() : number{
        return this._cliente;
    }

    get dataDeAbertura() : Date{
        return this._dataAbertura;  
    }
}

let numeros: number[] = [3, 2, 1];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for (let numero of numeros.reverse()) {
    console.log(numero);
}

let contas: Conta[] = [];
let conta1: Conta = new Conta(1, '111-1', 100);
let conta2: Conta = new Conta(2, '222-2', 200);

contas[0] = conta1;
contas.push(conta2);
/*
for (let conta of contas) {
    console.log(conta);
}*/

class Banco {
    contas: Conta[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    inserirConta(conta: Conta): void {
        this.contas.push(conta);
    }

    inserirCliente(cliente: Cliente) : void{
        this.clientes.push(cliente);
    }

    consultarConta(id: number): Conta | null {

        for (let conta of this.contas) {
            if (conta.lerId() == id) {
                return conta;
            }
        }
        return null;
    }

    consultarContaPorNumero(numero: string): Conta | null {

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                return conta;
            }
        }
        return null;
    }

    consultarCliente(id: number): Cliente | null {

        for (let cliente of this.clientes) {
            if (cliente.lerId() == id) {
                return cliente;
            }
        }
        return null;
    }

    consultarClientePorCpf(cpf: string): Cliente | null {

        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                return cliente;
            }
        }
        return null;
    }

    consultarIndiceConta(id: number): number {

        for (let i = 0; i < this.contas.length; i++) {
            let conta = this.contas[i];
            if (conta && conta.lerId() == id) {
                return i;
            }
        }

        return -1;
    }

    excluir(id: number): void {
        let indice = this.consultarIndiceConta(id);

        if (indice != -1) {
            for (let i = indice; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1]!;
            }

            this.contas.pop();
        }
        
    }

    depositar(id: number, valor: number): void {
        let contaProcurada: Conta | null = this.consultarConta(id);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    sacar(id: number, valor: number): void {
        let contraProcurada: Conta | null = this.consultarConta(id);
        
        if (contraProcurada) {
            contraProcurada.sacar(valor);
        }
    }

    transferir(idOrigem: number, idDestino: number, valor: number): void {
        let contaOrigem: Conta | null = this.consultarConta(idOrigem);
        let contaDestino: Conta | null = this.consultarConta(idDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    AssociarContaCliente(numConta: string, cpfCliente: string) : void{}
}
let banco: Banco = new Banco();
banco.inserirConta(conta1);
banco.inserirConta(conta2);
banco.inserirConta(new Conta(3, '333-3', 300));

console.log(banco.contas);

banco.transferir(3,1, 300);
console.log(banco.consultarConta(1));
console.log(banco.consultarConta(3));
banco.contas = [];
conta1.atribuirSaldo(-10000);'