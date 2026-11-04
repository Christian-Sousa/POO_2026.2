"use strict";
class Impressora {
    paginas;
    colorida;
    totalPaginasImpressas;
    valorTotalImpresso;
    constructor() {
        this.paginas = 0;
        this.colorida = false;
        this.totalPaginasImpressas = 0;
        this.valorTotalImpresso = 0;
    }
    iniciarPedido(paginas, colorida) {
        if (paginas > 0) {
            this.paginas = paginas;
            this.colorida = colorida;
        }
    }
    calcularValor() {
        if (this.colorida == true) {
            return 0.8 * this.paginas;
        }
        else {
            return 0.25 * this.paginas;
        }
    }
    imprimir() {
        this.totalPaginasImpressas += this.paginas;
        this.valorTotalImpresso += this.calcularValor();
    }
}
let printer_home = new Impressora();
printer_home.iniciarPedido(10, false);
printer_home.imprimir();
printer_home.iniciarPedido(10, true);
printer_home.imprimir();
console.log(printer_home.totalPaginasImpressas);
console.log(printer_home.valorTotalImpresso);
console.log(printer_home.calcularValor());
let printer_office = new Impressora();
printer_office.iniciarPedido(50, true);
printer_office.imprimir();
console.log(printer_office.totalPaginasImpressas);
console.log(printer_office.valorTotalImpresso);
