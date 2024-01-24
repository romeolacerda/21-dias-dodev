let cadastrar = "S"
let homens = 0
let mulheres7 = 0
let maiorNota = 0
let alunos = 0
let mediaGeral = 0
let somaDasNotas = 0

while(cadastrar == "S"){
    let sexo = prompt("Qual o seu sexo? H/M ")
    let nota = Number(prompt("Qual a sua nota? "))

    if(sexo == "H"){
        homens++
        if(maiorNota < nota){
            maiorNota = nota
            console.log(`A nova maior nota dos homens é :${maiorNota}`)
        }
    } else if (sexo == "M" && nota >= 7){
        mulheres7++
        console.log(`a quantidade de mullheres com media mior que sete é :${mulheres7}`)
    }

    alunos++
    somaDasNotas += nota
    mediaGeral = somaDasNotas/alunos

    cadastrar = prompt("Quer se cadastrar? ")
}
alert(`media geral :${mediaGeral}, \n quantos homens enviaram as notas :${homens},\n quantas mulheres tiveram notas acima de 7 :${mulheres7}\n e qual a maior nota dentre os homens :${maiorNota}`)

