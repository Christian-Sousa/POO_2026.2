class Circulo {
    raio: number;
    perimetro: number;
    area: number;
    
    calcularPerimetro(): number {
        this.perimetro = 2*this.raio*3.14;
        return this.perimetro;
    }

    calcularArea(): number {
        this.area = 3.14*this.raio**2;
        return this.area
    }
}

let circulo1 = new Circulo();
circulo1.raio = 6;

console.log(circulo1.calcularPerimetro().toPrecision(3));
console.log(circulo1.calcularArea().toPrecision(4));
