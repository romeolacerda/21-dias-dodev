let tamanho = Number(prompt("Qual o tamanho do array?"))
let numbers = []

while(numbers.length <= tamanho){
    let newNumber = parseInt(prompt("Digite um numero"))
    numbers.push(newNumber)
}

for(let i = 0; i<= (numbers.length - 1);i++){
    console.log(numbers[i])
}

for(let i = (numbers.length - 1); i >= 0;i--){
    console.log(numbers[i])
}