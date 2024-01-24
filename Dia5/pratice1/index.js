let n1 = Number(prompt("Diga seu primeiro numero: "))
let n2 = Number(prompt("Diga seu segundo numero: "))

operation = Number(prompt("Operação: \n 1.Soma \n 2.Subtração \n 3.Multipilicação \n 4.Divisão"))

switch (operation) {
    case 1:
        console.log(`soma = ${n1 + n2}`)
        break;
    case 2:
        console.log(`subtração = ${n1 - n2}`)
        break;
    case 3:
        console.log(`Multipilicação = ${n1 * n2}`)
        break;
    case 4:
        console.log(`Divisão = ${n1 / n2}`)
        break;
    default: 
        console.log("Insira um numero valido")
        break;
}