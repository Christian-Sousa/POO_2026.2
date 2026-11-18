class Cliente {
    private _id: number;
    private _nome: string;
    private _cpf: string;
    private _dataNasc: Date;
    private _contas: Conta[];

    constructor(id: number, nome: string, cpf: string, data: Date) {
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNasc = data;
        this._contas = []; 
    }

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    get dataNasc(): Date {
        return this._dataNasc;
    }

    get contas(): Conta[] {
        return this._contas;
    }

    adicionarConta(conta: Conta): void {
        const existe = this._contas.some(c => c.id === conta.id);
        if (!existe) {
            this._contas.push(conta);
        }
    }
}

class Conta {
    private _id: number;
    private _numero: string;
    private _saldo: number;
    private _cliente: Cliente | null;
    private _dataAbertura: Date;

    constructor(id: number, numero: string, saldo: number, dataAbertura: Date) {
        this._id = id;
        this._numero = numero;
        this._saldo = saldo;
        this._cliente = null;
        this._dataAbertura = dataAbertura;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this._saldo += valor;
        }
    }

    sacar(valor: number): void {
        if (valor > 0 && this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    transferir(contaDestino: Conta, valor: number): void {
        if (this._saldo >= valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
    }

    consultarSaldo(): number {
        return this._saldo;
    }

    get id(): number {
        return this._id;
    }

    get numero(): string {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    get cliente(): Cliente | null {
        return this._cliente;
    }

    set cliente(cliente: Cliente | null) {
        this._cliente = cliente;
    }

    get dataDeAbertura(): Date {
        return this._dataAbertura;
    }
}

class Banco {
    private _contas: Conta[];
    private _clientes: Cliente[];

    constructor() {
        this._contas = [];
        this._clientes = [];
    }

    get contas(): Conta[] {
        return this._contas;
    }

    get clientes(): Cliente[] {
        return this._clientes;
    }

    inserirConta(conta: Conta): void {
        const contaExistente = this._contas.some(c => c.id === conta.id || c.numero === conta.numero);
        if (!contaExistente) {
            this._contas.push(conta);
            console.log(`Conta ${conta.numero} inserida com sucesso.`);
        } else {
            console.log(`Erro: Já existe uma conta com o mesmo ID ou número.`);
        }
    }

    inserirCliente(cliente: Cliente): void {
        const clienteExistente = this._clientes.some(c => c.id === cliente.id || c.cpf === cliente.cpf);
        if (!clienteExistente) {
            this._clientes.push(cliente);
            console.log(`Cliente ${cliente.nome} inserido com sucesso.`);
        } else {
            console.log(`Erro: Já existe um cliente com o mesmo ID ou CPF.`);
        }
    }

    consultarConta(id: number): Conta | null {
        for (let conta of this._contas) {
            if (conta.id == id) {
                return conta;
            }
        }
        return null;
    }

    consultarContaPorNumero(numero: string): Conta | null {
        for (let conta of this._contas) {
            if (conta.numero == numero) {
                return conta;
            }
        }
        return null;
    }

    consultarCliente(id: number): Cliente | null {
        for (let cliente of this._clientes) {
            if (cliente.id == id) {
                return cliente;
            }
        }
        return null;
    }

    consultarClientePorCpf(cpf: string): Cliente | null {
        for (let cliente of this._clientes) {
            if (cliente.cpf == cpf) {
                return cliente;
            }
        }
        return null;
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        const conta = this.consultarContaPorNumero(numeroConta);
        const cliente = this.consultarClientePorCpf(cpfCliente);

        if (conta && cliente) {
            if (conta.cliente !== null && conta.cliente.cpf !== cpfCliente) {
                console.log(`Erro: A conta ${numeroConta} já pertence a outro cliente.`);
                return;
            }

            conta.cliente = cliente;
            cliente.adicionarConta(conta);
            console.log(`Conta ${numeroConta} associada ao cliente ${cliente.nome} com sucesso.`);
        } else {
            console.log(`Erro: Conta ou Cliente não encontrados.`);
        }
    }

    listarContasCliente(cpf: string): Conta[] {
        const cliente = this.consultarClientePorCpf(cpf);
        return cliente ? cliente.contas : [];
    }

    totalizarSaldoCliente(cpf: string): number {
        const contasCliente = this.listarContasCliente(cpf);
        let total = 0;
        for (let conta of contasCliente) {
            total += conta.saldo;
        }
        return total;
    }
}

const banco = new Banco();

const cliente1 = new Cliente(1, "João Silva", "111.111.111-11", new Date(1990, 5, 15));
const cliente2 = new Cliente(2, "Maria Souza", "222.222.222-22", new Date(1985, 10, 20));

banco.inserirCliente(cliente1);
banco.inserirCliente(cliente2);

const clienteDuplicado = new Cliente(1, "Carlos Clone", "333.333.333-33", new Date(2000, 1, 1));
banco.inserirCliente(clienteDuplicado);

const conta1 = new Conta(1, "101-1", 500, new Date());
const conta2 = new Conta(2, "202-2", 1200, new Date());
const conta3 = new Conta(3, "303-3", 300, new Date());

banco.inserirConta(conta1);
banco.inserirConta(conta2);
banco.inserirConta(conta3);

const contaDuplicada = new Conta(99, "101-1", 100, new Date());
banco.inserirConta(contaDuplicada);

banco.associarContaCliente("101-1", "111.111.111-11");
banco.associarContaCliente("202-2", "111.111.111-11");
banco.associarContaCliente("303-3", "222.222.222-22");

banco.associarContaCliente("101-1", "111.111.111-11"); 
banco.associarContaCliente("101-1", "222.222.222-22"); 

console.log("\nContas do João (111.111.111-11):", banco.listarContasCliente("111.111.111-11").map(c => c.numero));

console.log("Saldo total do João:", banco.totalizarSaldoCliente("111.111.111-11")); 
console.log("Saldo total da Maria:", banco.totalizarSaldoCliente("222.222.222-22"));