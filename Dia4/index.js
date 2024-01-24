let idade = Number(prompt("insira a sua idade "))
let nome = prompt("Insira seu nome")

if(idade === 23 && nome === "Giovanni"){
    console.log("Seu nome é giovanni e voce tem 23 anos")
} else if(idade === 23 || nome === "Giovanni") {
    console.log("Você tem 23 anos ou seu nome é Giovanni")
} else {
    console.log("Seu nome não é giovanni e você nao tem 23")
}