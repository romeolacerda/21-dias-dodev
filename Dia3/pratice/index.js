let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Digite seu nome")
idade = parseInt(prompt("digite sua idade"))
altura = parseFloat(prompt("digite sua altura"))
peso = parseInt(prompt("digite seu peso"))

let anoNasc = 0
anoNasc = 2024 - idade

let imc = 0
imc = peso / (altura * altura)

console.log(nome, idade, altura, peso, imc)