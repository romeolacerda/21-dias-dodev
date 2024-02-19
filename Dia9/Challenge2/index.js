let confirm = "n"

while (confirm == "n") {
    let nome = prompt("Qual o seu nome")
    let idade = prompt("Qual a sua idade?")
    var salarioAtual = parseFloat(prompt("Qual o seu salario?"))
    confirm = prompt(`Seus dados estão corretos?\n nome: ${nome}\n idade: ${idade}\n salario : R$${salarioAtual}`)
}

let aumento = 0.015
console.log("previsão de aumento")

for(let ano = 1; ano <= 10; ano ++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2024+ ano) + " = R$" + Math.floor(salarioAtual))
}
// for(let i = 1 ; i <= 10; i++){
//     console.log(`O seu salario do ano ${i} é ${salario *(raiseFee * Math.pow(2,i))}`)
// }