class Numero{
    valor: number

    Ehpar(): boolean{
        if (this.valor % 2 == 0){
            return true
        }else{
            return false
        }
    }

    Ehimpar(): boolean{
        if (this.valor % 2 != 0){
            return true
        }else{
            return false
        }
    }
}

let num1 = new Numero()
num1.valor = 47
console.log(num1.Ehimpar())

let num2 = new Numero()
num2.valor = 20
console.log(num2.Ehpar())