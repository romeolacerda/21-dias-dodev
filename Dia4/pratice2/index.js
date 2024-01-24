let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual a sua idade?"))
let cnh = prompt("Você possui carteira de motorista? S/N")
let car = prompt("Você possui algum carro? S/N")

if(idade < 18 || cnh == "N"){
    console.log(`${nome}, você não pode dirigir!`)
} else if(idade > 18 && cnh == "S" && car == "N"){
    console.log(`${nome}, você pode dirigir mas não tem carro`)
} else if(idade > 18 && cnh == "S" && car == "S"){
    console.log(`${nome}, você é motorista`)
}