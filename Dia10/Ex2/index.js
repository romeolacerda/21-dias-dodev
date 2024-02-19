let numbers = []

while(numbers.length <= 4){
    let newNumber = parseInt(prompt("Digite um numero"))
    numbers.push(newNumber)
}

console.log(numbers)
// for(let i = 0; i<= numbers.length;i++){
//     console.log(numbers[i])
// }

for(let i = (numbers.length - 1); i >= 0;i--){
    console.log(numbers[i])
}