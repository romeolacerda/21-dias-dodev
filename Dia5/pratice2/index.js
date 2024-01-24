let action = prompt("O que você quer fazer no posto? \n Abastecer gasolina? (G) \n Abastecer Alcool? (A)\n Ou encher Pneus(P)")

switch (action) {
    case "G":
        value = Number(prompt("Quantos litros de gasolina você quer abastecer?"))
        console.log(`Tanque cheio, ficou R$ ${value * 5}`)
        break;
    case "A":
        value = Number(prompt("Quantos litros de alcool você quer abastecer?"))
        console.log(`Tanque cheio, ficou R$ ${value * 5}`)
        break;
    case "P":
        console.log("Pneus calibrados com sucesso!")
        break;
    default:
        console.log("Insira uma opção valida!")
        break;
}