"use strict";
class Triangulo {
    l1;
    l2;
    l3;
    constructor(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    ehTriangulo() {
        if ((this.l2 - this.l3 < this.l1 || this.l3 - this.l2 < this.l1) && this.l1 < this.l2 + this.l3) {
            return true;
        }
        else {
            return false;
        }
    }
    ehIsoceles() {
        if (this.ehTriangulo() == true) {
            if (this.l1 == this.l2 || this.l1 == this.l3 || this.l2 == this.l3) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    ehEquilatero() {
        if (this.ehTriangulo() == true) {
            if (this.l1 == this.l2 && this.l1 == this.l3) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    ehEscaleno() {
        if (this.ehTriangulo() == true) {
            if (this.l1 != this.l2 || this.l1 != this.l3 || this.l2 != this.l3) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
let triangulo1 = new Triangulo(2, 3, 2);
let triangulo2 = new Triangulo(5, 5, 5);
let triangulo3 = new Triangulo(7, 8, 9);
let t4 = new Triangulo(110, 20, 12);
console.log(triangulo1.ehIsoceles());
console.log(triangulo2.ehEquilatero());
console.log(triangulo3.ehEscaleno());
console.log(t4.ehTriangulo());
