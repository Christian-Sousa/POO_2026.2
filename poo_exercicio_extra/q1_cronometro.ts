class Cronometro{
    segundos: number;

    constructor(){
        this.segundos = 0;
    }

    avancar(valor: number) : void{
        if (valor > 0){
            this.segundos += valor;
        }
    }

    zerar() : void{
        this.segundos = 0;
    }

    emMinutos() : number{
        return this.segundos / 60;
    }
}

let clock1 = new Cronometro();
let clock2 = new Cronometro();
clock1.avancar(90)
clock2.avancar(50)
console.log(clock1.segundos)
clock1.avancar(30)
clock2.avancar(70)
console.log(clock1.segundos)
console.log(clock1.emMinutos())
clock1.avancar(-20)
console.log(clock1.segundos)
clock2.avancar(20)
clock1.zerar()
console.log(clock1.segundos)
console.log(clock2.segundos)
