console.log('\nHello World!\n');

function soma(a: number, b: number){
    return a+b;
}

function soma_string(c: string, d: string){
    return c+d;
}

let w:number = 1;
let x:number = 2;
let y:string = 'Chris ';

console.log('Hello', y)

// aqui é um comentário de linha única
 
/* aqui temos um comentário 
   de multiplas
   linhas
*/

let b: boolean = true;
console.log(!b); //'!' = negacao

console.log(typeof y); //operador typeof
console.log(typeof b);
console.log(typeof soma);
console.log(typeof(c)); //função typeof()
 
let j;
j = 2; //type inference
 
let cor: string = "azul";
cor = cor + ' escuro';
 
let frase = `\nOlá, 
meu nome é ${y}
e minha cor escolhida é ${cor}\n`;
console.log(frase);            
 
console.log(typeof NaN);

let numeros: number[] = [1,2,10]; //arrays começam de índice 0;
console.log(numeros[1]);
console.log(numeros[4]);
console.log(numeros[-1]);
console.log(numeros[numeros.length-1]); // exibir o último elemento da array
 
numeros[3] = 4;
console.log(numeros[3]);
numeros.push(5); //adiciona o número 5 na última posição
console.log(numeros);
numeros[10] = 11;
console.log(numeros);

console.log(numeros.reverse());
console.log(numeros.sort());
 
let a: number = 10;
if (a < 10) {
    console.log("menor que 10");
} else {
    if (a > 10) {
        console.log("a menor que 10");
    } else {
        console.log("a é igual a 10");
    }
}

let expressao: number = 1.2;
switch (expressao) {
    case 1: console.log("é 1");
            break;
    case 2: console.log("é 2");
            break;
    default: console.log("nenhuma das opções");
}

console.log(typeof expressao);