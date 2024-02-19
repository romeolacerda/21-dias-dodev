let number = parseInt(prompt("qual seu numero?"))
let numbers = []
numbers[0] = number - 1
numbers[1] = number 

for(let i = 2; i<=10; i++){
    numbers[i] = numbers[i-1] + numbers[i-2]
}

console.log("Fibonacci" + numbers)
