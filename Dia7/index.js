let condition = true
while(condition === true){
    let idade = Number(prompt("qual sua idade?"))
    if(idade < 18){
        console.log("Você é menor de idade")
        condition = false
    }
}

console.log("acabou o while")