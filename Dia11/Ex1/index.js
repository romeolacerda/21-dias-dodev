let nomes = []
let notas = []
let parar = "n"
let total = 0

while(parar == "n"){
    let aluno = prompt("Qual o nome do aluno?")
    let nota = parseInt(prompt("Qual a nota do aluno anterior?"))
    
    total += nota

    nomes.push(aluno)
    notas.push(nota)

    parar = prompt("quer parar?")
}

console.log(`A soma de todas as notas é : ${total}`)
console.log(`A média total é : ${total / (nomes.length)}`)
