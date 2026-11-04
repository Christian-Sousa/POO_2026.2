function arrayFunction(numbers: string): Array<number> {
    const resultado: Array<number> = [];

    numbers.split("-").forEach(element => {
        resultado.push(Number(element));
    });
    return resultado;
}

console.log(arrayFunction("10-20-30-40-50"))