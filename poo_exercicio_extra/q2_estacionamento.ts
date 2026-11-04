class Estacionamento{
    placa: string;
    horas: number;

    constructor(placa : string){
        this.placa = placa;
        this.horas = 0;
    }

    registrarPermanencia(horas : number) : void{
        if (horas>0)
            this.horas = horas;
    }

    calcularHorasCobradas(): number {
        if ( this.horas > Math.round(this.horas)){
            return Math.round(this.horas)+1
        }else{
            if ((this.horas*100)%5==0){
                return Math.round(this.horas)
            }else{
                return this.horas
            }
        }
    }

    calcularValor() : number{
        if(this.calcularHorasCobradas() == 0 ){
            return 0;
        }else{
            return 8 + (this.calcularHorasCobradas()-1) * 5
        }
    }

    emitirTicket() : string {
        return `

        *COMPROVANTE DE PAGAMENTO - ESTACIONAMENTO*
        
        PLACA: ${this.placa}
        HORAS COBRADAS: ${this.calcularHorasCobradas()}
        VALOR TOTAL: ${this.calcularValor()}
        `
    }
}

let palio : Estacionamento = new Estacionamento('TDU0I00');
palio.registrarPermanencia(0)
console.log(palio.calcularHorasCobradas())
console.log(palio.calcularValor())
console.log(palio.emitirTicket())

let fusca : Estacionamento = new Estacionamento('MFD0M11');
fusca.registrarPermanencia(1)
console.log(fusca.calcularHorasCobradas())
console.log(fusca.calcularValor())
console.log(fusca.emitirTicket())

let uno : Estacionamento = new Estacionamento('MDO4D55');
uno.registrarPermanencia(1.2)
console.log(uno.calcularHorasCobradas())
console.log(uno.calcularValor())
console.log(uno.emitirTicket())

let celta : Estacionamento = new Estacionamento('DDR4U10');
celta.registrarPermanencia(3.5)
console.log(celta.calcularHorasCobradas())
console.log(celta.calcularValor())
console.log(celta.emitirTicket())

celta.registrarPermanencia(-2)
console.log(celta.calcularHorasCobradas())
console.log(celta.calcularValor())
console.log(celta.emitirTicket())
