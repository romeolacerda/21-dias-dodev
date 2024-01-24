//caixa eletronico
let saldo = 0

do {
    let value = Number(prompt('Qual o valor da transação?'))
    let action = prompt("O que você quer fazer?\n S. Sacar \n D. Depositar")
    if(action == "S" && saldo <= 0){
        alert("Você não pode ficar com saldo negativo!")
    } else if(action == "S" && saldo > 0) {
        saldo -= value
        alert("saque feito")
    } else if(action == "D"){
        saldo += value
        alert("Deposito feito")
    }

    alert(`${saldo} é o saldo total`)
    continuar = prompt("quer continuar transacionando? 1. sim 2.não")
} while (continuar == "1");

alert(`${saldo} é o saldo total, `)