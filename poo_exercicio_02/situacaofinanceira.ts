class SituacaoFinanceira{
    valorCreditos: number;
    valorDebitos: number;

    calcularSaldo(): number{
        return this.valorCreditos - this.valorDebitos
    }
}

let situacao1 = new SituacaoFinanceira();
situacao1.valorCreditos = 300;
situacao1.valorDebitos = 500;

console.log(situacao1.calcularSaldo());
